import logo from '../Images/LogoTransparency.png';
import LanguageButton from './LanguageButton'; 
function Navbar(){
    return(
    <nav className="flex flex-wrap  justify-between  font-mono bg-light-blue-brand text-2xl pt-3 pb-3 pl-3">
        <div className='flex pl-2 flex justify-center items-center'>
            <img className=" h-12 mr-4 " src={logo} alt="logo"/>
            <LanguageButton/>
        </div>
            
        <ul className=" flex flex-1 container-sm justify-evenly pl-96 pt-2">
            <li><a href="#aboutMe">Sobre mí</a></li>
            <li><a href="#projects">Proyectos</a></li>            
            <li><a href="">Redes sociales</a></li>
            <li><a href="">Contacto</a></li>
        </ul>
    </nav>
    )
}
export default Navbar; 