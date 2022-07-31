import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

export default function Homepage({ user }) {
    return (
        <div>
            <h1>You are logged in as {`${user['name']}`} ({`${user['email']}`}).</h1>
            <p>Welcome to the Boiler Book Club! Our club library is located in our office at #OFFICE_LOC. You will need to physically be there to use this website.<br/> 
            Anyone found using the library without making the appropriate changes digitally will be removed from the club. If you need any help, ask on the Discord.</p>

            <h3 className="mt-5">What would you like to do?</h3>
            <Row xs={1} sm={2} md={4} className="g-4">
                <Col><Link className="normal-text" to="/library/books">
                    <Card className="m-2 mb-4 text-center rounded border bw2 shadow h-75 grow">
                    <Card.Body>
                        <Card.Title>Borrow a Book</Card.Title>
                        <Card.Text>
                           Borrow any book we currently have available for as long as you require. 
                        </Card.Text>
                    </Card.Body>
                </Card></Link></Col>
                <Col><Link className="normal-text" to="/library/borrowed">
                    <Card className="m-2 mb-4 text-center rounded border bw2 shadow h-75 grow">
                    <Card.Body>
                        <Card.Title>Return a Book</Card.Title>
                        <Card.Text>
                            Return a book you have borrowed to the library.
                        </Card.Text>
                    </Card.Body>
                </Card></Link></Col>
                <Col><Link className="normal-text" to="/library/donate">
                    <Card className="m-2 mb-4 text-center rounded border bw2 shadow h-75 grow">
                    <Card.Body>
                        <Card.Title>Donate a Book</Card.Title>
                        <Card.Text>
                            Grow the library by donating one of your own books to the club.
                        </Card.Text>
                    </Card.Body>
                </Card></Link></Col>
                <Col><a className="normal-text" target="_blank" href="https://boilerbookclub.com" rel="noreferrer">
                    <Card className="m-2 mb-4 text-center rounded border bw2 shadow h-75 grow">
                    <Card.Body>
                        <Card.Title>Visit the Club Website</Card.Title>
                        <Card.Text>
                            View more information about the club and upcoming events.
                        </Card.Text>
                    </Card.Body>
                </Card></a></Col>
            </Row>
        </div>
    )
} 