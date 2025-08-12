import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "OpenAgricultureDiary - オープンソース農業管理ツール",
  description: "誰でも使いやすい農業管理ツール。作物の栽培記録、圃場管理、収穫管理を効率的に行えるオープンソースアプリケーションです。",
  keywords: "農業, 農業管理, 栽培記録, 圃場管理, 収穫管理, オープンソース",
  openGraph: {
    title: "OpenAgricultureDiary - オープンソース農業管理ツール",
    description: "誰でも使いやすい農業管理ツール。作物の栽培記録、圃場管理、収穫管理を効率的に行えるオープンソースアプリケーションです。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased font-sans flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
