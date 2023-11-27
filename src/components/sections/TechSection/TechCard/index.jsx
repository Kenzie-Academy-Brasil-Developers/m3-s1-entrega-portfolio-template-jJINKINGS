import style from "./style.module.css";

export const TechCard = ({name, img}) => {
    return (
        <li className={style.liCard}>
            <img src={img} alt="Logo" />
            <p className="title3">{name}</p>
        </li>
    )
};