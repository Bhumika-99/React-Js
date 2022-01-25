import React, {useState} from "react";
import "./navbar.css"
import {FaFacebookSquare, FaYoutubeSquare, FaInstagramSquare} from "react-icons/fa"
import {GiHamburgerMenu} from "react-icons/gi";
const Navbar = () => {
    const[showMediaIcons, setShowMediaIcons] = useState(false);
    return(
        <div>
            <nav className="main-nav">
                <div className="logo">
                    <h2>Bhumika Narale</h2>
                </div>

                <div className="menu-link">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a href ="https://www.youtube.com/" target = "_blank">
                            <FaYoutubeSquare className="youtube"/>
                            </a>
                            
                        </li>

                        <li>
                            <a href ="https://www.facebook.com/" target = "_blank">
                            <FaFacebookSquare className="facebook" />
                            </a>
                            
                        </li>

                        <li>
                            <a href ="https://www.instagram.com/" target = "_blank">
                            <FaInstagramSquare className="instagram"/>
                            </a>
                            
                        </li>
                
                    </ul>
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>

                    </div>


                </div>
            </nav>
 

            <section className="hero-section">
                <p>Welcome To Website</p>
                <h2>Lorem Ipsum</h2>
            </section>
        
        
        
        </div>
        
            
        
    );

    
};
export default Navbar;