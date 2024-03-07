import Navbar from './Components/Navbar';
import Hero from './Components/Hero'; 
import WAIconComponent from './Components/WhatsAppIconComponent';
import ProjectComponent from './Components/ProjectSectionComponent';


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ProjectComponent/>
      <WAIconComponent/>
      <header>
        <h1 className='font-mono text-6xl'>Fuente para título h1</h1>
        <h2 className='font-mono text-5xl'>Fuente para título h2</h2>
        <h3 className='font-mono text-3xl'>Fuente para título h3</h3>

        <p className='font-mono text-base'>
        Fuente para párrafos
        </p>

      </header>
      <div className='flex back'>
        <div className='bg-violet-brand text-white p-8'>
          Color 60%: #942a70 
        </div>
        <div className='bg-light-blue-brand p-8'>
          Color 30%: #D7E1E5
        </div>
        <div className='bg-light-gray-brand p-8' > 
          Color 20%: #f2f2f2
        </div>
      </div>
    </>
  );
}

export default App;
