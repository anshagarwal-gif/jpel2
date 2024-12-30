import React from "react"; 
import "./Service.css"
import Card from '../../Components/ServiceCard';
import header from "../Services/Assets/header.jpg";
const Service = () => {
    return(
<div>
<div className="imageContainer2">
        <img   alt="header"
          src={header}
        />
      </div>


<div className="service-content">
<p>J P Group provides comprehensive solutions for spare parts related to all its machinery and equipment. We maintain a sufficient inventory of critical and routine maintenance spares and consumables necessary to ensure optimal performance and minimal downtime for our customers.
</p>
<p>Our spare parts are both genuine and cost-effective, catering to your budget while guaranteeing thorough quality inspections. Each spare part in our catalog is clearly identified with its corresponding part code.
</p>
<p>Stay tuned for the upcoming launch of our Online Order System (OOS) for spare parts on this page, where you will be able to plan, prepare, and order all necessary spares online. In the meantime, please reach out to our service team for any spare part requirements you may have.</p>

</div>
<div className="service-card">
<Card email="spares@jpel.in" phone="+91 9909047166" theme="spare parts" />
</div>

</div>


    );

};
export default Service; 