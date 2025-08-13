import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { GoogleTagManagerHead, GoogleTagManagerBody } from "./components/GoogleTagManager";

export const metadata: Metadata = {
  title: "OpenAgricultureDiary - オープンソース農業日誌管理ツール",
  description: "誰でも使いやすい農業日誌管理ツール。作物の栽培記録、圃場管理、収穫管理を効率的に行えるオープンソースアプリケーションです。",
  keywords: "農業, 農業日誌, 栽培記録, 圃場管理, 収穫管理, オープンソース",
  openGraph: {
    title: "OpenAgricultureDiary - オープンソース農業日誌管理ツール",
    description: "誰でも使いやすい農業日誌管理ツール。作物の栽培記録、圃場管理、収穫管理を効率的に行えるオープンソースアプリケーションです。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';

  return (
    <html lang="ja">
      <head>
        <GoogleTagManagerHead gtmId={gtmId} />
      </head>
      <body className="antialiased font-sans flex flex-col min-h-screen">
        <GoogleTagManagerBody gtmId={gtmId} />
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
