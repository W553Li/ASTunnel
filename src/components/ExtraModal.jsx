import React from 'react';
import { Button, ListGroup, Modal } from 'react-bootstrap';

export default function ExtraModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Important Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>⚡ Hardware Acceleration is recommended</strong>
            <p className="small mb-0">This will improve webcam and gesture detection performance</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>📹 Camera Access</strong>
            <p className="small mb-0">Browser permission for camera access is required</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>💡 Good Lighting</strong>
            <p className="small mb-0">Ensure your hands are well lit for better detection</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>👋 Hand Position</strong>
            <p className="small mb-0">Keep your hand within frame and about 1-2 feet from your camera</p>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}