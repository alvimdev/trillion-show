import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';

import Register from './pages/Register.js'
import Login from './pages/Login.js'
import Home from './pages/Home.js'
import Quiz from './pages/Quiz.js'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
