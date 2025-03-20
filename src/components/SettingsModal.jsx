import React from 'react';
import { Button, Form, Modal } from "react-bootstrap";
import { useTunnels } from "../contexts/tunnelContext";
// import CameraDetection from './CameraDetection';
import Tunnel from './Tunnel';

export default function SettingsModal({ show, handleClose }) {
    const { 
        numLetters, 
        speed, 
        setNumLetters, 
        setSpeed, 
        gameStart, 
        setGameStart,
        characterType,
        setCharacterType 
    } = useTunnels();

    const handleLettersChange = (e) => {
        setNumLetters(e.target.value);
    };

    const handleSpeedChange = (e) => {
        setSpeed(e.target.value);
    };

    const handleStart = () => {
        setGameStart(true);
        handleClose();
    };

    // render
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Adjust Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label className="mb-3">Choose Characters:</Form.Label>
                    <div className="d-flex gap-2 mb-4">
                        <Button 
                            variant={characterType === 'letters' ? 'primary' : 'outline-primary'}
                            onClick={() => setCharacterType('letters')}
                        >
                            Letters
                        </Button>
                        <Button 
                            variant={characterType === 'numbers' ? 'primary' : 'outline-primary'}
                            onClick={() => setCharacterType('numbers')}
                        >
                            Numbers
                        </Button>
                        <Button 
                            variant={characterType === 'both' ? 'primary' : 'outline-primary'}
                            onClick={() => setCharacterType('both')}
                        >
                            Both
                        </Button>
                    </div>
                    <Form.Label>Number of Characters: {numLetters}</Form.Label>
                    <Form.Range
                        min="1"
                        max="100"
                        value={numLetters}
                        onChange={handleLettersChange}
                    />
                    <Form.Label>Speed: {speed}</Form.Label>
                    <Form.Range
                        min="1"
                        max="10"
                        step="0.1"
                        value={speed}
                        onChange={handleSpeedChange}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleStart}>
                        Start
                    </Button>
                </Modal.Footer>
            </Modal>
            {gameStart && <Tunnel />}
        </>
    );
}