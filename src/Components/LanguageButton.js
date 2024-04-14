
function LanguageButton(){
    return(
        <form className="border-none hover:border-none">
            <select id="states" class="  cursor-pointer flex items-center justify-center rounded-full p-2 bg-violet-brand text-white hover:text-violet-brand hover:bg-white hover:font-extrabold hover:border-none">
                <option className=" hover:bg-red" selected value="EN">English</option>
                <option  className="" value="ES">Español</option>
            </select>
        </form>
        )
}
export default LanguageButton; 