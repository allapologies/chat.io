var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');

const connections = [];

server.listen(3001);
app.use('/', express.static(path.resolve(__dirname + '/../')));

io.on('connection', socket => {
  connections.push(socket);

  socket.on('message', data => {
    connections.forEach(connectedSocket => {
      if (connectedSocket !== socket) {
        connectedSocket.emit('message', data);
      }
    });
  });

  socket.on('disconnect', () => {
    const index = connections.indexOf(socket);
    connections.splice(index, 1);
  });
});