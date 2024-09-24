import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import './HomeContent.css';
import '../App.css';
import WhatsNewModalPhoto from '../Images/MuayThai(3).png';
import GoalsModalPhoto from '../Images/MuayThai(10).png';
import OurTeachingModalPhoto from '../Images/Kids(2).png';

const HomeContent = () => {
    return(
        <div className="homepage-modal-section">

            <a href="about-us" className="homepage-modal">
                <div className="modal-title-container">
                    <img src={OurTeachingModalPhoto} alt="About Us"></img>
                    <div className="modal-title">About Us</div>
                </div>
            </a>

            <a href="whats-new" className="homepage-modal">
                <img src={WhatsNewModalPhoto}></img>
                <div className="modal-title">What's New</div>
            </a>

            <a href="student-goals" className="homepage-modal">
                <img src={GoalsModalPhoto}></img>
                <div className="modal-title">Student Goals</div>
            </a>
        </div>
    );
};

export default HomeContent;