import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Alex Beispiel – Portfolio",
    description: "Scroll-Sections mit Typewriter-Effekt",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="de">
        <body>{children}</body>
        </html>
    );
}