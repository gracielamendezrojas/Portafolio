import heart from "../Images/heartIcon.png";
import { useContext } from "react";
import { LanguageContext } from "../Context/Language";

function Footer(){
    const { language } = useContext(LanguageContext);
    const labels = {
      ES: {
        email: "Correo: ",
        description: "Diseñado y desarrollado con ", 
        description2:" por María Graciela Méndez Rojas",

      },
      EN: {
        email: "Email: ",
        description: "Design and develop with ",
        description2:" by María Graciela Méndez Rojas",

      },
    };
    return(
        <footer className="flex flex-col text-center bg-violet-brand font-mono text-white p-3 leading-9	text-lg">
            <p >{labels[language].email} <a className="underline" href="mailto:mmendezr@ucenfotec.ac.cr">gracielamendez@mgmr.co.cr</a></p>
            <p>{labels[language].description}<img className="inline" src={heart}/>{labels[language].description2} </p>
        </footer>
    ); 
}
export default Footer; 