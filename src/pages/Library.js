import React, { useState } from 'react';
import Sidebar from '../containers/Sidebar'
import LibraryInfo from '../components/LibraryInfo'
import CardDisplay from '../containers/CardDisplay'
import { Routes, Route } from 'react-router-dom'

import { FaBars } from 'react-icons/fa';
import { books } from '../assets/books';

import "../styles/Library.scss"

function Library({ user, logout }) {
    const [toggled, setToggled] = useState(false);

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };

    return (
        <div className="layout">
            <Sidebar logout={logout} toggled={toggled} handleToggleSidebar={handleToggleSidebar} />

            <div className="library-wrapper">
                <div className="btn-toggle mb-4" onClick={() => handleToggleSidebar(true)}>
                    <FaBars />
                </div>
                <Routes>
                    <Route path="/" element={<LibraryInfo/>}/>
                    <Route path="/books" element={<CardDisplay books={books} onClick={{}}/>}/>
                    <Route path="/borrowed" element={<CardDisplay books={books} onClick={{}}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Library;