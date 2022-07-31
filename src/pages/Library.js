import React, { useState, useCallback } from 'react';
import Sidebar from '../containers/Sidebar'
import Homepage from './Homepage'
import CardDisplay from '../containers/CardDisplay'
import BookModal from '../components/BookModal'
import DonateForm from '../components/DonateForm'
import ErrorBoundary from '../components/ErrorBoundary';
import { retrieveBooks as retrieving, retrieveBorrowedBooks, borrowBook as borrowing, returnBook as returning } from '../utils/LibraryDB'
import { Routes, Route } from 'react-router-dom'

import { FaBars } from 'react-icons/fa';

import "../styles/Library.scss"

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

    const retrieveBooks = useCallback(async (calledInLibrary) => { 
        if (isFetching) return
        setIsLibrary(calledInLibrary)

        setBooks([])
        setIsFetching(true)
        let books = (calledInLibrary) ? await retrieving() : await retrieveBorrowedBooks(user);
        setBooks(books)
        setIsFetching(false)
    }, [isFetching, user])

    const borrowBook = async (book, setLoadingText) => {
        setLoadingText("Working...")
        await borrowing(book.id, user)
        await retrieveBooks(true)
        setShow(false)
        setLoadingText("")
    }

    const returnBook = async (book, setLoadingText) => {
        setLoadingText("Working...")
        await returning(book.id, user)
        await retrieveBooks(false)
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
                        <Route path="/" element={<Homepage user={user}/>}/>
                        <Route path="/books" element={
                            <CardDisplay retrieve={retrieveBooks} books={books} isFetching={isFetching} 
                                library={true} onCardClick={(book) => onCardClick(book)}/>
                        }/>
                        <Route path="/borrowed" element={
                            <CardDisplay retrieve={retrieveBooks} books={books} isFetching={isFetching} 
                                library={false} onCardClick={(book) => onCardClick(book)} />
                        }/>
                        <Route path="/donate" element={<DonateForm user={user}/>}/>
                    </Routes>
                </ErrorBoundary>
            </div>

            <BookModal show={show} setShow={setShow} book={book} isLibrary={isLibrary} borrowBook={borrowBook} returnBook={returnBook}/>
        </div>
    );
}

export default Library;