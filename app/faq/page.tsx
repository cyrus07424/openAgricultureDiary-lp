import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "よくある質問 - OpenAgricultureDiary",
  description: "OpenAgricultureDiaryに関するよくある質問と回答をまとめています。"
};

export default function FAQ() {
  const faqs = [
    {
      category: "サービスについて",
      items: [
        {
          question: "OpenAgricultureDiary とは何ですか？",
          answer: "OpenAgricultureDiary は、農業経営をサポートするオープンソースの管理ツールです。作物の栽培記録、圃場管理、収穫管理などを効率的に行うことができます。完全無料で利用でき、ソースコードも公開されています。"
        },
        {
          question: "利用料金はかかりますか？",
          answer: "OpenAgricultureDiary は完全無料でご利用いただけます。オープンソースソフトウェアとして提供されているため、永続的に無料でお使いいただけます。"
        },
        {
          question: "商用利用は可能ですか？",
          answer: "はい、MITライセンスのもとで商用利用も可能です。ただし、営利目的での再販売などについては制限がある場合がありますので、ライセンス条項をご確認ください。"
        }
      ]
    },
    {
      category: "機能について",
      items: [
        {
          question: "どのような機能がありますか？",
          answer: "主な機能として、栽培記録管理、圃場管理、収穫・売上管理があります。播種から収穫まで作物の成長過程を記録し、複数の圃場を効率的に管理し、収穫量や売上の分析ができます。"
        },
        {
          question: "モバイルデバイスで使用できますか？",
          answer: "はい、レスポンシブデザインによりスマートフォンやタブレットでもご利用いただけます。圃場での作業中にもデータ入力が可能です。"
        },
        {
          question: "データのバックアップは取れますか？",
          answer: "はい、データのエクスポート機能により、重要な農業データをバックアップとして保存できます。また、オンプレミス環境での運用により、データの完全な管理も可能です。"
        }
      ]
    },
    {
      category: "技術・セットアップ",
      items: [
        {
          question: "どうやって始めればよいですか？",
          answer: "本サイトの「アプリを開く」ボタンからすぐに始められます。また、技術的な知識がある場合は、GitHubからソースコードをダウンロードして自分の環境で運用することも可能です。"
        },
        {
          question: "自分のサーバーで運用できますか？",
          answer: "はい、オープンソースなので自分のサーバーやクラウド環境で運用できます。これにより、データの完全な管理とカスタマイズが可能になります。"
        },
        {
          question: "システム要件はありますか？",
          answer: "現代的なWebブラウザがあれば利用できます。自己ホスティングの場合は、Node.js環境とデータベースが必要です。詳細な要件はGitHubリポジトリをご確認ください。"
        },
        {
          question: "カスタマイズは可能ですか？",
          answer: "はい、オープンソースなので自由にカスタマイズできます。新しい機能の追加や既存機能の変更など、ニーズに合わせて調整することができます。"
        }
      ]
    },
    {
      category: "サポート・コミュニティ",
      items: [
        {
          question: "サポートはありますか？",
          answer: "GitHubリポジトリを通じてコミュニティサポートを提供しています。バグ報告、機能要求、質問などはIssuesセクションで受け付けています。"
        },
        {
          question: "開発に参加したいのですが？",
          answer: "大歓迎です！GitHubリポジトリでPull Requestを送信してください。コード貢献、ドキュメント改善、翻訳支援など、様々な形での貢献が可能です。"
        },
        {
          question: "バグを見つけた場合はどうすればよいですか？",
          answer: "GitHubリポジトリのIssuesセクションでバグ報告をお願いします。可能な限り詳細な情報（環境、再現手順、期待される動作など）を含めてください。"
        },
        {
          question: "新機能の提案はできますか？",
          answer: "はい、GitHubのIssuesまたはDiscussionsセクションで新機能の提案をお願いします。コミュニティで議論し、実装の可能性を検討します。"
        }
      ]
    },
    {
      category: "データ・プライバシー",
      items: [
        {
          question: "データの安全性は保証されていますか？",
          answer: "適切なセキュリティ対策を講じていますが、オープンソースの性質上、完全な保証はできません。重要なデータについては、定期的なバックアップと適切なアクセス管理をお勧めします。"
        },
        {
          question: "データを他のシステムに移行できますか？",
          answer: "はい、標準的なフォーマット（CSV、JSONなど）でのデータエクスポート機能があります。これにより、他のシステムへの移行や外部ツールでの分析が可能です。"
        },
        {
          question: "アカウントを削除したらデータはどうなりますか？",
          answer: "アカウント削除時には、関連するデータも適切に削除されます。ただし、削除前に必要なデータはエクスポートしてバックアップを取ることをお勧めします。"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-sky-900 mb-4">よくある質問</h1>
          <p className="text-xl text-sky-600 max-w-2xl mx-auto">
            OpenAgricultureDiary に関するよくある質問をまとめました
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-sky-800 mb-6 border-b border-sky-100 pb-3">
                {category.category}
              </h2>
              
              <div className="space-y-6">
                {category.items.map((faq, faqIndex) => (
                  <details key={faqIndex} className="group">
                    <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-sky-700 hover:text-sky-800 transition-colors py-3 border-b border-gray-100">
                      <span className="pr-4">{faq.question}</span>
                      <svg 
                        className="w-5 h-5 transition-transform group-open:rotate-180" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-4 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-sky-500 to-green-500 rounded-2xl p-8 mt-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">他にご質問がありますか？</h3>
          <p className="text-sky-100 mb-6 leading-relaxed">
            こちらのFAQで解決しない質問がございましたら、<br />
            お気軽にGitHubリポジトリまでお問い合わせください。
          </p>
          <a 
            href="https://github.com/cyrus07424/openAgricultureDiary/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-sky-700 px-8 py-3 rounded-full font-semibold hover:bg-sky-50 transition-colors inline-flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            <span>GitHubで質問する</span>
          </a>
        </div>
      </div>
    </div>
  );
}