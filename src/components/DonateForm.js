import React, { useState} from 'react'
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { genImage, genId } from '../utils/Helpers'
import { addBook } from '../utils/LibraryDB'

export default function DonateForm({user}) {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [genre, setGenre] = useState("")

    const navigate = useNavigate()
    const [validated, setValidated] = useState(false);
    const [buttonText, setButtonText] = useState('Donate')

    const generate = async () => {
        let id = genId(title)
        let image = await genImage(title)
        let name = user['name']
        let email = user['email']

        addBook({
            id,
            title,
            author,
            genre,
            image,
            name,
            email,
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const form = e.currentTarget
        if (form.checkValidity() === false) {
            e.stopPropagation()
            setValidated(true)

            return
        }

        setButtonText("Working...")
        await generate()
        setButtonText("Donate")
        navigate("/library/books", { replace: true })
    }

    return (
        <div className="d-flex min-vh-100 justify-content-center align-items-center">
            <div className="pb-3 shadow p-3 mb-5 bg-white rounded">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="formTitle" className="pb-3 font-weight-bold">
                        <h2 className="text-center">Donate a Book</h2>
                        <p>If at any point you desire to remove the book from the library, you are allowed to. Please contact 
                            either the President or Communications Officer to do this. <br/>
                        We make no guarantees about the book still being there. For your
                            sake, it is best to consider this as giving up the book to the club. Thank you!</p>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control required type="text" onChange={e => setTitle(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formAuthor">
                        <Form.Label>Author</Form.Label>
                        <Form.Control required type="text" onChange={e => setAuthor(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formGenre">
                        <Form.Label>Genre</Form.Label>
                        <Form.Control required type="text" onChange={e => setGenre(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPlaced">
                        <Form.Check required feedback="You must place the book in our library at our Purdue office. Ask on Discord for help." feedbackType="invalid" 
                            type="checkbox" label="Confirm you have physically added the book to the library."/>
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button style={{ backgroundColor: "#BB4D00", borderColor: "#FBEEE3" }} type="submit">{buttonText}</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}