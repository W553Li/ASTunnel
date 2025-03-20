import { useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import { useTunnels } from "../contexts/tunnelContext";
import ExtraModal from "./ExtraModal";
import GalleryModal from "./GalleryModal";
import PracticeModal from "./PracticeModal";
import SettingsModal from "./SettingsModal";

const menuStyles = {
    zIndex: 1,
    bottom: '33vh',
    width: 'auto',
    minWidth: '25vw'
};

const titleStyles = {
    position: 'fixed',
    left: '20px',
    top: '25%',
    transform: 'translateY(-50%)',
    writingMode: 'vertical-rl',
    textOrientation: 'mixed',
    fontSize: '4rem',
    fontWeight: 'bold',
    opacity: '0.7',
    userSelect: 'none'
};

export default function Menu() {
    // handle showing Menu
    const [showSettingsModal, setShowSettingsModal] = useState(false);
    const [showGalleryModal, setShowGalleryModal] = useState(false);
    const [showPracticeModal, setShowPracticeModal] = useState(false);
    const [showExtraModal, setShowExtraModal] = useState(false);
    const { gameStart, darkMode } = useTunnels();

    const handleShowSettings = () => setShowSettingsModal(true);
    const handleCloseSettings = () => setShowSettingsModal(false);

    const handleShowGallery = () => setShowGalleryModal(true);
    const handleCloseGallery = () => setShowGalleryModal(false);

    const handleShowPractice = () => setShowPracticeModal(true);
    const handleClosePractice = () => setShowPracticeModal(false);

    const handleShowExtra = () => setShowExtraModal(true);
    const handleCloseExtra = () => setShowExtraModal(false);

    // render menu
    return (
        <>
            {!gameStart && (
                <>
                    <div 
                        style={titleStyles} 
                        className={`text-${darkMode ? 'light' : 'dark'}`}
                    >
                        ASTunneL
                    </div>
                    <Container 
                        className="position-fixed end-0 p-3" 
                        style={menuStyles}
                    >
                        <Stack gap={2}>
                            <Button 
                                variant="primary" 
                                onClick={handleShowSettings}
                                className="py-1"
                                size="lg" 
                            >
                                Start
                            </Button>
                            <Button 
                                variant="info" 
                                onClick={handleShowPractice}
                                className="py-1"
                                size="lg"
                            >
                                Practice Mode
                            </Button>
                            <Button 
                                variant="secondary" 
                                onClick={handleShowGallery}
                                className="py-1"
                                size="lg"
                            >
                                Open Gallery
                            </Button>
                            <Button 
                                variant={darkMode ? 'light' : 'dark'}
                                onClick={handleShowExtra}
                                className="py-1"
                                size="lg"
                            >
                                Important Info
                            </Button>
                        </Stack>
                    </Container>
                </>
            )}

            <SettingsModal show={showSettingsModal} handleClose={handleCloseSettings} />
            <GalleryModal show={showGalleryModal} handleClose={handleCloseGallery} />
            <PracticeModal show={showPracticeModal} handleClose={handleClosePractice} />
            <ExtraModal show={showExtraModal} handleClose={handleCloseExtra} />
        </>
    );
}
