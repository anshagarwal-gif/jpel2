import React from "react";
import { Helmet } from 'react-helmet-async';
import "./Service.css"
import Card from '../../Components/ServiceCard';
import OOSButton from '../../Components/OOSButton';
import header from "../Services/Assets/header.jpg";

const Service = () => {
    return(
<div>
<Helmet>
  <title>Products & Services | JP Extrusiontech</title>
  <meta name="description" content="Complete product line and after-sales services from JP Extrusiontech — spare parts, IoT monitoring, OOS repair support, and process consulting." />
</Helmet>
<div className="imageContainer2">
        <img   alt="header"
          src={header}
        />
      </div>

<div className="service-content">
<p>J P Group provides comprehensive solutions for spare parts related to all its machinery and equipment. We maintain a sufficient inventory of critical and routine maintenance spares and consumables necessary to ensure optimal performance and minimal downtime for our customers.
</p>
<p>Our spare parts are both genuine and cost-effective, catering to your budget while guaranteeing thorough quality inspections.</p>
</div>
<OOSButton />
<div className="service-card">
<Card email="spares@jpel.in" phone="+91 9909047166" theme="spare parts" />
</div>



</div>

    );

};
export default Service;