// ============================================================
// Contact Section — newCreator.org Design System v2
// CSS Modules / SCSS 廃止 → Tailwind + CSS Custom Properties
// ============================================================

const Contact = () => {
  return (
    <section id="contact" className="py-10 pb-20 w-full">
      <div
        className="relative overflow-hidden mx-auto"
        style={{
          width: "80%",
          maxWidth: "1240px",
          minHeight: "400px",
          borderRadius: "16px",
          background:
            "linear-gradient(135deg, rgba(20,118,166,0.80), rgba(39,137,185,0.65)), url(/img/cover2.jpg) center/cover no-repeat",
          padding: "80px",
        }}
      >
        {/* ブランドブルーのグロー */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(20,118,166,0.10) 0%, rgba(149,212,232,0.08) 100%)",
          }}
        />

        <div
          className="relative z-10 flex flex-col justify-center"
          style={{ minHeight: "240px" }}
        >
          <h2
            style={{
              fontSize: "45px",
              fontWeight: "bold",
              color: "#fff",
              textShadow: "0 2px 8px rgba(20,118,166,0.4)",
            }}
          >
            Contact
          </h2>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.92)",
              margin: "16px 0",
              lineHeight: 1.7,
            }}
          >
            学校・自治体・企業・メディアの方、寄付・ボランティアのご相談など、
            <br />
            どんな小さなことでもお気軽にご連絡ください。
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
                boxShadow: "0 4px 12px rgba(20,118,166,0.25)",
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
              <span>お問い合わせ</span>
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
