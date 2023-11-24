import {technologies} from "../../../data/technologies";
import style from "./style.module.css";

export const TechSection = () => {
    return (
        <>
            <section className={style.sectionContainer}>
                <h2 className="title2">Tecnologias</h2>
                <ul className={style.ulContainer}>
                    {technologies.map((element, i) => (
                        <li key={i} className={style.liCard}>
                            <img src={element.img} alt="Logo" />
                            <p className="title3">{element.name}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
};