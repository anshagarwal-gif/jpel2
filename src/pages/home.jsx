import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Basic Swiper CSS
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import "swiper/css/autoplay"; 
import Banner from '../Components/Banner';
import ProductSection from '../Components/PrroductLine';
import CompanySection from '../Components/CompanySection';
import Rotation from '../Components/SpinningCards';
const Home = () => {
  return (
    <div>
      <Banner/>
      <CompanySection/>
      <img className="ExportSection" alt='ExportSection' src={ require('../assets/ISO.png') } />
       {/* Statistics Section */}
       <div className="export-stats">
        <div className="stat-item">
          <h1>
            37<span className="plus-symbol">+</span>
          </h1>
          <p>COUNTRIES EXPORTED</p>
        </div>
        <div className="divider"></div>
        <div className="stat-item">
          <h1>
            35<span className="plus-symbol">+</span>
          </h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="divider"></div>
        <div className="stat-item">
          <h1>
            6533<span className="plus-symbol">+</span>
          </h1>
          <p>INSTALLATIONS</p>
        </div>
      </div>
      <Rotation/>
     
</div>
  )

}

export default Home;