import graPhoto from '../Images/gra2.jpg';
import ContactForm from './ContactForm';


function ContactSection(){
    return(
    <div id="contact" className="flex flex-row justify-center bg-light-blue-brand">
        <div className='w-1/2  flex  hidden xl:inline flex content-center'>
            <img className='bg-cover ' src={graPhoto} alt="graPhoto"/>
        </div>
        <div className='w-1/2 p-10'>
          <ContactForm/>
        </div>
    </div>
    )
}
export default ContactSection; 