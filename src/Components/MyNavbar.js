import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Components/Navbar.css';
import '../App.css';
import Logo from '../Images/logo.png';

const MyNavbar = () => {
    const { pathname } = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-black">
            <div className="navbar-first-column">
                <div className="brand-logo-container">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="brand logo" className="brand-logo"></img>
                    </Link>
                </div>
            </div>

            <div className="navbar-second-column">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/jiu-jitsu" className="nav-link">Jiu Jitsu</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/muay-thai" className="nav-link">Muay Thai</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/kids" className="nav-link">Kids</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="#footer" className="nav-link" onClick={(e) => {
                            e.preventDefault(); // Prevent default link behavior
                            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                        }}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default MyNavbar;