var express=require("express");
var app=express();
var http=require("http").Server(app);
var io=require('socket.io')(http);
app.use(express.static(__dirname+"/public"));
http.listen(process.env.PORT||5000);
var legendsconstructor=require("./public/legends.js");
var games=[];
io.sockets.on("connection",function(socket){
  socket.emit("gameslist",(function(){
    var returnvalue=[];
    for(var gameid=0;gameid<games.length;gameid++){
      returnvalue.push(games[gameid].armies);
    }
    return returnvalue;
  })());
  socket.on("creategame",function(data){
    var gameid=games.length;
    games.push(new legendsconstructor());
    games[gameid].armies=data.armies;
    games[gameid].board=data.board;
    socket.emit("gamecreated",gameid);
  });
  socket.on("joingame",function(data){
    if(typeof(games[data.gameid])=="undefined"){
      socket.emit("errormessage","game no longer exists");
    }
    else{
      socket.emit("init",{
        "board":games[data.gameid].board,
        "armies":games[data.gameid].armies
      });
    }
  });
  socket.on("pieceaction",function(data){
    if(typeof(games[data.gameid])=="undefined"){
      socket.emit("errormessage","game no longer exists");
    }
    else{
      games[data.gameid][data.action](data.armynumber,data.power,data.number,false,data.x,data.y);
      if(games[data.gameid].server.waitforreply){
        io.emit("pieceaction",data);
      }
      else{
        socket.broadcast.emit("pieceaction",data);
      }
    }
  });
  socket.on("disconnect",function(){});
});