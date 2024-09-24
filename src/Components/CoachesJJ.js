import React, { useState} from 'react';
import { Col, Row, Modal } from 'react-bootstrap';
import '../Components/Coaches.css';
import '../Components/Modals.css';
import CoachTim from '../Images/CoachTim(2).png';
import CoachHayden from '../Images/CoachHayden(2).png';
import CoachMorgan from '../Images/CoachMorgan(1).png';

const JiuJitsuCoaches = () => {
    const [show, setShow ] = useState({
        hayden: false,
        morgan: false,
        tim: false
    });

    const handleShow = (coach) => setShow({ ...show, [coach]: true});
    const handleClose = (coach) => setShow({ ...show, [coach]: false});

    return (
        <div className="coaches-page-wrapper">
            <Row className="coaches">
                <Col>
                    <img src={CoachHayden} onClick={() => handleShow('hayden')} style={{ cursor: 'pointer' }}></img>
                    <div className="coaches-name">Coach Hayden</div>
                </Col>

                <Col>
                    <img src={CoachMorgan} onClick={() => handleShow('morgan')} style={{ cursor: 'pointer' }}></img>
                    <div className="coaches-name">Coach Morgan</div>
                </Col>

                <Col>
                    <img src={CoachTim} onClick={() => handleShow('tim')} style={{ cursor: 'pointer' }}></img>
                    <div className="coaches-name">Coach Tim</div>
                </Col>
            </Row>

{/* MODAL FOR COACH HAYDEN  */}

            <Modal show={show.hayden} onHide={() => handleClose('hayden')} dialogClassName="custom-modal" centered >
                <Modal.Header className="custom-modal-header" closeButton>
                    <Modal.Title className="modal-title">Coach Hayden</Modal.Title>
                </Modal.Header>

                <Modal.Body className="modal-body">
                    <Col><img src={CoachHayden} className="modal-photo"></img></Col>
                    <Col><p className="modal-text">Coach Hayden</p></Col>
                </Modal.Body>
            </Modal>

{/* MODAL FOR COACH MORGAN */}

            <Modal show={show.morgan} onHide={() => handleClose('morgan')} dialogClassName="custom-modal" centered>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">Coach Morgan</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <Col><img src={CoachMorgan} className="modal-photo"></img></Col>
                    <Col><p className="modal-text">Coach Morgan</p></Col>
                </Modal.Body>
            </Modal>

{/* MODAL FOR COACH TIM */}

            <Modal show={show.tim} onHide={() => handleClose('tim')} dialogClassName="custom-modal" centered>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">Coach Tim</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <Col><img src={CoachTim} className="modal-photo"></img></Col>
                    <Col><p className="modal-text">Coach Tim</p></Col>
                </Modal.Body>
            </Modal>

        </div>
    )
};

export default JiuJitsuCoaches;