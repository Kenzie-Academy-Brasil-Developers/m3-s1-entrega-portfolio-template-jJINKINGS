import imgHeader from "../../assets/portfolio.png";
import style from "./style.module.css";

export const Header = () => {
    return (
        <>
            <header className={style.headerContainer}>
                <img src={imgHeader} alt="logo" />
                <nav className={style.navContainer}>
                    <p className="text1">Sobre</p>
                    <p className="text1">Stack</p>
                    <p className="text1">Projetos</p>
                </nav>
                <button className="btn">Contato</button>
            </header>
        </>
    )
};