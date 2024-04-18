import react from 'react'; 
import { useEffect, useState } from 'react';
import imageButton from '../Images/top.png'; 

function ScrollTopButton(){

    const [backToTopButton, setBackToTopButton] = useState(false); 

    useEffect(()=>{
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 200){
                setBackToTopButton(true);
            }else{
                setBackToTopButton(false);
            }
        })
    },[])

    const scrollUp = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return(
        <div>
        {backToTopButton && (
            <button onClick={scrollUp} className='hover:animate-pulse w-20 fixed left-100 right-32 bottom-8'>
                <img src={imageButton}/>
            </button>
        )}

        </div>)
    
    }; 
export default ScrollTopButton;