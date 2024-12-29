import React  from "react";  

import "../ContactUs/ContactUs.css"


const ContactUs = () => {

    const cards = [
        {
          title: "Sales & Marketing",
          email: "Send us an email",
          phone: "+91 94268 13311",
        },
        {
          title: "Customer Services",
          email: "Send us an email",
          phone: "+91 94268 13312",
        },
        {
          title: "Spares Parts",
          email: "Send us an email",
          phone: "+91 94268 13313",
        },
      ];

    return(
        
        <div>
       {/* First Image and Title */}
      <div className="imageContainer1">
        <img
          className="ExportSection"
          alt="ExportSection"
          src={require('../ContactUs/Assets/image1.jpg')}
        />
      </div>
      <div className="contact-section">
      <div className="contact-item">
        <div className="icon">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <h3>CORPORATE OFFICE</h3>
        <p>
          C1B – 1034 to 1037 GIDC Industrial Estate, Ankleshwar – 393 002, Gujarat –
          India.
        </p>
        <a href="https://www.google.com/maps/place/JP+Group+(Corporate+Office)/@21.6118605,73.0224954,17z/data=!4m5!3m4!1s0x0:0x66aa819d46194ae1!8m2!3d21.6124891!4d73.0222207" target="_blank" rel="noopener noreferrer">
          VIEW ON GOOGLE MAP
        </a>
      </div>

      <div className="contact-item">
        <div className="icon">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <h3>WORKS</h3>
        <p>
          1701, G.I.D.C. Industrial Estate, Ankleshwar – 393 002, Dist. Bharuch,
          Gujarat, India.
        </p>
        <a href="https://www.google.com/maps/place/J+P+Extrusiontech+Pvt.+Limited+(Formerly+:+J+P+Industries)/@21.6133834,73.0271046,19z/data=!4m5!3m4!1s0x0:0x74a554e17735ace7!8m2!3d21.6138041!4d73.026993" target="_blank" rel="noopener noreferrer">
          VIEW ON GOOGLE MAP
        </a>
      </div>

      <div className="contact-item">
        <div className="icon">
          <i className="fas fa-headset"></i>
        </div>
        <h3>LET'S TALK</h3>
        <p>+91 99090 47164</p>
        <p>+91 99242 02307</p>
      </div>

      <div className="contact-item">
        <div className="icon">
          <i className="fas fa-envelope"></i>
        </div>
        <h3>E-MAIL US</h3>
        <p>info@jpel.in</p>
        <p>services@jpel.in</p>
        <p>spares@jpel.in</p>
      </div>
    </div>
    <div className="cards-container">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="icon-container">
            <i className="fas fa-info-circle"></i>
          </div>
          <h3>{card.title}:</h3>
          <a href={`mailto:${card.email.replace(/\s+/g, "").toLowerCase()}@example.com`}>
            {card.email}
          </a>
          <p className="phone-number">{card.phone}</p>
        </div>
      ))}
    </div>





        </div>


    )
}
export default ContactUs;