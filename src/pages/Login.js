import React, { useState } from 'react';

export default function Login({ setUser }) {
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleSubmit = e => {
        const user = {
            name: name,
            email: email
        }
        setUser(user)
    }

    return (
        <div>
            <h1>Please login</h1>
            <form onSubmit={() => handleSubmit()}>
                <label>
                    <p>Name</p>
                    <input type="text" onChange={e => setName(e.target.value)}/>
                </label>
                <label>
                    <p>Email</p>
                    <input type="text" onChange={e => setEmail(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}