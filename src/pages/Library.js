import React, { useState } from 'react';
import Sidebar from '../containers/Sidebar'
import LibraryHome from '../components/LibraryHome'
import CardDisplay from '../containers/CardDisplay'
import BookModal from '../components/BookModal'
import { Routes, Route } from 'react-router-dom'

import { FaBars } from 'react-icons/fa';

import { books as sampleBooks } from '../assets/books'
import "../styles/Library.scss"

function Library({ user, logout }) {
    const [show, setShow] = useState(false)
    const [book, setBook] = useState({})
    const [toggled, setToggled] = useState(false)
    const [isLibrary, setIsLibrary] = useState(true)

    const handleToggleSidebar = (value) => {
        setToggled(value);
    }

    const onClick = (book, isLibrary) => {
        setIsLibrary(isLibrary)
        setBook(book)
        setShow(true)
    }

    const getLibraryBooks = () => { return sampleBooks }
    const getBorrowedBooks = () => { return sampleBooks }
    const borrowBook = (book) => {}
    const returnBook = (book) => {}

    return (
        <div className="layout">
            <Sidebar logout={logout} toggled={toggled} handleToggleSidebar={handleToggleSidebar} />

            <div className="library-wrapper">
                <div className="btn-toggle mb-4" onClick={() => handleToggleSidebar(true)}>
                    <FaBars />
                </div>
                <Routes>
                    <Route path="/" element={<LibraryHome user={user}/>}/>
                    <Route path="/books" element={
                        <CardDisplay getBooks={getLibraryBooks} isLibrary onCardClick={(book) => onClick(book, true)}/>
                    }/>
                    <Route path="/borrowed" element={
                        <CardDisplay getBooks={getBorrowedBooks} onCardClick={(book) => onClick(book, false)} />
                    }/>
                </Routes>
            </div>

            <BookModal show={show} setShow={setShow} book={book} isLibrary={isLibrary} borrowBook={borrowBook} returnBook={returnBook}/>
        </div>
    );
}

export default Library;