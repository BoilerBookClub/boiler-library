import React from 'react';

function Library({ user }) {
    return (
        <div>
            <h2>Library Page</h2>
            <h1>Name: {user.name}</h1>
            <h1>Email: {user.email}</h1>
        </div>
    );
}

export default Library;