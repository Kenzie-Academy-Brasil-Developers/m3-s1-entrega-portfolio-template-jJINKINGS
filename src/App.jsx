import { Header } from "./components/Header";
import { AboutMeSection } from "./components/sections/AboutMeSection";
import { BannerSection } from "./components/sections/BannerSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { TechSection } from "./components/sections/TechSection";
import { projects } from "./data/projects";
import { technologies } from "./data/technologies";
import { Footer } from "./components/Footer";
import "./styles/index.css";

function App() {

  return (
    <>
      <Header />
      <main>
        <BannerSection />
        <AboutMeSection />
        <TechSection technologies={technologies} />
        <ProjectsSection projects={projects} />
      </main>
      <Footer />
    </>
  )
};

export default App
