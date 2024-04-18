import WAlogo from '../Images/WAIcon.png';
function WAIconComponent(){
    return(
        <a href="https://wa.me/+50684451547?text=Hi! I need to contact you." target='_blank'>
            <img src={WAlogo} className=" hover:animate-pulse w-20 fixed left-100 right-8 bottom-8"/>
        </a>
    ); 
}
export default WAIconComponent; 