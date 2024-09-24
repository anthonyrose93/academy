import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../Components/Coaches.css';
import CoachErik from '../Images/CoachErik(1).png';
import CoachDavid from '../Images/CoachDavid(2).png';
import CoachAnthony from '../Images/CoachAnthony(1).png';

const MuayThaiCoaches = () => {
        const [show, setShow ] = useState({
            anthony: false,
            ty: false,
            david: false
        });
    
        const handleShow = (coach) => setShow({ ...show, [coach]: true});
        const handleClose = (coach) => setShow({ ...show, [coach]: false});
    
        return (
            <div className="coaches-page-wrapper">
                <Row className="coaches">
                    <Col>
                        <img src={CoachAnthony} onClick={() => handleShow('anthony')} style={{ cursor: 'pointer' }}></img>
                        <div className="coaches-name">Coach Anthony</div>
                    </Col>
    
                    <Col>
                        <img src={CoachErik} onClick={() => handleShow('erik')} style={{ cursor: 'pointer' }}></img>
                        <div className="coaches-name">Coach Erik</div>
                    </Col>
    
                    <Col>
                        <img src={CoachDavid} onClick={() => handleShow('david')} style={{ cursor: 'pointer' }}></img>
                        <div className="coaches-name">Coach David</div>
                    </Col>
                </Row>
            </div>
        )
    };
    
    export default MuayThaiCoaches;