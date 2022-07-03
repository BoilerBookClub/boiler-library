import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Library from './pages/Library'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import useUser from './hooks/useUser'

function App() {
  const [user, setUser, logout] = useUser() 

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
