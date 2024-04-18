import WAlogo from '../Images/WAIcon.png';
import { useContext } from "react";
import { LanguageContext } from "../Context/Language";
function WAIconComponent(){
    const { language } = useContext(LanguageContext);
    const labels = {
      ES: {
        msg: "https://wa.me/+50684451547?text=¡Hola! Quiero comunicarme contigo. Mi nombre es...",
      },
      EN: {
        msg: "https://wa.me/+50684451547?text=Hi! I want to reach out to you. My name is...",
      },
    };
    return(
        <a href={labels[language].msg} target='_blank'>
            <img src={WAlogo} className=" hover:animate-pulse w-20 fixed left-100 right-8 bottom-8"/>
        </a>
    ); 
}
export default WAIconComponent; 