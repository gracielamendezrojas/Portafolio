import projectPhoto from '../Images/SignatureGra.png';


function ProjectComponent(){
    return(
    <div className="flex flex-row justify-center ">
        <div className='w-1/2 h-dvh overflow-y-hidden'>
            <img src={projectPhoto} alt="projectPhoto"/>
        </div>
        <div className='p-20 w-1/2  '>
            <div>
                <h2 className='font-mono text-5xl leading-12' >Proyecto Venus</h2>
                <h3 className='font-mono text-3xl leading-11'>Descripción</h3>
                <p className='font-mono text-xl pb-10'>Este proyecto ofrece a las usuarias la posibilidad de monitorear su ciclo femenino. Algunas de las funcionalidades de este proyecto web son: </p>
                <ul className='font-mono text-xl pb-10'>
                    <li>Calendarización de menstruación. </li>
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