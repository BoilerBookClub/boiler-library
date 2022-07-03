import { useState } from 'react'

export default function useUser() {
    const getUser = () => {
        const userJson = localStorage.getItem('user')
        const user = JSON.parse(userJson)
        return user
    }

    const [user, setUser] = useState(getUser())

    const saveUser = user => {
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user)
    }

    const logout = () => {
        localStorage.removeItem('user')
        window.location.reload()
    }

    return [user, saveUser, logout]
}
