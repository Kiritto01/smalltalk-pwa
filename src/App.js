import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link } from "react-router-dom";
import './App.css';
import Chat from './views/Chat.js'
import Profile from './views/Profile.js'
import Login from './views/Login.js'
import Admin from './views/Admin.js'
import Circles from './views/Circles.js'

import {request} from './client';

function App() {
  const user = {
    username: 'wayson14'
  }
  // request('http://localhost:7000','/user')
  //   .then(res => {console.log(res);})
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Link className="nav-item" to="/chat">chat</Link>
          <Link className="nav-item" to="/profile">profile</Link>
          <Link className="nav-item" to="/login">login</Link>
          <Link className="nav-item" to="/circles">circles</Link>
          <Link className="nav-item" to="/admin">admin</Link>
          <span className="nav-item">logged as {user.username}</span>
          <h4 className='logo'>smallTalk</h4>
        </header>
        <div className='main'>
          <Routes>
            <Route path="/" element={<Profile/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/circles" element={<Circles/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </div>

      </Router>

     
    </div>
  );
}

export default App;
