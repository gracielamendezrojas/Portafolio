import projectPhoto from '../Images/VenusProject.png';
import javaIcon from '../Images/java.png'; 
import html_css from '../Images/html_css.png'; 
import typescript from '../Images/typescript.png'; 
import spring from '../Images/Spring.png'; 


function ProjectComponentVenus(){
    return(
    <div className="flex flex-row justify-center bg-light-gray-brand pl-20 pr-20 pb-20">
        <div className='w-1/2 overflow-y-hidden pr-10 flex justify-center items-center'>
            <img src={projectPhoto} alt="projectPhoto"/>
        </div>
        <div className=' w-1/2  pl-10'>
            <div>
                <h2 className='font-mono text-5xl leading-12' >Proyecto Venus</h2>
                <h3 className='font-mono text-3xl leading-11'>Descripción</h3>
                <p className='font-mono text-xl pb-10'>Este proyecto ofrece a las usuarias la posibilidad de monitorear su ciclo femenino. Algunas de las funcionalidades de este proyecto web son: </p>
                <ul className='font-mono text-xl pb-10 list-disc pl-10'>
                    <li>Calendarización de menstruación. </li>
                    <li>Gráficas del ciclo menstruación.</li>
                    <li>Integración con mensajería de texto, WhatsApp y correo. </li>
                </ul>
            </div>
            
            <div>
                <h1 className='font-mono text-3xl leading-11'>Tecnologías utilizadas</h1>
                <p className='font-mono text-xl pb-10'>Las tecnologías utilizadas fueron principalmente: Java, HTML, CSS, TypeScript y Spring Boot.</p>
                <div className="flex h-20 space-x-8	">
                    <img src={javaIcon}/>
                    <img src={html_css}/>
                    <img src={typescript}/>
                    <img src={spring}/>
                </div>
            </div>
        </div>
    </div>
    )
}
export default ProjectComponentVenus; 