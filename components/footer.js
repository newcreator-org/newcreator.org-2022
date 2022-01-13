import component from "./footer.module.scss";

export default function Footer() {
    return (
        <>
        <footer className={component.footer}>
                    <div className={component.box}>
                        <p>
                            © 2019, 
                            <a
                                href="/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                newCreator.org
                            </a>
                        </p>
                    </div>
            </footer>
        </>
    );
}
