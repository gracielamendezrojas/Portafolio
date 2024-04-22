import graPhoto from '../Images/gra2.jpg';
import ContactForm from './ContactForm';


function ContactSection(){
    return(
    <div id="contact" className=" flex-row justify-center bg-light-blue-brand xl:flex">
        <div className='xl:w-1/2 xl:flex hidden content-center '>
            <img className='object-cover' src={graPhoto} alt="graPhoto"/>
        </div>
        <div className='xl:w-1/2 p-20'>
          <ContactForm/>
        </div>
    </div>
    )
}
export default ContactSection; 