import graPhoto from '../Images/gra2.jpg';
import ContactForm from './ContactForm';


function ContactSection(){
    return(
    <div id="contact" className="flex flex-row justify-center bg-light-blue-brand">
        <div className='w-1/2 overflow-y-hidden flex justify-center items-center'>
            <img className='bg-cover' src={graPhoto} alt="graPhoto"/>
        </div>
        <div className='w-1/2 px-10'>
          <ContactForm/>
        </div>
    </div>
    )
}
export default ContactSection; 