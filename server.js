const express = require('express');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
      origin: process.env.CORS_ORIGIN || "http://localhost:3000", // Heroku'da ayarlayacağınız çevresel değişken
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
  }
});

io.on('connection', (socket) => {
  console.log('Yeni bir kullanıcı bağlandı: ', socket.id);

  socket.on('message', (msg) => {
    io.emit('message', (socket.id + ": " + msg));
  });

  socket.on('disconnect', () => {
    console.log('Kullanıcı ayrıldı: ', socket.id);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Socket.io sunucusu ${PORT} portunda çalışıyor`);
});