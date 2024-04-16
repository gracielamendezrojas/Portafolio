import { useContext } from "react";
import { LanguageContext } from "../Context/Language";
function ContactForm(){
  const { language } = useContext(LanguageContext);
  const labels = {
    ES: {
      title: "Hablemos...",
      user: "Nombre y apellidos",
      email: "Correo electrónico",
      placeholderUser: "Escribe tu nombre y apellidos", 
      placeholderEmail: "Escribe tu correo electrónico", 
      comment: "¿En qué puedo ayudarte?",
      button: "Enviar"
    },
    EN: {
      title: "Let´s talk...",
      user: "Name and lastname",
      placeholderUser: "Type your name and lastname", 
      placeholderEmail: "Type your email", 
      email: "Email",
      comment: "How can I help you?",
      button: "Send"
    },
  };

    return(
    <form className="font-mono ">
      <h2 class="font-mono text-3xl leading-12 text-center">{labels[language].title}</h2>

        <div class="sm:col-span-4 pb-5">
          <label for="username" class="font-mono text-xl">{labels[language].user}</label>
          <div class="mt-2">
            <div class="flex rounded-md focus-within:ring-violet-brand sm:max-w-md">
              <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0  py-1.5 pl-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-brand sm:text-sm sm:leading-6" placeholder={labels[language].placeholderUser}/>
            </div>
          </div>
        </div>

        <div class="sm:col-span-4 pb-5">
          <label for="username" class="font-mono text-xl">{labels[language].email}</label>
          <div class="mt-2">
            <div class="flex rounded-md focus-within:ring-violet-brand sm:max-w-md">
              <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0  py-1.5 pl-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-brand sm:text-sm sm:leading-6" placeholder={labels[language].placeholderEmail}/>
            </div>
          </div>
        </div>

        <div class="col-span-full pb-5">
          <label for="about" class="font-mono text-xl">{labels[language].comment}</label>
          <div class="mt-2">
            <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-brand sm:text-sm sm:leading-6"></textarea>
          </div>
        </div>
          <button type="button" class=" cursor-pointer flex items-center justify-center rounded-full p-2 bg-violet-brand text-white hover:text-violet-brand hover:bg-white hover:font-extrabold hover:border-solid hover:border-2 hover:border-violet-brand">{labels[language].button}</button>   
</form>
    )
}
export default ContactForm; 