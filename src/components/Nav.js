import React, {useState} from 'react';
import logo from "../images/Logo .svg";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

  return (
    <nav className={`navbar ${menuOpen? "open" : ""}`}>
        <a href='/' className='logo'>
            <img src={logo} alt="logo image"/>
        </a>

        <div className='menu-icon' onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>

        <ul className={`nav-links ${menuOpen? "visible": ""}`}>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Services</a></li>
            <li><a>Menu</a></li>
            <li><a>Reservatiions</a></li>
            <li><a>Order Online</a></li>
            <li><a>Login</a></li>
        </ul>
    </nav>
  ) 
}

export default Nav