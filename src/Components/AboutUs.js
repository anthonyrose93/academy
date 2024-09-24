import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import './AboutUs.css';
import AboutUs1 from '../Images/AboutUs(1).png';
import AboutUs2 from '../Images/JiuJitsu(5).png';

const AboutUs = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className="about-us-page-wrapper">
            <Row className="about-us-item">
                    <Row className="full-width-row">
                        <div className="about-us-item-header">Our Teaching Philosophy</div>
                    </Row>

                    <Row>
                        <Col>
                            <div className="about-us-images">
                                <img src={AboutUs1}></img>
                            </div>
                        </Col>

                        <Col className="our-teaching-philosophy">
                            <div className="about-us-description">
                                The ecological approach in martial arts focuses on learning through live situations and adaptive problem-solving, rather than isolated techniques or drilling. Instead of practicing moves repetitively, students engage in realistic scenarios, where they develop skills by responding to dynamic challenges. This method emphasizes natural learning, creativity, and functional decision-making, aligning with how people acquire skills in real-world contexts. It contrasts with traditional methods that prioritize step-by-step instruction and rote memorization of techniques.
                            </div>
                        </Col>
                    </Row>
            </Row>

            <Row className="about-us-item">
                    <Row className="full-width-row">
                        <div className="about-us-item-header">Our Coaches</div>
                    </Row>

                    <Row>
                        <Col>
                            <div className="about-us-images">
                                <img src={AboutUs2}></img>
                            </div>
                        </Col>

                        <Col className="our-coaches">
                            <a href="/jiujitsu-coaches" className="our-coaches-list">Meet Our Jiu Jitsu Coaches</a>
                            <a href="/muaythai-coaches" className="our-coaches-list">Meet Our Muay Thai Coaches</a>
                            <a href="/kids-coaches" className="our-coaches-list">Meet Our Kids Coaches</a>
                        </Col>
                    </Row>
            </Row>
        </div>
    )
};

export default AboutUs;