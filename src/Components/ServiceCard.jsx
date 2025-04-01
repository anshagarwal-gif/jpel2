import React from 'react';
import './ServiceCard.css';
import { FaInfoCircle } from 'react-icons/fa';
import logoImage from "../assets/2.jpg"
const ServiceCard = ({ email, phone,theme }) => {
  return (
    <div className="cardService">
      <div className="border"></div>
      <div className="content">
        <div className="logo">
          <div className="logo1">
            <FaInfoCircle id="fab-icon" />
          </div>
          <div className="logo2">
          <img src={logoImage} alt="Connect with us" id="custom-logo" />
            <svg
              viewBox="0 0 101.014 23.535"
              xmlns="http://www.w3.org/2000/svg"
              id="logo-second"
            >
              <g transform="translate(-1029.734 -528.273)">
                <path
                  transform="translate(931.023 527.979)"
                  d="M109.133,14.214l3.248-11.706A1.8,1.8,0,0,1,114.114,1.2h2.229a1.789,1.789,0,0,1,1.7,2.358L111.884,21.71a1.8,1.8,0,0,1-1.7,1.216h-3a1.8,1.8,0,0,1-1.7-1.216L99.317,3.554a1.789,1.789,0,0,1,1.7-2.358h2.229a1.8,1.8,0,0,1,1.734,1.312l3.248,11.706a.468.468,0,0,0,.9,0Z"
                  data-name="Path 1"
                  id="Path_1"
                ></path>
                <path
                  transform="translate(888.72 528.773)"
                  d="M173.783,22.535a10.77,10.77,0,0,1-7.831-2.933,10.387,10.387,0,0,1-3.021-7.813v-.562A13.067,13.067,0,0,1,164.2,5.372,9.315,9.315,0,0,1,167.81,1.4,10.176,10.176,0,0,1,173.136,0,9.105,9.105,0,0,1,180.2,2.812q2.576,2.812,2.577,7.973v.583a1.793,1.793,0,0,1-1.8,1.787H169.407a.466.466,0,0,0-.457.564,5.08,5.08,0,0,0,5.217,4.136A6.594,6.594,0,0,0,178.25,16.6a1.817,1.817,0,0,1,2.448.218l.557.62a1.771,1.771,0,0,1-.1,2.488,9.261,9.261,0,0,1-2.4,1.57,11.732,11.732,0,0,1-4.972,1.034ZM173.115,4.68A3.66,3.66,0,0,0,170.3,5.85,6.04,6.04,0,0,0,168.911,9.2h8.125V8.735a4.305,4.305,0,0,0-1.051-3,3.781,3.781,0,0,0-2.87-1.059Z"
                  data-name="Path 2"
                  id="Path_2"
                ></path>
              </g>
            </svg>
          </div>
          <span className="trail"></span>
        </div>
        <div className="contact-info">
          <a href={`mailto:${email}`} className="email">
            Send us an email
          </a>
          <a href={`tel:${phone}`} className="phone">
            {phone}
          </a>
        </div>
      </div>
      <span className="bottom-text">{theme}</span>
    </div>
  );
};

export default ServiceCard;
