import React, { useState, useEffect, useCallback } from 'react'
import BookCard from '../components/BookCard'
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { IoReload } from 'react-icons/io5';

export default function CardDisplay({library, books, isFetching, retrieve, onCardClick}) {
    const [searchField, setSearchField] = useState('')

    const refresh = useCallback(async () => {
        await retrieve(library)
    }, [library]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        refresh()
    }, [refresh])

    const filteredBooks = books.filter(book => {
        return book['title'].toLowerCase().includes(searchField.toLowerCase()) ||
                book['author'].toLowerCase().includes(searchField.toLowerCase()) ||
                book['genre'].toLowerCase().includes(searchField.toLowerCase())
    })

    return (
        <div>
            <InputGroup className="pb-3">
                <Form.Control placeholder="Search..." onChange={(e) => setSearchField(e.target.value)}/>
                <Button variant='dark' disabled={isFetching} onClick={refresh}><IoReload/></Button>
            </InputGroup>

            <div className='pb-3'> 
                <h1>{library ? "Library" : "Currently Borrowing"}</h1>
            </div>

            {(filteredBooks.length > 0) ?
                filteredBooks.map((book, i) => {
                    return <BookCard key={i} isLibrary={library} book={book} onClick={() => onCardClick(book)}/>
                })
                : (!isFetching ? 
                    <h3>{library ? "The library is empty! Consider donating a book." : "You are not currently borrowing any books."}</h3>
                    : <h3>Loading...</h3>
                )
            }
        </div>
    )
}