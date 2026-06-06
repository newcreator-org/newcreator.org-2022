const Contact = () => {
  return (
    <section id="contact" className="py-20 w-full">
      <div className="container mx-auto px-5 max-w-3xl">
        {/* セクション見出し */}
        <h2 className="section-title mb-4">
          まずは、話しかけてください。
        </h2>
        <p className="body-text mb-8 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          「うちの学校でも使えますか？」「寄付したいのですが」「ボランティアに興味があります」——
          どんな入口でも構いません。気軽にご連絡ください。
        </p>

        {/* 連絡先 */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:contact@newcreator.org"
            className="btn-primary"
          >
            contact@newcreator.org にメールする
          </a>
          <a
            href="https://forms.gle/newcreator"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            お問い合わせフォームへ
          </a>
        </div>

        {/* 補足 */}
        <p className="label-text mt-6" style={{ color: 'var(--color-text-muted)' }}>
          通常2〜3営業日以内にご返信します。
        </p>
      </div>
    </section>
  );
};

export default Contact;
