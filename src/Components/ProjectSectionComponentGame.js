import projectPhoto from '../Images/ReinoCenfotecos.png';
import sqlite from '../Images/sqlite.png'; 
import java from '../Images/java.png'; 
import libdgx from '../Images/libgdx.png'; 


function ProjectComponentGame(){
    return(
    <div className="flex flex-row justify-center p-20">        
        <div className=' w-1/2  pl-10'>
            <div>
                <h2 className='font-mono text-5xl leading-12' > Juego Reino Cenfotecos</h2>
                <h3 className='font-mono text-3xl leading-11'>Descripción</h3>
                <p className='font-mono text-xl pb-10'>Este juego fue creado para aplicar diversos patrones de la programación, dentro de los cuales se incluyen: </p>
                <ul className='font-mono text-xl pb-10 list-disc pl-10'>
                    <li>Creacionales: Factory method, singleton y prototype. </li>
                    <li>Estructurales: Proxy, composite y flyweight. </li>
                    <li>Comportamiento: Memento, observer y command. </li>
                </ul>
            </div>
            
            <div>
                <h1 className='font-mono text-3xl leading-11'>Tecnologías utilizadas</h1>
                <p className='font-mono text-xl pb-10'>Las tecnologías utilizadas fueron principalmente: Libdgx, Java y Sqlite.</p>
                <div className="flex h-20 space-x-8	">
                    <img src={libdgx}/>
                    <img src={java}/>
                    <img src={sqlite}/>
                </div>
            </div>
        </div>
        <div className='w-1/2 overflow-y-hidden pl-10'>
            <img src={projectPhoto} alt="projectPhoto"/>
        </div>

    </div>
    )
}
export default ProjectComponentGame; 