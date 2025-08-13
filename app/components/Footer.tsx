import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sky-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🌾</span>
              </div>
              <span className="text-xl font-bold">OpenAgricultureDiary</span>
            </div>
            <p className="text-sky-200 leading-relaxed">
              オープンソースの農業日誌管理ツール。<br />
              あなたの農作業をもっと効率的に。
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">サイトマップ</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sky-200 hover:text-white transition-colors">
                ホーム
              </Link>
              <Link href="/terms" className="text-sky-200 hover:text-white transition-colors">
                利用規約
              </Link>
              <Link href="/privacy" className="text-sky-200 hover:text-white transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/faq" className="text-sky-200 hover:text-white transition-colors">
                よくある質問
              </Link>
            </nav>
          </div>

          {/* Contact and Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">お問い合わせ</h3>
            <div className="space-y-2">
              <a 
                href="https://github.com/cyrus07424/openAgricultureDiary" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sky-200 hover:text-white transition-colors flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-sky-800 mt-8 pt-8 text-center">
          <p className="text-sky-200">
            &copy; {currentYear} <a href="https://github.com/cyrus07424/openAgricultureDiary" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">OpenAgricultureDiary</a>. All rights reserved.
          </p>
          <p className="text-sky-300 text-sm mt-2">
            OpenAgricultureDiary は MIT ライセンスの下で公開されています。
          </p>
        </div>
      </div>
    </footer>
  );
}