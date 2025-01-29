// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import EXHIBITION from './pages/Exhibition';
import News from './pages/News';
import ContactUs from './pages/ContactUs/ContactUs';
import Service from "./pages/Services/Service"
import Woven from './pages/Woven/Woven';
import PlasticRecycling from './pages/PlasticRecycling/PlasticRecycling';
import Aboutus from './pages/Aboutus/Aboutus';
import TapeExtrusion from './pages/TapeExtrusion/TapeExtrusion';
import CircularLoom from './pages/CircularLoom/CircularLoon';
import PrintingMachine from './pages/PrintingMachines/PrintingMachine';

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
            <Route path="/Woven" element={<Woven />} />
            <Route path="/PlasticRecycling" element={<PlasticRecycling />} />
            <Route path='/AboutUs' element={<Aboutus/>}/>
            <Route path='/TapeExtrusion' element={<TapeExtrusion/>}/>
            <Route path='/CircularLoom' element={<CircularLoom/>}/>
            <Route path='/PrintingMachine' element={<PrintingMachine/>}/>
          </Routes>
          
          <Footer/>
          
        </div>
    </Router>
  );
}

export default App;
