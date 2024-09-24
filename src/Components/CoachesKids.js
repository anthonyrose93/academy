import React, { useState } from 'react';
import { Row, Col, Modal } from 'react-bootstrap';
import '../Components/Coaches.css';
import CoachAnthony from '../Images/CoachAnthony(3).png';
import CoachDavid from '../Images/CoachDavid(2).png';
import CoachTy from '../Images/CoachTy(2).png';

const KidsCoaches = () => {
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
                    <img src={CoachTy} onClick={() => handleShow('ty')} style={{ cursor: 'pointer' }}></img>
                    <div className="coaches-name">Coach Ty</div>
                </Col>

                <Col>
                    <img src={CoachDavid} onClick={() => handleShow('david')} style={{ cursor: 'pointer' }}></img>
                    <div className="coaches-name">Coach David</div>
                </Col>
            </Row>

            {/* MODAL FOR COACH ANTHONY  */}

            <Modal show={show.anthony} onHide={() => handleClose('anthony')} dialogClassName="custom-modal" centered >
                <Modal.Header className="custom-modal-header" closeButton>
                    <Modal.Title className="modal-title">Coach Anthony</Modal.Title>
                </Modal.Header>

                <Modal.Body className="modal-body">
                    <Col><img src={CoachAnthony} className="modal-photo"></img></Col>
                    <Col><p className="modal-text">Coach Anthony</p></Col>
                </Modal.Body>
            </Modal>

            {/* MODAL FOR COACH TY  */}

            <Modal show={show.ty} onHide={() => handleClose('ty')} dialogClassName="custom-modal" centered >
                <Modal.Header className="custom-modal-header" closeButton>
                    <Modal.Title className="modal-title">Coach Ty</Modal.Title>
                </Modal.Header>

                <Modal.Body className="modal-body">
                    <Col><img src={CoachTy} className="modal-photo"></img></Col>
                    <Col><p className="modal-text">Coach Ty</p></Col>
                </Modal.Body>
            </Modal>

            {/* MODAL FOR COACH DAVID  */}

            <Modal show={show.david} onHide={() => handleClose('david')} dialogClassName="custom-modal" centered >
                <Modal.Header className="custom-modal-header" closeButton>
                    <Modal.Title className="modal-title">Coach David</Modal.Title>
                </Modal.Header>

                <Modal.Body className="modal-body">
                    <Col><img src={CoachDavid} className="modal-photo"></img></Col>
                    <Col><p className="modal-text">Coach David</p></Col>
                </Modal.Body>
            </Modal>
        </div>
    )
};

export default KidsCoaches;