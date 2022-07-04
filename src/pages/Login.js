import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

import background from '../assets/loginbackground.jpg'
import logo from '../assets/logo.png'

export default function Login({ setUser }) {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [validated, setValidated] = useState(false);

    const handleSubmit = e => {
        const form = e.currentTarget
        if (form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation()
            setValidated(true)

            return
        }

        const user = {
            name: name,
            email: email
        }
        setUser(user)
    }

    const loginStyle = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center" style={loginStyle}>
            <div className="pb-3 shadow p-3 mb-5 bg-white rounded">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="formTitle" className="text-center pb-3 font-weight-bold">
                        <a href="https://boilerbookclub.com" target="_blank" rel="noreferrer">
                            <Image src={logo} width="70"/>
                        </a>
                        <h2>Sign In</h2>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required type="text" placeholder="Full Name" onChange={e => setName(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control required type="email" placeholder="boilerbc@purdue.edu" onChange={e => setEmail(e.target.value)}/>
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid email address.
                        </Form.Control.Feedback>
                        <Form.Text muted>
                            Enter your Purdue email address.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMemberBox">
                        <Form.Check required feedback="You must confirm your membership before logging in." feedbackType="invalid" 
                            type="checkbox" label="Confirm you are a paid member of the Boiler Book Club"/>
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button style={{ backgroundColor: "#BB4D00", borderColor: "#FBEEE3" }} type="submit">Login</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
