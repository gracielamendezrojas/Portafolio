import graPhoto from '../Images/gra2.jpg';
import javaIcon from '../Images/java.png'; 
import html_css from '../Images/html_css.png'; 
import typescript from '../Images/typescript.png'; 
import spring from '../Images/Spring.png'; 
import ContactForm from './ContactForm';


function ContactSection(){
    return(
    <div className="flex flex-row justify-center bg-light-blue-brand pr-20 ">
        <div className='w-1/2 overflow-y-hidden pr-10 flex justify-center items-center'>
            <img clas src={graPhoto} alt="graPhoto"/>
        </div>
        <div className=' w-1/2  pl-10'>
          <ContactForm/>
        </div>
    </div>
    )
}
export default ContactSection; 