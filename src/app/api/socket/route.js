import { Server } from "socket.io";

let io;
let userCounter = 1; // Kullanıcı sayacını başlatıyoruz

export async function GET(req) {
  if (!io) {
    io = new Server(4001, { cors: { origin: "*" } });

    io.on("connection", (socket) => {
      const userName = userCounter;
      userCounter += 1; // Sonraki kullanıcı için sayacı arttırıyoruz

      console.log(`Kullanıcı bağlandı: ${userName}`, socket.id);

      // Kullanıcıya ismini gönderiyoruz
      socket.emit("kullaniciAdi", userName);

      socket.on("mesajGonder", (mesaj) => {
        io.emit("mesajAl", { mesaj: mesaj, from: userName });
      });

      socket.on("disconnect", () => {
        console.log(`Kullanıcı bağlantısı kesildi: ${userName}`, socket.id);
      });
    });
  }

  return new Response("Socket.io server çalışıyor!", { status: 200 });
}
