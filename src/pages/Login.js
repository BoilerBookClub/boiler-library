import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
        <form onSubmit={handleSubmit}>
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
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}