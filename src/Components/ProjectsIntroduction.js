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
    <div id="projects" className="text-center justify-center bg-light-blue-brand py-20 cursor-default">

        <h2 className=' font-mono xl:text-5xl text-3xl text-center font-black xl:font-normal ' >{labels[language].title}</h2>
        <p className='font-mono xl:text-2xl text-xl p-10'>{labels[language].description}</p>

    </div>
    )
}
export default ProjectsIntroduction; 