import React, { useState } from 'react';
import Sidebar from '../containers/Sidebar'
import LibraryInfo from '../components/LibraryInfo'
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

    return (
        <div className="layout">
            <Sidebar logout={logout} toggled={toggled} handleToggleSidebar={handleToggleSidebar} />

            <div className="library-wrapper">
                <div className="btn-toggle mb-4" onClick={() => handleToggleSidebar(true)}>
                    <FaBars />
                </div>
                <Routes>
                    <Route path="/" element={<LibraryInfo/>}/>
                    <Route path="/books" element={
                        <CardDisplay getBooks={getLibraryBooks} title={"Library"} onClick={(book) => onClick(book, true)}/>}/>
                    <Route path="/borrowed" element={
                        <CardDisplay getBooks={getBorrowedBooks} title={`${user['name']}: Borrowed Books`} onClick={(book) => onClick(book, false)} />
                    }/>
                </Routes>
            </div>

            <BookModal show={show} setShow={setShow} book={book} isLibrary={isLibrary}/>
        </div>
    );
}

export default Library;