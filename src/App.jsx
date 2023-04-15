import './App.css'
import React, { useState } from 'react';
import Home from './components/Home';
import Confirmation from './components/Confirmation';
import Login from './components/Login';
import { isAuthenticated } from './auth/basicAuth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [isAuthenticatedState, setIsAuthenticatedState] = useState(
    isAuthenticated()
  );
  const [keyPhrase, setKeyPhrase] = useState("");


  return (
    <Router>
      <Routes>
      {isAuthenticatedState ? (
          <>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/confirmation" element={<Confirmation />} />
          </>
        ) : (
          <>
          <Route exact path="/" element={<Login 
          setIsAuthenticatedState={setIsAuthenticatedState}
          keyPhrase={keyPhrase}
          setKeyPhrase={setKeyPhrase}
          />} />
        </>
        )}
      </Routes>
    </Router>
  )}

export default App
