import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'

function BookModal({show, setShow, book, isLibrary}) {
    return (
        <Modal show={show}>
            <Modal.Header closeButton>
                <Modal.Title>From library? {isLibrary ? "yes" : "no"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal body for {book['title']}</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => setShow(false)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default BookModal;