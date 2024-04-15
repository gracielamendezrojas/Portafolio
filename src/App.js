import Navbar from './Components/Navbar';
import Hero from './Components/Hero'; 
import WAIconComponent from './Components/WhatsAppIconComponent';
import ProjectComponentVenus from './Components/ProjectSectionComponentVenus';
import ProjectComponentGame from './Components/ProjectSectionComponentGame';
import SocialMedia from './Components/SocialMedia';
import ContactForm from './Components/ContactForm';
import ProjectComponentCenfoMarket from './Components/ProjectSectionComponentCenfoMarket';
import ProjectsIntroduction from './Components/ProjectsIntroduction';


function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <ProjectsIntroduction/>
      <ProjectComponentVenus/>
      <ProjectComponentGame/>
      <ProjectComponentCenfoMarket/>
      <WAIconComponent/>
      <SocialMedia/>
      <ContactForm/>

    </>
  );
}

export default App;
