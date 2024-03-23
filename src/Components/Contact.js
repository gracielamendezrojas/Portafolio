import Github from '../Images/github.png';
import LinkedIn from '../Images/linkedIn.png';
import CV from '../Images/CV.png';


function Contact(){
    return(
        <div className='bg-light-gray-brand pt-10'>
            <h3 className='font-mono text-3xl text-center'>Visita mis páginas y descarga mi currículo</h3>

            <div className='flex flex-row justify-evenly p-10'>
                <a className='text-center grayscale text-violet-brand hover:grayscale-0'>
                    <img className="h-24"src={Github} alt="githubImage"/>
                    <p className='font-mono text-base '>Portafolio web</p>
                </a>
                <a className='text-center grayscale text-violet-brand hover:grayscale-0'>
                    <img className="h-24"src={LinkedIn} alt="LinkedInImage"/>
                    <p className='font-mono text-base'>Perfil personal</p>
                </a>
                <a className='text-center grayscale text-violet-brand hover:grayscale-0'>
                    <img className="h-24"src={CV} alt="LinkedInImage"/>
                    <p className='font-mono text-base'>Curriculum vitae</p>
                </a>
            </div>

        </div>
    )
}
export default Contact; 