import React from 'react'
import BookCard from '../components/BookCard'
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { IoReload } from 'react-icons/io5';

export default function CardDisplay({books, onClick}) {
    return (
        <div>
            <InputGroup className="pb-5">
                <Form.Control placeholder="Search..."/>
                <Button variant='outline-secondary' outline ><IoReload/></Button>
            </InputGroup>

            {
                books.map((book) => {
                    return <BookCard book={book} onClick={onClick}/>
                })
            }
        </div>
    )
}