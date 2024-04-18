
import React, { useEffect, useRef, useState } from 'react'
import animationCV from "../Lotties/FileLottie2.json";
import animationLinkedIn from "../Lotties/LinkedInSVGLottie2.json";
import animationGitHub from "../Lotties/GitHubLottie.json";
import Lottie from "lottie-react"; 
import { useContext } from "react";
import { LanguageContext } from "../Context/Language";

function Contact(){

    const { language } = useContext(LanguageContext);
    const labels = {
      ES: {
        title: "Visita mis páginas y descarga mi currículo",
        description: "¡Haz click en las imágenes!",
        linkedIn: "Perfil personal de LinkedIn",
        repository: "Repositorio GitHub", 
        resume: "Curriculum vitae", 
        download: "Graciela_Mendez_CV.pdf",
      },
      EN: {
        title: "Visit my pages and download my resume",
        description: "Click the images!",
        linkedIn: "Personal LinkedIn Profile",
        repository: "GitHub Repository", 
        resume: "Resume", 
        download: "Graciela_Mendez_Resume.pdf", 
      },
    };

    return(
        <div id="socialNetworks" className=' py-10'>
            <h3 className='font-mono text-5xl text-center '>{labels[language].title}</h3>
            <p className='font-mono  font-black	text-xl text-center pt-5 '>{labels[language].description}</p>


            <div className='flex flex-row justify-evenly p-10'>
                <a href='https://github.com/gracielamendezrojas' target='_blank' className='text-center grayscale text-violet-brand hover:grayscale-0'>
                <Lottie className="h-32" animationData={animationGitHub}  alt="GitHubVGLottie"/>
                    <p className='font-mono  font-black	text-xl'>{labels[language].repository}</p>
                </a>
                <a href='https://www.linkedin.com/in/graciela-mendez/' target='_blank' className='text-center grayscale text-violet-brand hover:grayscale-0'>
                    <Lottie className="h-32" animationData={animationLinkedIn} alt="LinkedInSVGLottie"/>
                    <p className='font-mono  font-black	text-xl'>{labels[language].linkedIn}</p>
                </a>
                <a href='Graciela_Mendez_CV.pdf' download ={labels[language].download} className='text-center grayscale text-violet-brand hover:grayscale-0' >
                    <button>
                    <Lottie className="h-32" animationData={animationCV}  alt="CVLottie"/>
                    <p className='font-mono font-black	text-xl'>{labels[language].resume}</p>
                    </button>
                </a>
            </div>

        </div>
    )
}
export default Contact; 