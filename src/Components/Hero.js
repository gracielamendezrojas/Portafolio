import photo from '../Images/photoGraT.png';
import logo from '../Images/LogoTransparency.png';


function Hero(){
    return(
    <div className="flex flex-row justify-center ">
        <div className='w-1/2 h-dvh overflow-y-hidden'>
            <img className="" src={photo} alt="photo"/>
        </div>
        <div className='p-20 w-1/2 animate-in slide-in-from-left duration-1000 text-center '>
            <h2 className='font-mono text-5xl leading-12' >¡Hola! </h2>
            <h3 className='font-mono text-3xl leading-11'> Soy María Graciela Méndez Rojas</h3>
            <p className='font-mono text-xl pb-10'>Ingeniera de Software con experiencia en PL SQL y análisis de datos, liderando soluciones backend que agilicen procesos empresariales. </p>
            <div className='flex w-full justify-center'>
                <img src={logo} className='h-48 pb-20 text-center' alt="logo"/>
            </div>
            <h1 className='font-mono text-6xl '> Liderando con resultados contundentes</h1>
        </div>
    </div>
    )
}
export default Hero; 