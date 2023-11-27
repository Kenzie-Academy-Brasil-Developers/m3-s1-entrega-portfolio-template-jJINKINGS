import style from "./style.module.css";
import logo from "../../../../assets/git-icon.png";

export const ProjectsCard = ({name, description}) => {
    return (
        <li className={style.liCard}>
            <h3 className="title3">{name}</h3>
            <p className="text1">{description}</p>
            <a href="#" className="text2">Saiba Mais</a>
            <img src={logo} alt="Logo" className={style.imgCard} />
        </li>
    )
};