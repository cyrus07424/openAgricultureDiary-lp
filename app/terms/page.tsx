import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "利用規約 - OpenAgricultureDiary",
  description: "OpenAgricultureDiaryの利用規約について説明しています。"
};

export default function Terms() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-sky-900 mb-8 text-center">利用規約</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-sky-800 mb-4">第1条（適用）</h2>
              <p className="text-gray-700 leading-relaxed">
                本規約は、OpenAgricultureDiary（以下「本サービス」）の利用条件を定めるものです。
                本サービスを利用するすべてのユーザーは、本規約に同意したものとみなします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-sky-800 mb-4">第2条（利用登録）</h2>
              <p className="text-gray-700 leading-relaxed">
                本サービスの利用にあたり、ユーザーは正確、最新かつ完全な情報を提供する必要があります。
                虚偽の情報を提供した場合、利用を停止する場合があります。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-sky-800 mb-4">第3条（禁止事項）</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                ユーザーは、以下の行為を行ってはなりません：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>本サービスの運営を妨害するおそれのある行為</li>
                <li>他のユーザーまたは第三者の知的財産権を侵害する行為</li>
                <li>他のユーザーまたは第三者に不利益、損害、不快感を与える行為</li>
                <li>虚偽の情報を流布する行為</li>
                <li>営利目的での本サービスの利用</li>
                <li>その他、運営者が不適切と判断する行為</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-sky-800 mb-4">第4条（本サービスの提供の停止等）</h2>
              <p className="text-gray-700 leading-relaxed">
                運営者は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく
                本サービスの全部または一部の提供を停止または中断することができます。
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-4">
                <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>その他、運営者が本サービスの提供が困難と判断した場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-sky-800 mb-4">第5条（免責事項）</h2>
              <p className="text-gray-700 leading-relaxed">
                本サービスは、オープンソースソフトウェアとして「現状のまま」提供されます。
                運営者は、本サービスの品質、性能、特定目的への適合性について一切保証しません。
                また、本サービスの利用により生じた損害について、運営者は一切の責任を負いません。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-sky-800 mb-4">第6条（規約の変更）</h2>
              <p className="text-gray-700 leading-relaxed">
                運営者は、ユーザーに通知することなく、いつでも本規約を変更することができます。
                変更後の規約は、本ウェブサイトに掲載された時点で効力を生じるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-sky-800 mb-4">第7条（準拠法・裁判管轄）</h2>
              <p className="text-gray-700 leading-relaxed">
                本規約の解釈にあたっては、日本法を準拠法とします。
                本サービスに関して紛争が生じた場合には、運営者の本店所在地を管轄する裁判所を専属的合意管轄とします。
              </p>
            </section>

            <div className="bg-sky-50 p-6 rounded-lg mt-12">
              <p className="text-sm text-gray-600">
                最終更新日: 2025年1月1日<br />
                本規約についてご質問がある場合は、GitHubリポジトリまでお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}