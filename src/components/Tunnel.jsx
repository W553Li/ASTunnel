import * as Three from "https://cdn.jsdelivr.net/npm/three@0.161.0/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.161.0/examples/jsm/controls/OrbitControls.js";
import { TextGeometry } from "https://cdn.jsdelivr.net/npm/three@0.161.0/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "https://cdn.jsdelivr.net/npm/three@0.161.0/examples/jsm/loaders/FontLoader.js";
import { useEffect, useRef, useState } from 'react';
import { useTunnels } from "../contexts/tunnelContext.jsx";
import GameEndModal from './GameEndModal.jsx';
import spline from "./Spline.jsx";

export default function Tunnel () {
    const mountRef = useRef(null);
    const lettersArray = useRef([]);
    const sceneRef = useRef();
    const cameraRef = useRef();
    const [letterCount, setLetterCount] = useState(0);
    const [totalLetterCount, setTotalLetterCount] = useState(0);
    const [missedCount, setMissedCount] = useState(0);
    const { currentLetter, setCurrentLetter, numLetters, speed, characterType } = useTunnels();
    const [showEndModal, setShowEndModal] = useState(false);
    const handleCloseEndModal = () => setShowEndModal(false);
    const totalLettersRef = useRef(0);

    useEffect(() => {
        if (lettersArray.current.length > 0) {
            if ((currentLetter === lettersArray.current[0].name) && (cameraRef.current.position.distanceTo(lettersArray.current[0].position) < 3)) {
                sceneRef.current.remove(lettersArray.current[0]);
                lettersArray.current.splice(0, 1);
                setCurrentLetter("");
                setLetterCount(prev => prev + 1);
            }
        }
    }, [currentLetter, setCurrentLetter]);

    useEffect(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const renderer = new Three.WebGLRenderer({ antialias: true });
        renderer.setSize(w, h);
        renderer.toneMapping = Three.ACESFilmicToneMapping;
        renderer.outputColorSpace = Three.SRGBColorSpace;
        mountRef.current.appendChild(renderer.domElement);

        // set up camera
        cameraRef.current = new Three.PerspectiveCamera( 75, w / h, 0.1, 1000);
        cameraRef.current.position.z = 5;  // set the camera a bit further back

        // set up scene
        sceneRef.current = new Three.Scene();
        sceneRef.current.fog = new Three.FogExp2(0x000000, 0.3);

        // mouse control
        const controls = new OrbitControls(cameraRef.current, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.03;

        // create a tube geometry from the spline
        const tubeGeometry = new Three.TubeGeometry(spline, 222, 0.6, 16, true);
        const tubeMaterial = new Three.MeshBasicMaterial({
            color: 0xffffff,
            side: Three.DoubleSide,
        });
        const tube = new Three.Mesh(tubeGeometry, tubeMaterial);
        sceneRef.current.add(tube);

        // adding letters throughout tunnel
        const loader = new FontLoader();
        loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
            const size = 0.075;
            const letterMaterial = new Three.MeshBasicMaterial({
                color: 0x00ffff,
            });

            for (let i = 0; i < numLetters; i++) {
                let character;
                if (characterType === 'letters') {
                    character = String.fromCharCode(65 + Math.floor(Math.random() * 26));
                } else if (characterType === 'numbers') {
                    character = String(Math.floor(Math.random() * 9) + 1);
                } else { // both
                    const isLetter = Math.random() > 0.5;
                    character = isLetter 
                        ? String.fromCharCode(65 + Math.floor(Math.random() * 26))
                        : String(Math.floor(Math.random() * 9) + 1);
                }

                const letterGeometry = new TextGeometry(character, {
                    font: font,
                    size: size,
                    height: 0.01,
                    curveSegments: 12,
                    bevelEnabled: false,
                });

                const letter = new Three.Mesh(letterGeometry, letterMaterial);
                const p = (i / numLetters + Math.random() * 0.02) % 1;
                const pos = tubeGeometry.parameters.path.getPointAt(p);
                letter.position.copy(pos);
                letter.name = character;
                lettersArray.current.push(letter);
                sceneRef.current.add(letter);
            }
            totalLettersRef.current = lettersArray.current.length;
        });

        // move through tube
        function updateCamera(t) {
            const time = t * 0.1;
            const looptime = 10000 / speed;
            const p = (time % looptime) / looptime;
            const pos = tubeGeometry.parameters.path.getPointAt(p);
            cameraRef.current.position.copy(pos);
            const lookAt = tubeGeometry.parameters.path.getPointAt((p + 0.03) % 1);
            cameraRef.current.lookAt(lookAt);
        }

        // animate and render the shape
        let isAnimating = true;

        function animate(t = 0) {
            if (!isAnimating) return;
            requestAnimationFrame(animate);

            // sort lettersArray based on distance to camera
            lettersArray.current.sort((a, b) => cameraRef.current.position.distanceTo(a.position) - cameraRef.current.position.distanceTo(b.position));

            // remove letters that are too close to camera (prev 0.3)
            lettersArray.current.forEach((letter, i) => {
                if (cameraRef.current.position.distanceTo(letter.position) < 0.4) {
                    lettersArray.current.splice(i, 1);
                    sceneRef.current.remove(letter);
                    setMissedCount(prev => prev + 1);
                } else {
                    letter.lookAt(cameraRef.current.position);
                }
            });

            // Check if all letters have been passed
            if (lettersArray.current.length === 0 && totalLettersRef.current > 0) {
                setShowEndModal(true);
                isAnimating = false;
            }

            // render onto screen and update letters
            updateCamera(t);
            renderer.render(sceneRef.current, cameraRef.current);
            controls.update();
        }

        // Run animation
        animate();

        // Cleanup on unmount
        return () => {
            isAnimating = false;
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
                renderer.dispose();
                renderer.forceContextLoss();
            }
        };
    }, []);

    // Properly track total letters between renders (previous totalLettersCount always 0)
    useEffect(() => {
        setTotalLetterCount(totalLettersRef.current);
    }, [totalLettersRef.current]);

    return (
        <>
            <div 
                style={{
                    position: 'absolute', 
                    top: '1vh', 
                    left: '1vw', 
                    color: 'BlueViolet', 
                    zIndex: 10
                }}
            >
                Hit: {letterCount} / Missed: {missedCount} / Total: {totalLetterCount}
            </div>
            <div 
                ref={mountRef} 
            />
            <GameEndModal 
                show={showEndModal}
                handleClose={handleCloseEndModal}
                letterCount={letterCount}
                missedCount={missedCount}
                totalLetterCount={totalLetterCount}
            />
        </>
    );
}