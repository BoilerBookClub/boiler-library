import React, { useEffect, useState } from 'react'
import Image from 'react-bootstrap/Image'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { uiConfig, auth } from '../utils/Firebase'
import { getMembersOnlyPassword } from '../utils/Firebase';

import background from '../assets/loginbackground.jpg'
import logo from '../assets/logo.png'
import { FormControl } from 'react-bootstrap';

export function Login({ setUser }) {
    const [isMember, setIsMember] = useState(false)
    const [password, setPassword] = useState('')

    const checkPassword = async (entered) => {
        // eslint-disable-next-line
        setIsMember(entered == password)
    }

    useEffect(() => {
        async function getPassword() {
            setPassword(await getMembersOnlyPassword())
        }
        getPassword()

        var unsubscribe = auth.onIdTokenChanged((e) => {
            if (!!auth.currentUser) {
                setUser({
                    email: auth.currentUser.email
                })
            }
        });

       return () => unsubscribe() 
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
                        <Image src={logo} width="70"/>
                    </a>
                    <h2>Sign In</h2>
                </div>
                <div className="text-center pb-4">
                    <h4>Member Only Password</h4>
                    <p>You can find this in pinned in the #members-only channel on discord.</p>
                    <FormControl type="text" onChange={(e) => checkPassword(e.target.value)}/>
                </div>
                { isMember &&
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
                }
            </div>
        </div>
    );
}

export function googleLogout() {
    auth.signOut()
}