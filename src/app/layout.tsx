
import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-jazz",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Avielle Lewis - Full Stack Developer",
  description: "Portfolio of Avielle Lewis with a New Orleans and Space Vibe.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${geistSans.variable} ${geistMono.variable} ${quicksand.variable}`}
        style={{
          minHeight: "100vh",
          position: "relative",
          overflowX: "hidden",
          fontSize: "18px",
          lineHeight: "1.6",
          letterSpacing: "0.9px",
          transition: "background-color 1s ease",
          
          
        }}
      >
       

        
        {/* Glowing Gold Effects */}
        <div
          aria-hidden="true"
          className="fixed inset-0 z-2 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(210, 173, 26, 0.89) 0%, transparent 50%)",
            opacity: 0.3,
            width: "100vw",
            height: "100vh",
            transition: "background 1s ease-in-out",
          }}
        />
        {children}
      </body>
    </html>
  );
}
