import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';

import './App.css';

const App = () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  return (
    <AuthState>
      <Router>
        <>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/signup' element={<SignUp />} />
              <Route exact path='/login' element={<Login />} />
            </Routes>
          </div>
        </>
      </Router>
    </AuthState>
  );
};

export default App;
