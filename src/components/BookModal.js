import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap'

function BookModal({show, setShow, book, isLibrary, borrowBook, returnBook}) {
    const [loadingText, setLoadingText] = useState("")

    const close = () => {
        setShow(false)
    }

    return (
        <Modal centered show={show} dialogClassName='book-modal' onEscapeKeyDown={close} onHide={close}>
            <Modal.Header closeButton onHide={close}>
                <Modal.Title>{!isLibrary && "Currently Borrowed: " }{book.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col className='align-items-center justify-content-center d-flex'>
                            <img alt='Cover' src={book.image} width={120}/>
                        </Col>
                        <Col>
                            <p>- {book.author}<br/>- {book.genre}</p>
                        </Col>
                    </Row>
                </Container>
                <div className='p-3 align-items-center justify-content-center d-flex'>
                    <h3>{loadingText}</h3>
                </div>
            </Modal.Body>
            <div className='d-flex justify-content-center align-items-center mb-4 pl-3 pr-3'>
                {isLibrary ? 
                    <Button style={{ backgroundColor: "#BB4D00", borderColor: "#FBEEE3" }} onClick={() => borrowBook(book, setLoadingText)}>Borrow</Button> 
                    :
                    <Button style={{ backgroundColor: "#BB4D00", borderColor: "#FBEEE3" }} onClick={() => returnBook(book, setLoadingText)}>Return</Button>
                }
            </div>
        </Modal>
    )
}

export default BookModal;