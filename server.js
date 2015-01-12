var express=require("express");
var app=express();
var http=require("http").Server(app);
var io=require("socket.io")(http);
app.use(express.static(__dirname+"/public"));
var legendsconstructor=require("./public/legends.js");
var games=[];
/*var fs=require("fs");
var savefile=__dirname+"/public/games.json";
fs.readFile(savefile,function(error,data){
  if(error||data==""){
    savegames();
  }
  else{
    data=JSON.parse(data);
    for(var gamenumber=0;gamenumber<data.length;gamenumber++){
      games[gamenumber]=new legendsconstructor();
      games[gamenumber].armies=data[gamenumber].armies;
      games[gamenumber].board=data[gamenumber].board;
      games[gamenumber].games.status="server";
      games[gamenumber].socket=io;
      games[gamenumber].gamedata=data[gamenumber].gamedata;
    }
  }
  http.listen(process.env.PORT||5000);
});
var savegames=function(){
  var data=[];
  for(var gamenumber=0;gamenumber<games.length;gamenumber++){
    if(games[gamenumber]){
      data[gamenumber]={"armies":games[gamenumber].armies,"board":games[gamenumber].board,"gamedata":games[gamenumber].gamedata};
    }
    else{
      data[gamenumber]=false;
    }
  }
  fs.writeFile(savefile,JSON.stringify(data));
}*/
var pg=require("pg");
var escape=require("pg-escape");
var databaseurl=process.env.DATABASE_URL||"postgres://postgres:password@localhost:5432/postgres";
pg.connect(databaseurl,function(err,client,done){
  client.query("SELECT value FROM data WHERE type='strategolegends'",function(err,result){
    done();
    if(err){
      savegames=function(){};
    }
    else if(result.rows.length==0){
      savegames();
    }
    else{
      try{
        var data=JSON.parse(result.rows[0].value);
        for(var gamenumber=0;gamenumber<data.length;gamenumber++){
          games[gamenumber]=new legendsconstructor();
          games[gamenumber].armies=data[gamenumber].armies;
          games[gamenumber].board=data[gamenumber].board;
          games[gamenumber].games.status="server";
          games[gamenumber].socket=io;
          games[gamenumber].gamedata=data[gamenumber].gamedata;
        }
      }
      catch(error){
        savegames();
      }
    }
    http.listen(process.env.PORT||5000);
  });
});
var savegames=function(){
  pg.connect(databaseurl,function(err,client,done){
    var data=[];
    for(var gamenumber=0;gamenumber<games.length;gamenumber++){
      if(games[gamenumber]){
        data[gamenumber]={"armies":games[gamenumber].armies,"board":games[gamenumber].board,"gamedata":games[gamenumber].gamedata};
      }
      else{
        data[gamenumber]=false;
      }
    }
    client.query(escape("UPDATE data SET value=%L WHERE type='strategolegends'",JSON.stringify(data)),function(err,result){
      done();
    });
  });
};
setInterval(savegames,600000);
var emitgameslist=function(socket){
  socket.emit("gameslist",(function(){
    var returnvalue=[];
    for(var gamenumber=0;gamenumber<games.length;gamenumber++){
      if(games[gamenumber]){
        returnvalue.push({
          "gameid":games[gamenumber].gamedata.gameid,
          "gamename":games[gamenumber].gamedata.gamename,
          "haspassword":games[gamenumber].gamedata.password!="",
          "authentication":games[gamenumber].gamedata.authentication,
          "players":games[gamenumber].gamedata.players
        });
      }
      else{
        returnvalue.push(false);
      }
    }
    return returnvalue;
  })());
};
var gameactionvalidate=function(socket,data){
  if(data&&data.gameid>-1&&games[data.gameid]&&data.authentication==games[data.gameid].gamedata.authentication){
    if(games[data.gameid].gamedata.password==""||data.password==games[data.gameid].gamedata.password){
      return true;
    }
    else{
      socket.emit("errormessage","incorrect password");
      return false;
    }
  }
  else{
    socket.emit("errormessage","game no longer exists");
    return false;
  }
};
io.on("connection",function(socket){
  emitgameslist(socket);
  socket.on("creategame",function(data){
    var gameid=games.length;
    games.push(new legendsconstructor());
    try{
      games[gameid].armies=data.armies;
      games[gameid].board=data.board;
      games[gameid].games.status="server";
      games[gameid].socket=io;
      games[gameid].gamedata={
        "gameid":gameid,
        "gamename":data.gamename,
        "password":data.password,
        "authentication":Math.random().toString().substr(2),
        "players":[]
      };
      for(var armynumber=0;armynumber<games[gameid].armies.length;armynumber++){
        games[gameid].gamedata.players.push({"side":games[gameid].armies[armynumber].side,"playername":games[gameid].armies[armynumber].playername});
      }
      socket.emit("gamecreated",{"gameid":gameid,"authentication":games[gameid].gamedata.authentication});
      emitgameslist(socket.broadcast);
      savegames();
    }
    catch(error){
      games.splice(gameid,1);
      socket.emit("errormessage","invalid new game");
    }
  });
  socket.on("deletegame",function(data){
    if(gameactionvalidate(socket,data)){
      games[data.gameid]=false;
      var nogamesleft=true;
      for(var gamenumber=0;gamenumber<games.length;gamenumber++){
        if(games[gamenumber]){
          nogamesleft=false;
        }
      }
      if(nogamesleft){
        games=[];
      }
      emitgameslist(io);
      savegames();
    }
  });
  socket.on("joingame",function(data){
    if(gameactionvalidate(socket,data)){
      socket.emit("init",{
        "board":games[data.gameid].board,
        "armies":games[data.gameid].armies,
        "gamename":games[data.gameid].gamedata.gamename
      });
    }
  });
  socket.on("pieceaction",function(data){
    if(gameactionvalidate(socket,data)){
      try{
        games[data.gameid][data.action](data.armynumber,data.power,data.number,games[data.gameid].server.waitforreply,data.x,data.y);
        if(!games[data.gameid].server.waitforreply){
            socket.broadcast.emit("pieceaction",data);
        }
      }
      catch(error){
        socket.emit("errormessage","invalid action");
      }
    }
  });
  socket.on("disconnect",function(){
    savegames();
  });
});