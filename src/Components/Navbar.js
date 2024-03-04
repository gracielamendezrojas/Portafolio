import logo from '../Images/LogoTransparency.png';
function Navbar(){
    return(
    <nav className="flex flex-wrap  justify-between  font-mono bg-light-blue-brand text-2xl pt-3 pb-3 pl-3">
            
        <img className=" h-12 pr-15"src={logo} alt="logo"/>
            
        <ul className=" flex flex-1 container-sm justify-evenly pl-96 pt-2">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">About</a></li>
        </ul>
    </nav>
    )
}
export default Navbar; 