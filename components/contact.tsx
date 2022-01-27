import style from './contact.module.scss';

const Contact = () => {
  return (
    <section className={style.section}>
      <div className={style.card}>
        <div className={style.texts}>
          <h2 className="h2-footer-contact">Contact</h2>
          <p className="title-footer-contact">
            協業・取材・ご提案・その他の問い合わせはこちらから承ります。　
          </p>
          <p>
            <a
              href="mailto:contact@newcreator.org"
              className="btn btn-white btn-normal"
            >
              <span>問い合わせる</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;