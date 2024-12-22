import {FaLinkedin} from"react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
     <div className ="flex flex-shrink-0 items-center">
        </div> 
        <div>
            <FaLinkedin/>
        </div>
    </nav>
  )
}

export default Navbar;
