import React from 'react'

export default function LibraryHome({ user }) {
    return (
        <div>
            <h1>You are logged in as {`${user['name']}`} ({`${user['email']}`})</h1>
        </div>
    )
} 