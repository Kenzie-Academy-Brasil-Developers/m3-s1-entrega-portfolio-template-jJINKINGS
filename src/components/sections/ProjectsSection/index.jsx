import { projects } from "../../../data/projects";
import logo from "../../../assets/git-icon.png";
import style from "./style.module.css";

export const ProjectsSection = () => {
    return (
        <>
            <section className={style.sectionContainer}>
                <h2 className="title2">Projetos</h2>
                <ul className={style.ulContainer}>
                    {projects.map((element, i) => (
                        <li key={i} className={style.liCard}>
                            <h3 className="title3">{element.name}</h3>
                            <p className="text1">{element.description}</p>
                            <a href="#" className="text2">Saiba Mais</a>
                            <img src={logo} alt="Logo" className={style.imgCard} />
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
};