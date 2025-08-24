
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
          letterSpacing: "0.5px",
         //backgroundColor: "#1a1a2e", 
          color: "#fff", // White text for contrast
          //transition: "background-color 1s ease",
        }}
      >
        {/* Cosmic/Space Background with Nebula-like effect */}
       {/* <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 pointer-events-none animate-bg-move"
          style={{
            background:
              "radial-gradient(circle at 20% 40%, #4B2067 0%, transparent 60%)," +
              "radial-gradient(circle at 80% 60%, #FFD700 0%, transparent 60%)," +
              "radial-gradient(circle at 50% 90%, #191970 0%, transparent 70%)",
            opacity: 0.25,
            width: "100vw",
            height: "100vh",
            transition: "background 1s linear",
          }}
        />/*}

        {/* Subtle Animated Particles or Stars */}
        <div
          className="fixed inset-0 z-0 pointer-events-none bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('/stars.jpg')",
            backgroundSize: "cover", // Make sure the image covers the entire container
            opacity: 0.1,
            backgroundColor: "#ff0000 !important",
            animation: "stars 60s infinite linear",
    
          }}
        />

        {/* Glowing Gold Effects */}
        <div
          aria-hidden="true"
          className="fixed inset-0 z-2 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255, 55, 0, 0.5) 0%, transparent 50%)",
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
