'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://app.openagriculturediary.com';

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">🌾</span>
            </div>
            <span className="text-xl font-bold text-sky-900">OpenAgricultureDiary</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sky-800 hover:text-sky-600 transition-colors">
              ホーム
            </Link>
            <Link href="/terms" className="text-sky-800 hover:text-sky-600 transition-colors">
              利用規約
            </Link>
            <Link href="/privacy" className="text-sky-800 hover:text-sky-600 transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/faq" className="text-sky-800 hover:text-sky-600 transition-colors">
              よくある質問
            </Link>
            <a 
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-sky-500 to-green-500 text-white px-6 py-2 rounded-full hover:from-sky-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              アプリを開く
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-sky-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-sky-100 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-sky-800 hover:text-sky-600 transition-colors">
                ホーム
              </Link>
              <Link href="/terms" className="text-sky-800 hover:text-sky-600 transition-colors">
                利用規約
              </Link>
              <Link href="/privacy" className="text-sky-800 hover:text-sky-600 transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/faq" className="text-sky-800 hover:text-sky-600 transition-colors">
                よくある質問
              </Link>
              <a 
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-sky-500 to-green-500 text-white px-6 py-2 rounded-full hover:from-sky-600 hover:to-green-600 transition-all duration-300 shadow-lg text-center"
              >
                アプリを開く
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}