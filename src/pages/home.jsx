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
import CoperateFilm from '../Components/CoperateFilm/CoperateFilm';
import BannerGIF from '../Components/BannerGIF/BannerGIF';
import OOSButton from '../Components/OOSButton';
import OOSForm from '../Components/OOSForm';
import ServicesShowcase from '../Components/ServicesShowcase';

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
      <BannerGIF/>
      {/* <ScrollReveal  baseOpacity={0}
  enableBlur={true}
  baseRotation={1}
  blurStrength={10}>
  J P Extrusiontech Pvt. Ltd.stands at the forefront of innovation, proudly leading the way in the
          manufacturing and export of high-quality plastic processing machinery
          and equipment. Our commitment to excellence ensures that we deliver
          cutting-edge solutions that empower industries and enhance
          productivity. Join us in shaping the future of plastic processing!
  </ScrollReveal> */}
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
    <ServicesShowcase/>
    <div className='CoperateFilm'>
      <CoperateFilm
    thumbnailUrl={require("../Components/CoperateFilm/Assets/cop.jpg")}
    videoUrl="https://www.youtube.com/embed/3qPc2eCi_lg?autohide=1&autoplay=0&mute=0&controls=1&fs=1&loop=1&modestbranding=1&playlist=3qPc2eCi_lg&rel=0&showinfo=1&theme=light&wmode=&playsinline=0"/>

</div>

</div>
  )

}

export default Home;