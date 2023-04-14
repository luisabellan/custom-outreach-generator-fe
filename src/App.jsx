import './App.css'
import React from 'react';
import Home from './components/Home';
import Confirmation from './components/Confirmation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/confirmation" element={<Confirmation />} />
    </Routes>
  </Router>
  )
}

export default App
