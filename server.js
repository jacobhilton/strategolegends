var express=require("express");
var app=express();
var http=require("http").Server(app);
var io=require("socket.io")(http);
app.use(express.static(__dirname+"/public"));
var legendsconstructor=require("./public/legends.js");
var fs=require("fs");
var savefile=__dirname+"/public/games.json";
var games=[];
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
}
var emitgameslist=function(socket){
  socket.emit("gameslist",(function(){
    var returnvalue=[];
    for(var gamenumber=0;gamenumber<games.length;gamenumber++){
      if(games[gamenumber]){
        returnvalue.push(games[gamenumber].gamedata);
      }
      else{
        returnvalue.push(false);
      }
    }
    return returnvalue;
  })());
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
    if(data&&data.gameid>-1&&games[data.gameid]&&data.authentication==games[data.gameid].gamedata.authentication){
      games[data.gameid]=false;
      emitgameslist(io);
      savegames();
    }
    else{
      socket.emit("errormessage","game no longer exists");
    }
  });
  socket.on("joingame",function(data){
    if(data&&data.gameid>-1&&games[data.gameid]&&data.authentication==games[data.gameid].gamedata.authentication){
      socket.emit("init",{
        "board":games[data.gameid].board,
        "armies":games[data.gameid].armies,
        "gamename":games[data.gameid].gamedata.gamename
      });
    }
    else{
      socket.emit("errormessage","game no longer exists");
    }
  });
  socket.on("pieceaction",function(data){
    if(data&&data.gameid>-1&&games[data.gameid]&&data.authentication==games[data.gameid].gamedata.authentication){
      try{
        games[data.gameid][data.action](data.armynumber,data.power,data.number,games[data.gameid].server.waitforreply,data.x,data.y);
        if(!games[data.gameid].server.waitforreply){
          socket.broadcast.emit("pieceaction",data);
        }
        savegames();
      }
      catch(error){
        socket.emit("errormessage","invalid action");
      }
    }
    else{
      socket.emit("errormessage","game no longer exists");
    }
  });
  socket.on("disconnect",function(){});
});