import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import EXHIBITION from './pages/Exhibition';
import News from './pages/News';
import ContactUs from './pages/ContactUs/ContactUs';
import Service from "./pages/Services/Service";
import Woven from './pages/Woven/Woven';
import PlasticRecycling from './pages/PlasticRecycling/PlasticRecycling';
import Aboutus from './pages/Aboutus/Aboutus';
import TapeExtrusion from './pages/TapeExtrusion/TapeExtrusion';
import CircularLoom from './pages/CircularLoom/CircularLoon';
import PrintingMachine from './pages/PrintingMachines/PrintingMachine';
import WindingMachine from './pages/WindingMachine/WindingMachine';
import ExtrusionCoating from './pages/ExtrusionCoating/ExtrusionCoating';
import WovenSack from './pages/WovenSack/WovenSack';
import BatteryBox from './pages/BatteryBox/BatteryBox';
import Carrer from './pages/Carrer/Carrer';
import BoxStrapping from './pages/Box-Strapping/BoxStrapping';
import Monofilament from './pages/Monofilament/Monofilament';
import SheetExtrusion from './pages/SheetExtrusion/SheetExtrusion';
import CastLine from './pages/CastLine/CastLine';
import PET from './pages/PET/PET';
import Flexible from './pages/Flexible/Flexible';
import Bag from './pages/Bag-Conversion/Bag';
import AdminLogin from './pages/AdminPanel/AdminLogin';
import AdminDashboard from './pages/AdminPanel/AdminDashboard';
import ProtectedRoute from './ProtectedRoute';
import BBB from './pages/BBB/BBB';
import OOSForm from './Components/OOSForm';
import IOTServices from './pages/IOTServices/IOTServices';
import SparePartServices from './pages/SparePartServices/SparePartServices';

import { useEffect } from 'react';
import ScrollToTop from './Components/ScrollToTop';

function AppLayout() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isPlasticRecyclingRoute = location.pathname.startsWith('/PlasticRecycling');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hide Navbar on admin routes */}
      {!isAdminRoute && <Navbar />}

      <main className="flex-grow">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Exhibition" element={<EXHIBITION />} />
          <Route path="/News" element={<News />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Carrer" element={<Carrer />} />
          <Route path="/Woven" element={<Woven />} />
          <Route path="/PlasticRecycling" element={<PlasticRecycling />} />
          <Route path="/PlasticRecycling/:category" element={<PlasticRecycling />} />
          <Route path="/AboutUs" element={<Aboutus />} />
          <Route path="/TapeExtrusion" element={<TapeExtrusion />} />
          <Route path="/CircularLoom" element={<CircularLoom />} />
          <Route path="/PrintingMachine" element={<PrintingMachine />} />
          <Route path="/WindingMachine" element={<WindingMachine />} />
          <Route path="/ExtrusionCoating" element={<ExtrusionCoating />} />
          <Route path="/WovenSack" element={<WovenSack />} />
          <Route path="/BatteryBox" element={<BatteryBox />} />
          <Route path="/BoxStrapping" element={<BoxStrapping />} />
          <Route path="/Monofilament" element={<Monofilament />} />
          <Route path="/SheetExtrusion" element={<SheetExtrusion />} />
          <Route path="/CastLine" element={<CastLine />} />
          <Route path="/PET" element={<PET />} />
          <Route path="/Flexible" element={<Flexible />} />
          <Route path="/Bag-Conversion" element={<Bag />} />
          <Route path="/BBB" element={<BBB />} />
          <Route path="/oos-form" element={<OOSForm />} />
          <Route path="/iot-services" element={<IOTServices />} />
          <Route path="/spare-part-services" element={<SparePartServices />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path='/admin/dashboard' element={<ProtectedRoute element={<AdminDashboard />} />} />
        </Routes>
      </main>

      {/* Hide Footer on admin routes and PlasticRecycling page */}
      {!isAdminRoute && !isPlasticRecyclingRoute && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        rel="stylesheet"
      />
      <AppLayout />
    </Router>
  );
}

export default App;