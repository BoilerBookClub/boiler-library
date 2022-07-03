import React from 'react';
import Sidebar from '../containers/Sidebar'
import LibraryInfo from '../components/LibraryInfo'
import CardDisplay from '../containers/CardDisplay'
import { Routes, Route } from 'react-router-dom'

function Library({ user, logout }) {
    return (
        <div>
            <Sidebar logout={logout}/>

            <h2>Library Page</h2>
            <h1>Name: {user.name}</h1>
            <h1>Email: {user.email}</h1>
            <button onClick={() => logout()}>Logout</button>

            <Routes>
                <Route path="/" element={<LibraryInfo/>}/>
                <Route path="/books" element={<CardDisplay/>}/>
                <Route path="/borrowed" element={<CardDisplay/>}/>
            </Routes>
        </div>
    );
}

export default Library;