
import React, { useEffect, useRef, useState } from 'react'
import animationCV from "../Lotties/FileLottie2.json";
import animationLinkedIn from "../Lotties/LinkedInSVGLottie2.json";
import animationGitHub from "../Lotties/GitHubLottie.json";
import Lottie from "lottie-react"; 


function Contact(){

    return(
        <div className='bg-light-gray-brand pt-10'>
            <h3 className='font-mono text-3xl text-center'>Visita mis páginas y descarga mi currículo</h3>

            <div className='flex flex-row justify-evenly p-10'>
                <a href='https://github.com/gracielamendezrojas' target='_blank' className='text-center grayscale text-violet-brand hover:grayscale-0'>
                <Lottie className="h-32" animationData={animationGitHub}  alt="GitHubVGLottie"/>
                    <p className='font-mono text-base '>Portafolio web</p>
                </a>
                <a href='https://www.linkedin.com/in/graciela-mendez/' target='_blank' className='text-center grayscale text-violet-brand hover:grayscale-0'>
                    <Lottie className="h-32" animationData={animationLinkedIn} alt="LinkedInSVGLottie"/>
                    <p className='font-mono text-base'>Perfil personal</p>
                </a>
                <a href='Graciela_Mendez_CV.pdf' download ='Graciela_Mendez_CV.pdf' className='text-center grayscale text-violet-brand hover:grayscale-0' >
                    <button>
                    <Lottie className="h-32" animationData={animationCV}  alt="CVLottie"/>
                    <p className='font-mono text-base'>Curriculum vitae</p>
                    </button>
                </a>
            </div>

        </div>
    )
}
export default Contact; 