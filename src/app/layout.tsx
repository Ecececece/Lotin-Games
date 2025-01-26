"use client"
import { useEffect } from "react";
import "../CSS/navbar.css";
import "../CSS/home.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    useEffect(() => {
        fetch("/api/socket");
    }, []);

    return (
        <html lang="en">
            <title>Lotin</title>
            <body>
                <div className="navbar">
                    <div className="navbarCenter">
                        <div className="navbarLogo">LOTIN</div>
                        <div className="navbarButton border-x-2">oyunlar<img src="downArrow.svg" className="navbarArrow right-5" /></div>
                        <div className="navbarButton">sohbet<img src="downArrow.svg" className="navbarArrow right-6" /></div>
                        <div className="navbarButton pr-8">önerileriniz<img src="downArrow.svg" className="navbarArrow right-1" /></div>
                    </div>
                    <div className="navbarRight">
                        <div className="navbarLoginButton border-x-2">
                            <img src="user.svg" className="navbarUser" />
                            <div className="absolute right-3">giris yap</div>
                        </div>
                    </div>
                </div>
                {children}
            </body>
        </html>
    );
}