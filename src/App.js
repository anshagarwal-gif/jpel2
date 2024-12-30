// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import EXHIBITION from './pages/Exhibition';
import News from './pages/News';
import ContactUs from './pages/ContactUs/ContactUs';
import Service from './Components/ServiceCard'

function App() {
  return (
    
    <Router>
      <link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  rel="stylesheet"
/>

        <div className='flex flex-1 items-center'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/Exhibition' element={<EXHIBITION/>}/>
            <Route path='/News' element={<News/>}/>
            <Route path='/ContactUs' element={<ContactUs/>}/>
            <Route path='/Service' element={<Service/>}/>
          </Routes>
          
          <Footer/>
          
        </div>
    </Router>
  );
}

export default App;
