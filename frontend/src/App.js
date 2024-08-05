import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={ <HomePage/> } />
        <Route path="/About" index element={ <AboutPage/> } />
        <Route path="/Contact" index element={ <ContactPage/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
