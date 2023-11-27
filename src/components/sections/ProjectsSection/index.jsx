import { projects } from "../../../data/projects";
// import logo from "../../../assets/git-icon.png";
import style from "./style.module.css";
import { ProjectsCard } from "./ProjectsCard";

export const ProjectsSection = () => {
    return (
        <>
            <section className={style.sectionContainer}>
                <h2 className="title2">Projetos</h2>
                <ul className={style.ulContainer}>
                    {projects.map((element, i) => (
                        <ProjectsCard key={i} name={element.name} description={element.description}/>
                    ))}
                </ul>
            </section>
        </>
    )
};