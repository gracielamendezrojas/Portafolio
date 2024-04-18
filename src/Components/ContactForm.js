import { useContext } from "react";
import { LanguageContext } from "../Context/Language";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm(){
  const { language } = useContext(LanguageContext);
  const labels = {
    ES: {
      title: "Hablemos...",
      user: "Nombre y apellidos",
      email: "Correo electrónico",
      number: "Número telefónico/celular",
      placeholderNumber: "Escribe tu número si quieres que te contacte por teléfono", 
      placeholderUser: "Escribe tu nombre y apellidos", 
      placeholderEmail: "Escribe tu correo electrónico", 
      comment: "¿En qué puedo ayudarte?",
      button: "Enviar"
    },
    EN: {
      title: "Let´s talk...",
      user: "Name and lastname",
      number: "Telephone/cell number",
      placeholderNumber: "Type your number if you want me to contact you by phone", 
      placeholderUser: "Type your name and lastname", 
      placeholderEmail: "Type your email", 
      email: "Email",
      comment: "How can I help you?",
      button: "Send"
    },
  };


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_ehzsxik', 'template_d08tcng', form.current, 'rM4Wg8m0Ji-6q_5Qr')
      .then((result) => {
          console.log(result.text);
          console.log("message sent"); 
          
      }, (error) => {
          console.log(error.text);
      });
  };

    return(
    <form className="font-mono " onSubmit={sendEmail} ref={form}>
      <h2 class="font-mono text-3xl leading-12 text-center">{labels[language].title}</h2>

        <div class="sm:col-span-4 pb-5">
          <label for="username" class="font-mono text-xl">{labels[language].user}</label>
          <div class="mt-2">
            <div class="flex rounded-md focus-within:ring-violet-brand sm:max-w-md">
              <input type="text" name="username" id="username" autocomplete="email" class="block flex-1 border-0  py-1.5 pl-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-brand sm:text-sm sm:leading-6" placeholder={labels[language].placeholderUser} required/>
            </div>
          </div>
        </div>

        <div class="sm:col-span-4 pb-5">
          <label for="email" class="font-mono text-xl">{labels[language].email}</label>
          <div class="mt-2">
            <div class="flex rounded-md focus-within:ring-violet-brand sm:max-w-md">
              <input type="email" name="email" id="email" autocomplete="email" class="block flex-1 border-0  py-1.5 pl-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-brand sm:text-sm sm:leading-6" placeholder={labels[language].placeholderEmail} required/>
            </div>
          </div>
        </div>

        <div class="sm:col-span-4 pb-5">
          <label for="number" class="font-mono text-xl">{labels[language].number}</label>
          <div class="mt-2">
            <div class="flex rounded-md focus-within:ring-violet-brand sm:max-w-md">
              <input type="text" name="number" id="number" autocomplete="email" class="block flex-1 border-0  py-1.5 pl-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-brand sm:text-sm sm:leading-6" placeholder={labels[language].placeholderNumber} />
            </div>
          </div>
        </div>

        <div class="col-span-full pb-5">
          <label for="message" class="font-mono text-xl">{labels[language].comment}</label>
          <div class="mt-2">
            <textarea id="message" name="message" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-brand sm:text-sm sm:leading-6" required></textarea>
          </div>
        </div>
          <button  type="submit" class=" cursor-pointer flex items-center justify-center rounded-full py-2 px-5 bg-violet-brand text-white hover:text-violet-brand hover:bg-white hover:font-extrabold hover:border-solid hover:border-2 hover:border-violet-brand">{labels[language].button}</button>   
</form>
    )
}
export default ContactForm; 