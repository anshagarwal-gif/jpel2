import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Basic Swiper CSS
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import "swiper/css/autoplay"; 
import Banner from '../Components/Banner';
import ProductSection from '../Components/PrroductLine';
import CompanySection from '../Components/CompanySection';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Homepageanimation from '../Components/Homepageanimation';

import MachineRange from '../Components/MachineRange';
const Home = () => {
   // Initialize AOS
   useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (1 second)
      easing: 'ease-in-out', // Easing function
      once: true, // Only trigger animation once when scrolling
    });
  }, []);
  return (
    <div>
      <Banner data-aos="fade-left" />
      <Homepageanimation/>
      <CompanySection data-aos="fade-right" />
      <img className="ExportSection" alt='ExportSection' src={ require('../assets/ISO.png') } />
       {/* Statistics Section */}
       <div className="export-stats" data-aos="fade-right"  >
        <div className="stat-item">
          <h1>
            44<span className="plus-symbol">+</span>
          </h1>
          <p>COUNTRIES EXPORTED</p>
        </div>
        <div className="divider"></div>
        <div className="stat-item">
          <h1>
            38<span className="plus-symbol">+</span>
          </h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="divider"></div>
        <div className="stat-item">
          <h1>
            7500<span className="plus-symbol">+</span>
          </h1>
          <p>INSTALLATIONS</p>
        </div>
      </div>
      {/* <Rotation data-aos="fade-left" /> */}
      
    <MachineRange/>

     
</div>
  )

}

export default Home;