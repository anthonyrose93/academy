import React from 'react';
import '../App.css';
import '../Components/Footer.css';
import FooterLogo from '../Images/logo.png';
import InstagramLogo from '../Images/ig-logo.png';
import FacebookLogo from '../Images/fb-logo.png';

const Footer = () => {
    return (
        <div className="footer-container" >
            <div className="contact-info-container">
                <p className="phone-number">(952) 377-8111</p>
                <p className="contact">7116 Shady Oak Rd</p>
                <p className="contact">Eden Prairie, MN 55344</p>
                <p className="contact">academyedenprairie@gmail.com</p>
            </div>
            
            <div className="logo-container">
                <img src={FacebookLogo}></img>
                <img src={InstagramLogo}></img>
            </div>
        </div>
    )
}

export default Footer;