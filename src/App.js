import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import Library from './pages/Library'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

function App() {
  const [user, setUser] = useState();

  if (!user) {
    return <Login setUser={setUser} />
  }

  return (
    <div className="wrapper">
      <h1>boiler-library</h1>
      <hr/>
      <Router>
        <Routes>
          <Route path="/" element={<Library user={user}/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
