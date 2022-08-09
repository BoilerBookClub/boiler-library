import React, { useEffect } from 'react'
import Image from 'react-bootstrap/Image'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { uiConfig, auth } from '../utils/Firebase'

import background from '../assets/loginbackground.jpg'
import logo from '../assets/logo.png'

export function Login({ setUser }) {
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser({
                email: user.email
            })
        });
    }, [setUser])

    const loginStyle = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center" style={loginStyle}>
            <div className="pb-3 shadow p-3 mb-5 bg-white rounded">
                <div className="text-center pb-4 mb-3 font-weight-bold">
                    <a href="https://boilerbookclub.com" target="_blank" rel="noreferrer">
                        <Image className="pb-3" src={logo} width="70"/>
                    </a>
                    <h2>Sign In</h2>
                    <p>If you need help, ask on our discord.</p>
                </div>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
            </div>
        </div>
    );
}

export function googleLogout() {
    auth.signOut()
}