import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import '../App.css';
import './WhatsNew.css';
import WhatsNew1 from '../Images/WhatsNew(1).png';
import WhatsNew2 from '../Images/WhatsNew(2).png';
import WhatsNew3 from '../Images/WhatsNew(3).png';

const WhatsNew = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className="whats-new-page-wrapper">
            <div className="whats-new-item-1">
                <Row className="full-width-row">
                    <div className="whats-new-item-header">JJ's First Kickboxing Fight!</div>
                </Row>

                <Row className="whats-new-images-1">
                    <Col className="jj-fight-poster"><img src={WhatsNew1}></img></Col>

                    <Col>
                        <div className="whats-new-description">
                            On Saturday, September 21st, JJ Duran steps in the ring at Treasure Island Resort & Casino for his first ever kickboxing fight!
                        </div>
                        <a href="https://www.ticketmaster.com/event/06006108DF5C5DA9?_gl=1*1993req*_gcl_au*NjAzNDgxMDM1LjE3MjM4MzAxMzg.*_ga*NDY4MTkyMjY4LjE3MjM4MzAxMzg.*_ga_8E8BT2JZ6G*MTcyNTY1MDMzNC4yLjAuMTcyNTY1MDMzNC42MC4wLjA" className="tickets">
                            Get Your Tickets Here
                        </a>
                    </Col>

                    <Col className="jj-and-opponent"><img src={WhatsNew2}></img></Col>
                </Row>
            </div>

                <Row className="whats-new-item-2" >
                    <Row className="full-width-row">
                        <div className="whats-new-item-header">Meng Receives His Blue Belt</div>
                    </Row>

                    <Row className="meng-bluebelt">  
                        <Col className="whats-new-images-2">
                            <img src={WhatsNew3}></img>
                        </Col>

                        <Col>
                            <div className="whats-new-description">
                                Please join us in contratulating Meng on his extremely hard-earned blue belt! OSS!
                            </div>
                        </Col>
                    </Row> 
                </Row>
            
        </div>
    )
};

export default WhatsNew;