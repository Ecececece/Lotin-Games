import "../CSS/navbar.css";
import "../CSS/home.css";
import "../CSS/social.css";
import "../CSS/suggestions.css";

import Link from 'next/link';
import Image from 'next/image';

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
                        <Link href="/" className="navbarLogo">LOTIN</Link>
                        <div className="navbarButton border-x-2">oyunlar<Image src="downArrow.svg" alt="downArrow" className="navbarArrow right-5" /></div>
                        <Link href="/Social" className="navbarButton">sosyal<Image src="downArrow.svg" alt="downArrow" className="navbarArrow right-6" /></Link>
                        <Link href="/Suggestions" className="navbarButton pr-8">önerileriniz<Image src="downArrow.svg" alt="downArrow" className="navbarArrow right-1" /></Link>
                    </div>
                    <div className="navbarRight">
                        <div className="navbarLoginButton border-x-2">
                            <Image src="user.svg" alt="user" className="navbarUser" />
                            <div className="absolute right-3">giris yap</div>
                        </div>
                    </div>
                </div>
                {children}
            </body>
        </html>
    );
}