import type { Metadata } from "next";
import { Geist, Geist_Mono, Teachers } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const teachers = Teachers({
  variable: "--font-teachers",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bungo — Quality Japenese Stationary", // TODO: Change title at end
  description: "Back to school in style.", // TODO: Change description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${teachers.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
