import React, { useState, useCallback } from 'react'
import BookCard from '../components/BookCard'
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { IoReload } from 'react-icons/io5';

export default function CardDisplay({isLibrary, getBooks, onCardClick}) {
    const [books, setBooks] = useState(getBooks())

    const [isFetching, setIsFetching] = useState(false)
    const fetch = useCallback(async () => {
        if (isFetching) return

        setBooks([])
        setIsFetching(true)
        setBooks(getBooks())        
        setIsFetching(false)
      }, [isFetching, getBooks])

    const [searchField, setSearchField] = useState('')

    const filteredBooks = books.filter(book => {
        return book['title'].toLowerCase().includes(searchField.toLowerCase()) ||
                book['author'].toLowerCase().includes(searchField.toLowerCase()) ||
                book['genre'].toLowerCase().includes(searchField.toLowerCase())
    })

    return (
        <div>
            <InputGroup className="pb-3">
                <Form.Control placeholder="Search..." onChange={(e) => setSearchField(e.target.value)}/>
                <Button variant='dark' disabled={isFetching} onClick={fetch}><IoReload/></Button>
            </InputGroup>

            <div className='pb-3'>
                <h1>{isLibrary ? "Library" : "Currently Borrowing"}</h1>
            </div>

            {
                filteredBooks.map((book, i) => {
                    return <BookCard key={i} isLibrary={isLibrary} book={book} onClick={() => onCardClick(book)}/>
                })
            }
        </div>
    )
}