import {technologies} from "../../../data/technologies";
import { TechCard } from "./TechCard";
import style from "./style.module.css";

export const TechSection = () => {
    return (
        <>
            <section className={style.sectionContainer}>
                <h2 className="title2">Tecnologias</h2>
                <ul className={style.ulContainer}>
                    {technologies.map((element) => (
                        <TechCard img={element.img} name={element.name}/>
                    ))}
                </ul>
            </section>
        </>
    )
};