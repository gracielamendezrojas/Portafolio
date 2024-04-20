import photo from '../Images/photoGraT.png';
import logo from '../Images/LogoTransparency.png';
import { useContext } from "react";
import { LanguageContext } from "../Context/Language";
import SimpleSlider from './SlickCarousel';


function Hero(){
    const { language } = useContext(LanguageContext);
    const labels = {
        EN:{
            hi: "Hi!", 
            me: "I´m María Graciela Méndez Rojas", 
            profile: "Software Engineer with experience in PL SQL and data analysis,leading backend solutions that streamline business processes.", 
        }, 
        ES:{
            hi: "¡Hola!", 
            me: "Soy María Graciela Méndez Rojas.", 
            profile: "Ingeniera de Software con experiencia en PL SQL y análisis de datos, liderando soluciones backend que agilicen procesos empresariales.",
        }
    }; 
    return(
    <div id="aboutMe" className="flex flex-row justify-center cursor-default">
        <div className='w-1/2 h-dvh overflow-y-hidden'>
            <img src={photo} alt="photo"/>
        </div>
        <div className='p-10 w-1/2 text-center '>
            <h2 className='font-mono text-5xl leading-12' >{labels[language].hi} </h2>
            <h3 className='font-mono text-3xl leading-11'>{labels[language].me} </h3>
            <p className='font-mono text-xl pb-10'> {labels[language].profile} </p>
            <div className='flex w-full justify-center pb-20'>
                <img src={logo} className='h-56  text-center' alt="logo"/>
            </div>
            <div className='pt-20 pb-10'>
                <SimpleSlider/>
            </div>
        </div>
    </div>
    )
}
export default Hero; 