import WAlogo from '../Images/WAIcon.png';
function WAIconComponent(){
    return(
        <button>
            <img src={WAlogo} className=" hover:animate-pulse w-20 fixed left-100 right-8 bottom-8"/>
        </button>
    ); 
}
export default WAIconComponent; 