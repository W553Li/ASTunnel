import React from 'react';
import { Button, Modal } from "react-bootstrap";
import { useTunnels } from "../contexts/tunnelContext";

export default function GameEndModal({ show, handleClose, letterCount, missedCount, totalLetterCount }) {
    const { setGameStart } = useTunnels();

    const handleRestart = () => {
        setGameStart(false);
        handleClose();
        setTimeout(() => {
            setGameStart(true);
        }, 0);
    };

    const handleBackToMenu = () => {
        setGameStart(false);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Game Results</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center mb-4">
                    <h5>Final Score:</h5>
                    <p className="mb-2">Hit: {letterCount}</p>
                    <p className="mb-2">Missed: {missedCount}</p>
                    <p className="mb-2">Total: {totalLetterCount}</p>
                    <p className="mb-2">Accuracy: {((letterCount / totalLetterCount) * 100).toFixed(1)}%</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleRestart}>
                    Restart
                </Button>
                <Button variant="secondary" onClick={handleBackToMenu}>
                    Back to Menu
                </Button>
            </Modal.Footer>
        </Modal>
    );
}