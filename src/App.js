import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from './pages/Library'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import useUser from './components/useUser'

function App() {
  const [user, setUser, logout] = useUser() 

  if (user == null) {
    return <Login setUser={setUser} />
  }

  return (
    <div className="wrapper">
      <h1>boiler-library</h1>
      <hr/>
      <Router>
        <Routes>
          <Route path="/" element={<Library user={user} logout={logout}/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
