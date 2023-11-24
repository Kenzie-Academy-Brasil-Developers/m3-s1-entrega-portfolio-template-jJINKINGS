import logo1 from "../../assets/whatsapp-icon.png";
import logo2 from "../../assets/linkedin-icon.png";
import logo3 from "../../assets/github-icon.png";
import {user} from "../../data/user";
import style from "./style.module.css";

export const Footer = () => {
    return (
        <>
            <footer className={style.footerContainer}>
                <div className={style.divContainer}>
                    <h2 className="title2">Contato</h2>
                    <div className={style.divLogo}>
                        <img src={logo1} alt="logoWhatsapp" />
                        <img src={logo2} alt="logoLinkedin" />
                        <img src={logo3} alt="logoGitHub" />
                    </div>
                </div>
                <p className="paragraph">Todos os direitos reservados - {user}</p>
            </footer>
        </>
    )
};