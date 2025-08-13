import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "OpenAgricultureDiary - オープンソース農業日誌管理ツール",
  description: "誰でも使いやすい農業日誌管理ツール。作物の栽培記録、圃場管理、収穫管理を効率的に行えるオープンソースアプリケーションです。"
};

export default function Home() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://example.com';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-100 via-blue-50 to-green-50 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-200/30 to-green-200/30"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-sky-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-white text-4xl">🌾</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-sky-900 mb-6 leading-tight">
              OpenAgricultureDiary
            </h1>
            <p className="text-xl md:text-2xl text-sky-700 mb-8 leading-relaxed">
              誰でも使いやすい<br className="md:hidden" />
              <span className="font-semibold text-green-700">オープンソース農業日誌管理ツール</span>
            </p>
            <p className="text-lg text-sky-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              作物の栽培記録、圃場管理、収穫管理を効率的に行い、<br />
              あなたの農作業をもっとスマートに。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-sky-500 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-sky-600 hover:to-green-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                今すぐ始める
              </a>
              <a 
                href="https://github.com/cyrus07424/openAgricultureDiary"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-sky-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-sky-200 hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                GitHub で見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sky-900 mb-4">主な機能</h2>
            <p className="text-xl text-sky-600 max-w-2xl mx-auto">
              農業経営に必要な機能を網羅した、包括的な管理ツールです
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-sky-800 mb-4">栽培記録管理</h3>
              <p className="text-sky-600 leading-relaxed">
                播種から収穫まで、作物の成長過程を詳細に記録。生育状況や作業履歴を一元管理できます。
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🗺️</span>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">圃場管理</h3>
              <p className="text-green-600 leading-relaxed">
                複数の圃場を効率的に管理。面積、土壌情報、作付け計画などを視覚的に把握できます。
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-4">収穫・売上管理</h3>
              <p className="text-orange-600 leading-relaxed">
                収穫量の記録から売上の管理まで。経営分析に必要なデータを自動で集計します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sky-900 mb-4">なぜOpenAgricultureDiaryを選ぶのか</h2>
            <p className="text-xl text-sky-600 max-w-3xl mx-auto">
              オープンソースならではのメリットと、農業に特化した機能設計
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-sky-800 mb-2">完全無料</h3>
                  <p className="text-sky-600">オープンソースソフトウェアなので、永続的に無料でご利用いただけます。</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">カスタマイズ可能</h3>
                  <p className="text-green-600">ソースコードが公開されているため、ニーズに合わせて自由にカスタマイズできます。</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">データの安全性</h3>
                  <p className="text-blue-600">オンプレミス環境での運用も可能で、大切な農業データを安全に管理できます。</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-800 mb-2">コミュニティ主導</h3>
                  <p className="text-purple-600">農業従事者の声を反映した機能開発で、実用性の高いツールを提供します。</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-indigo-800 mb-2">継続的な改善</h3>
                  <p className="text-indigo-600">オープンソースコミュニティによる継続的な機能追加と改善が行われます。</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-teal-800 mb-2">多言語対応</h3>
                  <p className="text-teal-600">日本語をはじめ、複数の言語に対応した国際的なソリューションです。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              今すぐ始めて、農業経営を効率化しませんか？
            </h2>
            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              無料で利用できるOpenAgricultureDiaryで、<br />
              あなたの農作業をデジタル化しましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-sky-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-sky-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                アプリを開く
              </a>
              <a 
                href="https://github.com/cyrus07424/openAgricultureDiary"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-white hover:bg-white hover:text-sky-700 transition-all duration-300"
              >
                ソースコードを見る
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
