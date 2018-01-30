'use strict';

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = 3000;
const USERS = {};

app.use(express.static('./public'));

io.on('connection', socket => {
  USERS[socket.id] = {};
  USERS[socket.id].username = 'anonymous';

  socket.on('disconnect', () => {
    console.log('LEFT', socket.id);
  });

  socket.on('send-message', data => {
    data.username = USERS[socket.id].username;
    data.timestamp = new Date().toLocaleTimeString();
    console.log('MESSAGE:', data.message);
    io.emit('receive-message', data);
  });

  socket.on('set-username', data => {
    USERS[socket.id].username = data.username;
  });
});

http.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});