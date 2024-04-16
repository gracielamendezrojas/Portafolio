import Navbar from './Components/Navbar';
import Hero from './Components/Hero'; 
import WAIconComponent from './Components/WhatsAppIconComponent';
import ProjectComponentVenus from './Components/ProjectSectionComponentVenus';
import ProjectComponentGame from './Components/ProjectSectionComponentGame';
import SocialMedia from './Components/SocialMedia';
import ContactForm from './Components/ContactForm';
import ProjectComponentCenfoMarket from './Components/ProjectSectionComponentCenfoMarket';
import ProjectsIntroduction from './Components/ProjectsIntroduction';
import ContactSection from './Components/ContactSection';
import { useState } from "react";
import { LanguageContext } from "./Context/Language";

function App() {
  const [language, setLanguage] = useState("EN");

  return (
    <>
    <LanguageContext.Provider value={{ language, setLanguage }}>

      <Navbar/>
      <Hero/>
      <ProjectsIntroduction/>
      <ProjectComponentVenus/>
      <ProjectComponentGame/>
      <ProjectComponentCenfoMarket/>
      <WAIconComponent/>
      <SocialMedia/>
      <ContactSection/>
      </LanguageContext.Provider>

    </>
  );
}

export default App;
