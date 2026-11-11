import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nusawis",
  description: "Jelajahi wisata Nusantara.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={dmSans.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}