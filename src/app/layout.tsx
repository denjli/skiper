import type { Metadata } from "next";

// TODO: Pangolin font is still not applied fix this
import { Geist, Geist_Mono, Pangolin, Noto_Sans_JP } from "next/font/google";
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

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
});

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${pangolin} ${notoSansJP.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
