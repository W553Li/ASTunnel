import React, { useState } from 'react';
import { Button, Col, Container, Image, Modal, Row } from 'react-bootstrap';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { useTunnels } from "../contexts/tunnelContext";

export default function GalleryModal({ show, handleClose }) {
    const [showNumbers, setShowNumbers] = useState(false);
    const { letters, numbers } = useTunnels();

    const toggleGallery = () => {
        setShowNumbers(!showNumbers);
    };

    const currentArray = showNumbers ? numbers : letters;

    return (
        <Modal show={show} onHide={handleClose} size="xl" fullscreen>
            <Modal.Header closeButton>
                <Modal.Title>
                    {showNumbers ? 'Number Signs Gallery' : 'Letter Signs Gallery'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="position-relative">
                {showNumbers ? <Button 
                    variant="link" 
                    onClick={toggleGallery}
                    className="position-absolute"
                    style={{
                        left: '20px',
                        top: '50%',
                        // transform: 'translateY(-50%)',
                        fontSize: '2rem',
                        // zIndex: 1
                    }}
                >
                    <BsArrowLeftCircle/>
                </Button> : <Button 
                    variant="link" 
                    onClick={toggleGallery}
                    className="position-absolute"
                    style={{
                        right: '20px',
                        top: '50%',
                        // transform: 'translateY(-50%)',
                        fontSize: '2rem',
                        // zIndex: 1
                    }}
                >
                    <BsArrowRightCircle />
                </Button>}
                <Container>
                    {[...Array(Math.ceil(currentArray.length / 6))].map((_, rowIndex) => (
                        <Row key={rowIndex} className="mb-3">
                            {currentArray.slice(rowIndex * 6, (rowIndex + 1) * 6).map((char) => (
                                <Col key={char} xs={2} className="border p-3 text-center">
                                    <div className="mb-2 h4">{char}</div>
                                    <Image 
                                        src={`url('./src/assets/${char}.png')`}
                                        alt={`Sign for ${char}`}
                                        fluid
                                        style={{ maxHeight: '150px', objectFit: 'contain' }}
                                    />
                                </Col>
                            ))}
                        </Row>
                    ))}
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}