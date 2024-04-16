import { useContext } from "react";
import { LanguageContext } from "../Context/Language";
function ProjectsIntroduction(){
    const { language } = useContext(LanguageContext);
    const labels = {
      ES: {
        title: "Proyectos",
        description: "En este portafolio quiero compartir algunos de los proyectos en los que he participado como desarrolladora y coordinadora. ",
      },
      EN: {
        title: "Projects",
        description: "In this portfolio I will share some of the projects in which I have participated as a developer and coordinator.",
      }
    };
    return(
    <div className="text-center justify-center bg-light-blue-brand py-20">

        <h2 className='font-mono text-5xl ' >{labels[language].title}</h2>
        <p className='font-mono text-2xl py-10'>{labels[language].description}</p>

    </div>
    )
}
export default ProjectsIntroduction; 