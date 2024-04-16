import photo from '../Images/photoGraT.png';
import logo from '../Images/LogoTransparency.png';
import { useContext } from "react";
import { LanguageContext } from "../Context/Language";


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
    <div className="flex flex-row justify-center ">
        <div className='w-1/2 h-dvh overflow-y-hidden'>
            <img  src={photo} alt="photo"/>
        </div>
        <div className='p-20 w-1/2 animate-in slide-in-from-left duration-1000 text-center '>
            <h2 className='font-mono text-5xl leading-12' >{labels[language].hi} </h2>
            <h3 className='font-mono text-3xl leading-11'>{labels[language].me} </h3>
            <p className='font-mono text-xl pb-10'> {labels[language].profile} </p>
            <div className='flex w-full justify-center'>
                <img src={logo} className='h-48 pb-20 text-center' alt="logo"/>
            </div>
        </div>
    </div>
    )
}
export default Hero; 