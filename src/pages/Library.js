import React from 'react';

function Library({ user, logout }) {
    return (
        <div>
            <h2>Library Page</h2>
            <h1>Name: {user.name}</h1>
            <h1>Email: {user.email}</h1>
            <button onClick={() => logout()}>Logout</button>
        </div>
    );
}

export default Library;