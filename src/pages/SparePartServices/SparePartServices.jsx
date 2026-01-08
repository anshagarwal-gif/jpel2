import React from "react"; 
import "./SparePartServices.css"
import Card from '../../Components/ServiceCard';
import OOSButton from '../../Components/OOSButton';
import header from "../Services/Assets/header.jpg";

const SparePartServices = () => {
    return(
<div>
<div className="imageContainer2">
        <img   alt="header"
          src={header}
        />
      </div>

<div className="spare-content">
<h2 className="spare-title">Spare Part Services</h2>
<p>J P Group provides comprehensive solutions for spare parts related to all its machinery and equipment. We maintain a sufficient inventory of critical and routine maintenance spares and consumables necessary to ensure optimal performance and minimal downtime for our customers.
</p>
<p>Our spare parts are both genuine and cost-effective, catering to your budget while guaranteeing thorough quality inspections.</p>

<div className="spare-features">
  <div className="feature-item">
    <h3>Genuine Parts</h3>
    <p>All spare parts are genuine and manufactured to the highest quality standards.</p>
  </div>
  <div className="feature-item">
    <h3>Quick Delivery</h3>
    <p>Fast and reliable delivery to minimize your machine downtime.</p>
  </div>
  <div className="feature-item">
    <h3>Technical Support</h3>
    <p>Expert technical assistance for part identification and installation guidance.</p>
  </div>
  <div className="feature-item">
    <h3>Cost-Effective</h3>
    <p>Competitive pricing without compromising on quality and reliability.</p>
  </div>
</div>

</div>

<div className="service-card">
<Card email="spares@jpel.in" phone="+91 9909047166" theme="spare parts" />
</div>

<OOSButton />

</div>

    );

};
export default SparePartServices;