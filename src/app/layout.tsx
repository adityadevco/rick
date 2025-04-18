import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rick Roll Link Generator",
  description: "Create custom links that redirect to Rick Astley's famous music video. Prank your friends with customized Rick Roll links.",
  keywords: ["rick roll", "rickroll", "prank", "link generator", "custom link", "rick astley"],
  metadataBase: new URL('https://rickroll-link.net'),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#18181B',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Google AdSense verification meta tag */}
        <meta name="google-adsense-account" content="ca-pub-9985023579530298" />
      </head>
      <body>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
