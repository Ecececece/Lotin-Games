"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

// Portu 4001 olarak ayarlıyoruz
const socket = io("http://localhost:4001"); // Vercel URL'ini burada kullanabilirsin

export default function Chat() {
  const [mesaj, setMesaj] = useState("");
  const [mesajlar, setMesajlar] = useState([]);
  const [kullaniciAdi, setKullaniciAdi] = useState(null); // Kullanıcı adı burada saklanacak

  useEffect(() => {
    socket.on("mesajAl", (data) => {
      // Mesaj sunucudan geldikçe mesajlar listesine sadece bir kez eklenir
      setMesajlar((prev) => {
        // Aynı mesajı birden fazla eklememek için kontrol edelim
        if (!prev.some((msg) => msg === `${data.from}: ${data.mesaj}`)) {
          return [...prev, `${data.from}: ${data.mesaj}`];
        }
        return prev;
      });
    });

    // İlk başta kullanıcı adı alalım
    socket.on("kullaniciAdi", (data) => {
      setKullaniciAdi(data); // Server'dan gelen kullanıcı adını alıyoruz
    });

    return () => {
      socket.off("mesajAl");
      socket.off("kullaniciAdi");
    };
  }, []);

  const mesajGonder = () => {
    socket.emit("mesajGonder", mesaj);
    // Kendi mesajınızı da kullanıcı adıyla ekleyin
    setMesajlar((prev) => [...prev, `${kullaniciAdi}: ${mesaj}`]);
    setMesaj("");
  };

  return (
    <div className="p-4 text-black">
      <h2 className="text-xl font-bold mb-4">Chat</h2>
      <div className="border p-2 h-40 overflow-y-auto">
        {mesajlar.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={mesaj}
        onChange={(e) => setMesaj(e.target.value)}
        className="border p-2 w-full mt-2"
        placeholder="Mesaj yaz..."
      />
      <button onClick={mesajGonder} className="bg-blue-500 text-white p-2 mt-2 w-full">
        Gönder
      </button>
    </div>
  );
}
