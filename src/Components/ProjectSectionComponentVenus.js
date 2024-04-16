import projectPhoto from '../Images/VenusProject.png';
import javaIcon from '../Images/java.png'; 
import html_css from '../Images/html_css.png'; 
import typescript from '../Images/typescript.png'; 
import spring from '../Images/Spring.png'; 
import { useContext } from "react";
import { LanguageContext } from "../Context/Language";


function ProjectComponentVenus(){

        const { language } = useContext(LanguageContext);
        const labels = {
          ES: {
            title: "Proyecto Venus",
            descriptionTitle: "Descripción",
            description: "Este proyecto ofrece a las usuarias la posibilidad de monitorear su ciclo femenino. Algunas de las funcionalidades de este proyecto web son: ",
            list1: "Calendarización de menstruación.",
            list2: "Gráficas del ciclo menstruación.",
            list3: "Integración con mensajería de texto, WhatsApp y correo.",
            technologyTitle: "Tecnologías utilizadas", 
            technologyDescription: "Las tecnologías utilizadas fueron principalmente: Java, HTML, CSS, TypeScript y Spring Boot.",
          },
          EN: {
            title: "Project Venus",
            descriptionTitle: "Description",
            description: "This project offers users the possibility of tracking their female cycle. Some of the functionalities of this web project are:",
            list1: "Period tracker.",
            list2: "Menstrual cycle charts.",
            list3: "Integration with text messaging, WhatsApp and email.",
            technologyTitle: "Technologies", 
            technologyDescription: "The technologies used were mainly: Java, HTML, CSS, TypeScript and Spring Boot.",
          },
        };
        return(
        <div className='bg-light-gray-brand p-5'>
            <h2 className='font-mono text-5xl leading-12 text-center' >{labels[language].title}</h2>
            <div className="flex flex-row justify-center px-10 pb-10">
                <div className='w-1/2 overflow-y-hidden pr-10 flex justify-center items-center'>
                    <img src={projectPhoto} alt="projectPhoto"/>
                </div>
                <div className=' w-1/2  pl-10'>
                    <div>
                        <h3 className='font-mono text-3xl leading-11'>{labels[language].descriptionTitle}</h3>
                        <p className='font-mono text-xl pb-5'>{labels[language].description}</p>
                        <ul className='font-mono text-xl pb-5 list-disc pl-10'>
                            <li>{labels[language].list1}</li>
                            <li>{labels[language].list2}</li>
                            <li>{labels[language].list3}</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h1 className='font-mono text-3xl leading-11'> {labels[language].technologyTitle}</h1>
                        <p className='font-mono text-xl pb-10'>{labels[language].technologyDescription}</p>
                        <div className="flex h-20 space-x-8	">
                        <img src={javaIcon}/>
                        <img src={html_css}/>
                        <img src={typescript}/>
                        <img src={spring}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default ProjectComponentVenus; 