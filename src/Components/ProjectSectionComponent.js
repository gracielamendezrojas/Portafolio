import projectPhoto from '../Images/VenusProject.png';


function ProjectComponent(){
    return(
    <div className="flex flex-row justify-center bg-light-gray-brand p-20">
        <div className='w-1/2 overflow-y-hidden pr-10'>
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
                <p className='font-mono text-xl pb-10'>Fotos?</p>
            </div>
        </div>
    </div>
    )
}
export default ProjectComponent; 