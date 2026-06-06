const Contact = () => {
  return (
    <section id="contact" className="py-12 pb-20 w-full">
      <div
        className="relative overflow-hidden mx-auto"
        style={{
          width: "80%",
          maxWidth: "1240px",
          minHeight: "400px",
          borderRadius: "16px",
          background:
            "linear-gradient(rgba(20,118,166,0.75), rgba(20,118,166,0.75)), url(/img/cover2.jpg) center/cover no-repeat",
          padding: "80px",
        }}
      >
        {/* ブランドブルーのグロー */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "rgba(20,118,166,0.05)",
          }}
        />

        <div
          className="relative z-10 flex flex-col justify-center"
          style={{ minHeight: "240px" }}
        >
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#fff",
              lineHeight: 1.3,
              marginBottom: "16px",
            }}
          >
            まずは、話しかけてください。
          </h2>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.88)",
              margin: "0 0 24px",
              lineHeight: 1.9,
              maxWidth: "480px",
            }}
          >
            「うちの学校でも使えますか？」「寄付したいのですが」「ボランティアに興味があります」——
            <br />
            どんな入口でも構いません。気軽にご連絡ください。
          </p>
          <p>
            <a
              href="mailto:contact@newcreator.org"
              style={{
                display: "inline-block",
                minWidth: "92px",
                textDecoration: "none",
                textAlign: "center",
                fontWeight: "bold",
                borderRadius: "10px",
                fontSize: "15px",
                height: "50px",
                lineHeight: "48px",
                padding: "0 32px",
                background: "#fff",
                color: "#1476A6",
                border: "2px solid rgba(255,255,255,0.9)",
                transition: "all 0.2s cubic-bezier(0.4,0,0.2,1)",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#EDF6FB";
                el.style.transform = "translateY(-1px)";
                el.style.boxShadow = "0 6px 16px rgba(20,118,166,0.30)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#fff";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 4px 12px rgba(20,118,166,0.25)";
              }}
            >
              <span>メールで連絡する</span>
            </a>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div:first-child {
            width: 100% !important;
            border-radius: 0 !important;
            padding: 40px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
