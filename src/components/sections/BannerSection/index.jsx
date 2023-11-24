import imgBanner from "../../../assets/banner-img.png";
import {username} from "../../../data/user";
import style from "./style.module.css";


export const BannerSection = () => {
    return (
        <>
            <section className={style.sectionContainer}>
                <div className={style.divContainer}>
                    <span className="text3">{username}</span>
                    <h1 className="title1">Bem vindo ao meu portfólio</h1>
                    <p className="paragraph">Uma frase interessante sobre mim</p>
                    <button className="btn">Saiba mais</button>
                </div>
                <img src= {imgBanner} alt="Banner" />
            </section>
        </>
    )
};