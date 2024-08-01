import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'; 
function Header() {
  return (
   <div className='navbar'>
    <div className='logo'>
     <FontAwesomeIcon icon={faGoogle} id='logo-icon'/>
     <h1>arun261104@gmail.com</h1>
    </div>
     <div className='navbar-items'>
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Project</a>
        <a href="#contact">Contact</a>
     </div>
   </div>
  );
}

export default Header;
