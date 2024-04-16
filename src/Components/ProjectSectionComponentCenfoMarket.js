import projectPhoto from '../Images/CenfoMarketPlace.png';
import CSharp from '../Images/CSharp.png'; 
import html_css from '../Images/html_css.png'; 
import NET from '../Images/visualStudio.png'; 
import JavaScript from '../Images/JavaScript.png'; 
import { useContext } from "react";
import { LanguageContext } from "../Context/Language";

function ProjectComponentCenfoMarket(){
    const { language } = useContext(LanguageContext);
    const labels = {
      ES: {
        title: "Proyecto Cenfo-Marketplace",
        descriptionTitle: "Descripción",
        description: "Este proyecto ofrece a los usuarios la posibilidad de subastar y comprar NFTs. Algunas de las funcionalidades de este proyecto web son: ",
        list1: "Abrir y programar subastas por un tiempo delimitado.",
        list2: "Comprar NFTs con la billetera de la aplicación.",
        list3: "Guardar NFTs y compartir galerías.",
        technologyTitle: "Tecnologías utilizadas", 
        technologyDescription: "Las tecnologías utilizadas fueron principalmente: .NET, C#, JavaScript, HTML y CSS.",
      },
      EN: {
        title: "Project Cenfo-Marketplace",
        descriptionTitle: "Description",
        description: "This project offers users the ability to auction and buy NFTs. Some of the functionalities of this web project are:",
        list1: "Open and schedule auctions for a limited time.",
        list2: "Buy NFTs with the app wallet.",
        list3: "Save NFTs and share galleries.",
        technologyTitle: "Technologies", 
        technologyDescription: "The technologies used were mainly: .NET, C#, JavaScript, HTML and CSS.",
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
                        <img src={NET}/>
                        <img src={CSharp}/>
                        <img src={JavaScript}/>
                        <img src={html_css}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default ProjectComponentCenfoMarket; 