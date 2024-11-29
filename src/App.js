// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import EXHIBITION from './pages/Exhibition';
import News from './pages/News';

function App() {
  return (
    <Router>
        <div className='flex flex-1 items-center'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/Exhibition' element={<EXHIBITION/>}/>
            <Route path='/News' element={<News/>}/>
          </Routes>
          
          <Footer/>
          
        </div>
    </Router>
  );
}

export default App;
