"use client";

import { useEffect, useState } from "react";
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

export default function Social() {
    const [message, setMessage] = useState<string>(''); // Mesaj durumu
    const [messages, setMessages] = useState<string[]>([]); // Mesajlar durumu

    useEffect(() => {
        // Mesajları dinle
        socket.on('message', (msg: string) => { // Mesajın türünü belirt
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        // Temizleme fonksiyonu
        return () => { 
            socket.off('message'); 
        };
    }, []);

    const sendMessage = () => {
        if (message.trim()) { // Boş mesaj göndermemek için kontrol
            socket.emit('message', message);
            setMessage('');
        }
    };

    return (
        <div className="h-mainScreen w-screen flex justify-center">
            <div className="socialMainScreen">
                <div className="flex flex-col bg-pink-700 p-8 h-full w-85">
                    <div className="socialButton">Herkese Açık</div>
                    <div className="socialButton">Arkadaş Ekle</div>
                    <div className="socialButton">Arkadaşların</div>
                </div>

                <div className="flex flex-col w-full">
                    <div className="bg-blue-600 h-full w-full">
                        <ul>
                            {messages.map((msg, index) => (
                                <li key={index}>{msg}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="messageTextBox"
                        />
                        <button onClick={sendMessage}>Mesaj Gönder</button>
                    </div>
                </div>
            </div>
        </div>
    );
}