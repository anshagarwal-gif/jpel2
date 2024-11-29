import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css/pagination'; // Pagination styles
import './Banner.css';
// Import image
import image1 from '../assets/2.PNG';
import image2 from '../assets/3.PNG';
import image3 from '../assets/4.png';
import image4 from '../assets/5.png';
import image5 from '../assets/6.png';
import image6 from '../assets/7.png';
import image7 from '../assets/8.png';
import image8 from '../assets/9.png';
import image9 from '../assets/10.png';
import image10 from '../assets/0.png';
import image11 from '../assets/200.png';
const Banner = () => {
  return (
    <section className="banner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Register modules here
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        effect="slide"
      >
        <SwiperSlide>
          <div
            className="banner-slide"
            style={{
              backgroundImage: `url(${image1})`,
            }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="banner-slide"
            style={{
              backgroundImage: `url(${image2})`,
            }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="banner-slide"
            style={{
              backgroundImage: `url(${image3})`,
            }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="banner-slide"
            style={{
              backgroundImage: `url(${image4})`,
            }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="banner-slide"
            style={{
              backgroundImage: `url(${image5})`,
            }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="banner-slide"
            style={{
              backgroundImage: `url(${image6})`,
            }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="banner-slide"
            style={{
              backgroundImage: `url(${image7})`,
            }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="banner-slide"
            style={{
              backgroundImage: `url(${image8})`,
            }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="banner-slide"
            style={{
              backgroundImage: `url(${image9})`,
            }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="banner-slide"
            style={{
              backgroundImage: `url(${image10})`,
            }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="banner-slide"
            style={{
              backgroundImage: `url(${image11})`,
            }}
          >
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default Banner;
