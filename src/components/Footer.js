import React from 'react';
import logo from "../images/Logo .svg";

const Footer = () => {
  return (
    <footer>
        <section>
            <div className='company-info'>
                <img src={logo} alt="logo image"/>
                <p>We are a family owned mediterraneran restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>

            <div>
                <h3>Important links</h3>

                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>Order Online</a></li>
                    <li><a href='/'>Login</a></li>  
                </ul>
            </div>

            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Address: <br/> 8 Ofiana Layout, Ifite Awka</li>
                    <li>Phone: <br/> +234-584-7846</li>
                    <li>Email: <br/> littlelemon@yahoo.com</li>
                </ul>
            </div>

            <div>
                <h3>Social media links</h3>
                <ul>
                    <li><a href='/'>Facebook</a></li>
                    <li><a href='/'>Twitter</a></li>
                    <li><a href='/'>Instagram</a></li>
                </ul>
            </div>
        </section>
    </footer>
  )
}

export default Footer