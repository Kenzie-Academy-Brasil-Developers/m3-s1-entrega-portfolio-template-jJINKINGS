import { DefaultTemplate } from "../../components/DefaultTemplate";
import { AboutMeSection } from "../../components/sections/AboutMeSection";
import { BannerSection } from "../../components/sections/BannerSection";
import { ProjectsSection } from "../../components/sections/ProjectsSection";
import { TechSection } from "../../components/sections/TechSection";

export const HomePage = () => {
    return (
        <DefaultTemplate>
            <BannerSection />
            <AboutMeSection />
            <TechSection />
            <ProjectsSection />
        </DefaultTemplate>
    )
};