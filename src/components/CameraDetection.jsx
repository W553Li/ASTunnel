import * as handpose from '@tensorflow-models/handpose';
import '@tensorflow/tfjs-backend-webgl';
import * as fp from 'fingerpose';
import { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { Button } from 'react-bootstrap';
import { useTunnels } from "../contexts/tunnelContext";
// import loadHandSigns from '../handSigns';
import Handsigns from "../handSigns"

export default function CameraDetection() {
  const webcamRef = useRef(null);
  // const canvasRef = useRef(null);
  const { currentLetter, setCurrentLetter } = useTunnels();
  const [videoProperties] = useState({
    width: 640,
    height: 480,
  });
  const [showCamera, setShowCamera] = useState(true); // For display toggle
  
  // run at start, grab webcam and start running handpose
  useEffect(() => {
    const getHandpose = async () => {
      const net = await handpose.load();
      // const handSigns = await loadHandSigns();
      const GE = new fp.GestureEstimator(Object.values(Handsigns));
      runHandpose(net, GE);
    };
    getHandpose();
  }, []);

  // through webcam, detect hands and estimate gesture and best approximate handsign
  const runHandpose = useCallback(async (net, GE) => {
    const detectHands = async () => {
      if (webcamRef.current && webcamRef.current.video.readyState === 4) {
        const webVideo = webcamRef.current.video;
        const hand = await net.estimateHands(webVideo);

        if (hand.length > 0) {
          const gesture = await GE.estimate(hand[0].landmarks, 8);

          if (gesture.gestures && gesture.gestures.length > 0) {
            const maxConfidence = gesture.gestures.reduce((prev, current) =>
              prev.score > current.score ? prev : current
            );
            if (maxConfidence.name == 'One') {
              setCurrentLetter('1');
            } else if (maxConfidence.name == 'Two') {
              setCurrentLetter('2');
            } else if (maxConfidence.name == 'Three') {
              setCurrentLetter('3');
            } else if (maxConfidence.name == 'Four') {
              setCurrentLetter('4');
            } else if (maxConfidence.name == 'Five') {
              setCurrentLetter('5');
            } else if (maxConfidence.name == 'Six') {
              setCurrentLetter('6');
            } else if (maxConfidence.name == 'Seven') {
              setCurrentLetter('7');
            } else if (maxConfidence.name == 'Eight') {
              setCurrentLetter('8');
            } else if (maxConfidence.name == 'Nine') {
              setCurrentLetter('9');
            } else {
              setCurrentLetter(maxConfidence.name);
            }
            // setCurrentLetter(maxConfidence.name);
          }
        }
      }
      requestAnimationFrame(detectHands);
    };
    detectHands();
  }, []);

  const toggleCamera = useCallback(() => {
    setShowCamera(prev => !prev);
  }, []);

  return (
    <>
      <div style={{ position: 'absolute', left: '0', top: '0', width: '100vw', height: '100vh' }}>
        <div style={{ 
          position: 'absolute', 
          left: '50%', 
          top: '3%',
          transform: 'translateX(-50%)',
          width: 'auto', 
          fontSize: '72px',
          fontWeight: 'bold',
          color: 'BlueViolet',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          {currentLetter}
        </div>
        
        <Webcam
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            width: `${videoProperties.width}px`,
            height: `${videoProperties.height}px`,
            visibility: showCamera ? 'visible' : 'hidden'
          }}
          id="webcam"
          ref={webcamRef}
        />
        
        <Button
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
          }}
          onClick={toggleCamera}
          variant={showCamera ? 'danger' : 'success'}
        >
          {showCamera ? 'Hide Camera' : 'Show Camera'}
        </Button>
      </div>
    </>
  );
}