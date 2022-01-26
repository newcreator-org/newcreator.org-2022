import style from "./footer.module.scss";

export default function Footer() {
    return (
      <>
        <footer className={style.footer}>
          <div className={style.left}>
            <p>
              © 2019-{new Date().getFullYear()},
              <a href="/" rel="noopener noreferrer" target="_blank">
                newCreator.org
              </a>
            </p>
            <div className={style.right}>
              <p>
                <a href="https://legal.newcreator.org/privacy-policy/" target={"_blank"}>
                  プライバシーポリシー
                </a>
              </p>
              <p>
                <a href="https://legal.newcreator.org/tos/" target={"_blank"}>
                  各種サービス利用規約
                </a>
              </p>
            </div>
          </div>
        </footer>
      </>
    );
}
