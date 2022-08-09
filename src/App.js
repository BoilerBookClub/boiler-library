import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Library from './pages/Library'
import { Login, googleLogout } from './pages/Login'
import NotFound from './pages/NotFound'

import 'firebaseui/dist/firebaseui.css'

function App() {
  const [user, setUser] = useState() 
  console.log(user)

  const logout = async () => {
    googleLogout()
    setUser(null)
    await new Promise(r => setTimeout(r, 1000));
    window.location.reload()
  }

  useEffect(() => { 
    document.body.style.backgroundColor = '#FBEEE3' 
  }, [])

  if (user == null) {
    return <Login setUser={setUser} />
  }

  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/library" replace/>}/>
          <Route path="/library/*" element={<Library user={user} logout={logout}/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
