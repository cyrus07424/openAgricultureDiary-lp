import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "プライバシーポリシー - OpenAgricultureDiary",
  description: "OpenAgricultureDiaryのプライバシーポリシーについて説明しています。"
};

export default function Privacy() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-sky-900 mb-8 text-center">プライバシーポリシー</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-sky-800 mb-4">基本方針</h2>
              <p className="text-gray-700 leading-relaxed">
                OpenAgricultureDiary（以下「本サービス」）は、ユーザーのプライバシーを尊重し、
                個人情報の保護に努めます。本プライバシーポリシーは、本サービスがどのように
                個人情報を収集、使用、保護するかを説明します。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-sky-800 mb-4">収集する情報</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                本サービスでは、以下の情報を収集する場合があります：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>ユーザー登録時に提供される情報（ユーザー名、メールアドレスなど）</li>
                <li>サービス利用時に入力される農業関連データ（作物情報、圃場情報、収穫データなど）</li>
                <li>サービス利用状況に関する情報（アクセスログ、使用機能など）</li>
                <li>お問い合わせ時に提供される情報</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-sky-800 mb-4">情報の利用目的</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                収集した個人情報は、以下の目的で利用します：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>本サービスの提供・運営</li>
                <li>ユーザーサポートの提供</li>
                <li>サービス改善のための分析</li>
                <li>重要な通知の送信</li>
                <li>法的義務の履行</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-sky-800 mb-4">情報の共有</h2>
              <p className="text-gray-700 leading-relaxed">
                本サービスは、以下の場合を除き、ユーザーの個人情報を第三者と共有することはありません：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-4">
                <li>ユーザーの明示的な同意がある場合</li>
                <li>法的要求に基づく場合</li>
                <li>サービス提供に必要な技術的パートナーとの間での限定的な共有</li>
                <li>ユーザーや公衆の安全を保護するために必要な場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-sky-800 mb-4">データの保存期間</h2>
              <p className="text-gray-700 leading-relaxed">
                個人情報は、利用目的を達成するために必要な期間、または法的要求に基づく期間保存されます。
                アカウント削除時には、合理的な期間内に関連する個人情報を削除します。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-sky-800 mb-4">セキュリティ</h2>
              <p className="text-gray-700 leading-relaxed">
                本サービスは、個人情報を保護するために適切な技術的および組織的セキュリティ対策を講じています。
                ただし、インターネット上での情報送信は完全に安全ではないため、絶対的なセキュリティは保証できません。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-sky-800 mb-4">ユーザーの権利</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                ユーザーは、自身の個人情報について以下の権利を有します：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>個人情報へのアクセス権</li>
                <li>個人情報の訂正・更新権</li>
                <li>個人情報の削除権</li>
                <li>処理の制限権</li>
                <li>データポータビリティ権</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                これらの権利を行使したい場合は、GitHubリポジトリを通じてお問い合わせください。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-sky-800 mb-4">オープンソースについて</h2>
              <p className="text-gray-700 leading-relaxed">
                本サービスはオープンソースソフトウェアです。ソースコードは公開されていますが、
                実際のユーザーデータや個人情報が公開されることはありません。
                自己ホスティングを選択した場合、データの管理責任はホスティング主体にあります。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-sky-800 mb-4">Cookie の使用</h2>
              <p className="text-gray-700 leading-relaxed">
                本サービスは、ユーザー体験の向上とサービスの機能提供のために Cookie を使用する場合があります。
                ブラウザの設定により Cookie を無効にすることができますが、一部機能が制限される可能性があります。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-sky-800 mb-4">ポリシーの変更</h2>
              <p className="text-gray-700 leading-relaxed">
                本プライバシーポリシーは、法的要求やサービスの変更に応じて更新される場合があります。
                重要な変更がある場合は、適切な方法でユーザーに通知します。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-sky-800 mb-4">お問い合わせ</h2>
              <p className="text-gray-700 leading-relaxed">
                プライバシーに関するご質問やご懸念がある場合は、
                <a href="https://github.com/cyrus07424/openAgricultureDiary" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800">
                  GitHubリポジトリ
                </a>
                を通じてお問い合わせください。
              </p>
            </section>

            <div className="bg-sky-50 p-6 rounded-lg mt-12">
              <p className="text-sm text-gray-600">
                最終更新日: 2025年1月1日<br />
                本プライバシーポリシーについてご質問がある場合は、GitHubリポジトリまでお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}