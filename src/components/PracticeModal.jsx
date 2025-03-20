import React, { useEffect, useState } from 'react';
import { Button, Image, Modal } from "react-bootstrap";
import { useTunnels } from "../contexts/tunnelContext";

export default function PracticeModal({ show, handleClose }) {
    const [currentChar, setCurrentChar] = useState('A');
    const [timer, setTimer] = useState(0);
    const [isRandom, setIsRandom] = useState(false);
    const { currentLetter, letters, numbers, characterType, setCharacterType } = useTunnels();

    const getCurrentArray = () => {
        switch(characterType) {
            case 'numbers':
                return numbers;
            case 'both':
                return [...letters, ...numbers];
            default:
                return letters;
        }
    };

    const getNextChar = (currentArray, currentIndex) => {
        if (isRandom) {
            const randomIndex = Math.floor(Math.random() * currentArray.length);
            return currentArray[randomIndex];
        }
        const nextIndex = (currentIndex + 1) % currentArray.length;
        return currentArray[nextIndex];
    };

    const handleSkip = () => {
        const currentArray = getCurrentArray();
        const currentIndex = currentArray.indexOf(currentChar);
        const nextChar = getNextChar(currentArray, currentIndex);
        setCurrentChar(nextChar);
        setTimer(0);
    };

    
    // Setting timer on tracked letter
    useEffect(() => {
        let interval;
        if (show && currentLetter === currentChar) {
            interval = setInterval(() => {
                setTimer(prev => {
                    if (prev >= 3) {
                        const currentArray = getCurrentArray();
                        const currentIndex = currentArray.indexOf(currentChar);
                        const nextChar = getNextChar(currentArray, currentIndex);
                        setCurrentChar(nextChar);
                        return 0;
                    }
                    return prev + 1;
                });
            }, 1000);
        } else {
            setTimer(0);
        }

        return () => clearInterval(interval);
    }, [currentLetter, currentChar, show, characterType, isRandom]);

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Practice Mode</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <div className="mb-4 d-flex justify-content-center gap-2">
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
                    <Button 
                        variant={isRandom ? 'success' : 'outline-success'}
                        onClick={() => setIsRandom(!isRandom)}
                    >
                        Random
                    </Button>
                </div>
                <h2 className="mb-4">Current Character: {currentChar}</h2>
                <Image 
                    src={`./src/assets/${currentChar}.png`}
                    alt={`Sign for ${currentChar}`}
                    fluid
                    style={{ maxHeight: '300px', objectFit: 'contain' }}
                />
                {currentLetter === currentChar && (
                    <div className="mt-3">
                        Holding for: {timer} seconds
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="warning" onClick={handleSkip}>
                    Skip Character
                </Button>
            </Modal.Footer>
        </Modal>
    );
}