import React, { useContext, useEffect, useState } from 'react';

const TunnelsContext = React.createContext()

export function useTunnels() {
    return useContext(TunnelsContext)
}

export const TunnelsProvider = ({children}) => {
    const [numLetters, setNumLetters] = useState(1);
    const [speed, setSpeed] = useState(1);
    const [currentLetter, setCurrentLetter] = useState("");
    const [gameStart, setGameStart] = useState(false);
    const [characterType, setCharacterType] = useState('letters');
    const [darkMode, setDarkMode] = useState(false);
    const letters = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const numbers = Array.from('123456789');
    
    useEffect(() => {
        document.body.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);
    
    return <TunnelsContext.Provider value={{
        letters,
        numbers,
        numLetters,
        speed,
        currentLetter,
        gameStart,
        characterType,
        darkMode,
        setNumLetters,
        setSpeed,
        setCurrentLetter,
        setGameStart,
        setCharacterType,
        setDarkMode,
    }}> {children} </TunnelsContext.Provider>
}