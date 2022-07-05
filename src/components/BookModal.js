import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap'

function BookModal({show, setShow, book, isLibrary, borrowBook, returnBook}) {
    return (
        <Modal centered show={show} dialogClassName='book-modal'>
            <Modal.Header closeButton onHide={() => setShow(false)}>
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
                            <p>Added to the library on {book.entered}</p>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                {isLibrary ? 
                    <Button style={{ backgroundColor: "#BB4D00", borderColor: "#FBEEE3" }} onClick={borrowBook(book)}>Borrow</Button> 
                    :
                    <Button style={{ backgroundColor: "#BB4D00", borderColor: "#FBEEE3" }} onClick={returnBook(book)}>Return</Button>
                }
            </Modal.Footer>
        </Modal>
    )
}

export default BookModal;