import React from 'react';
import Sidebar from '../containers/Sidebar'
import LibraryInfo from '../components/LibraryInfo'
import CardDisplay from '../containers/CardDisplay'
import { Routes, Route } from 'react-router-dom'

import "../styles/Library.scss"

function Library({ user, logout }) {
    return (
        <div className="layout">
            <aside>
                <Sidebar logout={logout}/>
            </aside>

            <div className="library-wrapper">
                <Routes>
                    <Route path="/" element={<LibraryInfo/>}/>
                    <Route path="/books" element={<CardDisplay/>}/>
                    <Route path="/borrowed" element={<CardDisplay/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Library;