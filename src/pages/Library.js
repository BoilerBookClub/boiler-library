import React, { useState, useCallback } from 'react';
import Sidebar from '../containers/Sidebar'
import LibraryHome from '../components/LibraryHome'
import CardDisplay from '../containers/CardDisplay'
import BookModal from '../components/BookModal'
import ErrorBoundary from '../components/ErrorBoundary';
import { Routes, Route } from 'react-router-dom'

import { FaBars } from 'react-icons/fa';

import "../styles/Library.scss"

const LIB_PATH = "http://127.0.0.1:3001"

function Library({ user, logout }) {
    const [show, setShow] = useState(false)
    const [book, setBook] = useState({})
    const [books, setBooks] = useState([])
    const [sidebarToggled, setSidebarToggled] = useState(false)
    const [isLibrary, setIsLibrary] = useState()
    const [isFetching, setIsFetching] = useState(false)

    const handleToggleSidebar = (value) => {
        setSidebarToggled(value);
    }

    const onCardClick = (book) => {
        setBook(book)
        setShow(true)
    }

    const retrieve = useCallback(async (library) => { 
        if (isFetching) return
        setIsLibrary(library)

        setBooks([])
        setIsFetching(true)

        const res = library ? await fetch(LIB_PATH + "/books")
            : await fetch(LIB_PATH + `/borrowing?name=${user.name}&email=${user.email}`)
        const data = await res.json() 

        setBooks(data)
        setIsFetching(false)
    }, [isFetching, user])

    const borrowBook = async (book, setLoadingText) => {
        setLoadingText("Working...")
        await fetch(LIB_PATH + `/borrowing?name=${user.name}&email=${user.email}&id=${book.id}`, { method: 'POST'})
        await retrieve(true)
        setShow(false)
        setLoadingText("")
    }

    const returnBook = async (book, setLoadingText) => {
        setLoadingText("Working...")
        await fetch(LIB_PATH + `/returning?name=${user.name}&email=${user.email}&id=${book.id}`, { method: 'POST'})
        await retrieve(false)
        setShow(false)
        setLoadingText("")
    }

    return (
        <div className="layout">
            <Sidebar logout={logout} toggled={sidebarToggled} handleToggleSidebar={handleToggleSidebar} />

            <div className="library-wrapper">
                <div className="btn-toggle mb-4" onClick={() => handleToggleSidebar(true)}>
                    <FaBars />
                </div>

                <ErrorBoundary>
                    <Routes>
                        <Route path="/" element={<LibraryHome user={user}/>}/>
                        <Route path="/books" element={
                            <CardDisplay retrieve={retrieve} books={books} isFetching={isFetching} 
                                library={true} onCardClick={(book) => onCardClick(book)}/>
                        }/>
                        <Route path="/borrowed" element={
                            <CardDisplay retrieve={retrieve} books={books} isFetching={isFetching} 
                                library={false} onCardClick={(book) => onCardClick(book)} />
                        }/>
                    </Routes>
                </ErrorBoundary>
            </div>

            <BookModal show={show} setShow={setShow} book={book} isLibrary={isLibrary} borrowBook={borrowBook} returnBook={returnBook}/>
        </div>
    );
}

export default Library;