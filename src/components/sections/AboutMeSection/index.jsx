import style from "./style.module.css";

export const AboutMeSection = () => {
    return (
        <>
            <section className={style.sectionContainer}>
                <div className={style.divTitle}>
                    <h2 className="title2">Sobre mim</h2>
                </div>
                <p className="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et totam placeat assumenda possimus eaque, non illo debitis alias unde neque, numquam hic quaerat. Non, sunt soluta quo ipsam magnam accusantium?</p>
            </section>
        </>
    )
};