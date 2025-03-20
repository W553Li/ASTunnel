import React from 'react';
import { Button } from 'react-bootstrap';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { useTunnels } from '../contexts/tunnelContext';

export default function ThemeToggle() {
    const { darkMode, setDarkMode, gameStart } = useTunnels();

    if (gameStart) {
        return null;
    }

    return (
        <Button
            variant={darkMode ? 'light' : 'dark'}
            onClick={() => setDarkMode(prev => !prev)}
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 1,
                borderRadius: '50%',
                width: '46px',
                height: '46px',
                padding: '0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {darkMode ? <BsSunFill size={20} /> : <BsMoonFill size={20} />}
        </Button>
    );
}