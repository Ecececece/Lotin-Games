import "../CSS/navbar.css";
import "../CSS/home.css";
import "../CSS/social.css";
import "../CSS/suggestions.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <title>Lotin</title>
            <body>
                <div className="navbar">
                    <div className="navbarCenter">
                        <a href="/" className="navbarLogo">LOTIN</a>
                        <div className="navbarButton border-x-2">oyunlar<img src="downArrow.svg" className="navbarArrow right-5" /></div>
                        <a href="/Social" className="navbarButton">sosyal<img src="downArrow.svg" className="navbarArrow right-6" /></a>
                        <a href="/Suggestions" className="navbarButton pr-8">önerileriniz<img src="downArrow.svg" className="navbarArrow right-1" /></a>
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