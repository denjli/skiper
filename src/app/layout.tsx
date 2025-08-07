import type { Metadata } from "next";
import { Geist, Geist_Mono, Pangolin } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pangolin = Pangolin({ weight: "400", variable: "--font-pangolin" });

export const metadata: Metadata = {
  title: "Bungo — Quality Japenese Stationary",
  description: "Back to school in style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${pangolin} font-pangolin`}
      >
        {children}
      </body>
    </html>
  );
}
