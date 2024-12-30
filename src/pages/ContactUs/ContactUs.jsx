import React  from "react";  

import "../ContactUs/ContactUs.css"
import Card from '../../Components/ServiceCard';
import HoverCard from "../../Components/HoverCard";

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
        <a href="tel:+919909047164">+91 99090 47164</a>
  <a href="tel:+919924202307">+91 99242 02307</a>
      </div>

      <div className="contact-item">
        <div className="icon">
          <i className="fas fa-envelope"></i>
        </div>
        <h3>E-MAIL US</h3>
        <a href="mailto:info@jpel.in">info@jpel.in</a>
  <a href="mailto:services@jpel.in">services@jpel.in</a>
  <a href="mailto:spares@jpel.in">spares@jpel.in</a>
      </div>
    </div>
    <div className="cards-container">
      
   

    <Card email="info@jpel.in" phone="+91 9426813311" theme="Sales & Marketing"/>
    <Card email="services@jpel.in" phone="+91 9924131008" theme="Customer Services" />
    <Card email="spares@jpel.in" phone="+91 9909047116" theme="Spare Parts" />
    </div>
<h4 className="network">OUR NETWORK</h4>
    <div className="hover-card-container">
      <HoverCard 
        title="Ankleshwar"
        subtitle="Corporate Office, C1B - 1034 to 1037 GIDC Industrial Estate, Ankleshwar, Gujarat - 393002. " 
        phone1= "+91 9909047164"
        phone2="+91 9924202307"
        emails={["info@jpel.in,", "export@jpel.in,", "sales@jpel.in"]} 
        
      />
      <HoverCard 
        title="Ahmedabad" 
        subtitle="606/607, Aaron Spectra, Rajpath Rangoli Rd, behind Rajpath club, Bodakdev, Ahmedabad, Gujarat 380054."
        linkText="Learn More" 
        phone1="+91 9924823700"
        emails={["marketing@jpel.in"]  }
        linkUrl="https://anotherexample.com" 
      />
      <HoverCard 
        title="MUMBAI" 
        subtitle="A-34, Virwani Industrial Estate, Western Express Highway, Goregaon (E) Mumbai – 400 063"
        linkText="Learn More" 
        phone1="+91 2261363900"
        emails={["mumbai@jpel.in"]  }
        linkUrl="https://anotherexample.com" 
      />
      <HoverCard 
        title="KOLKATA" 
        subtitle="23 Gangadhar Babu Lane, 1B Imex Lohia, Kolkata - 700 012."
        linkText="Learn More" 
        phone1="+91 3322706740"
        phone2="+91 9830170833"
        phone3="+91 3325799434"
        emails={["kolkata@jpel.in"]  }
        linkUrl="https://anotherexample.com" 
      />
      <HoverCard 
        title="DELHI" 
        subtitle=""
        linkText="" 
        phone1="+91 9426813311"
        phone2="+91 7203034171"
        emails={["delhi@jpel.in"]  }
        linkUrl="https://anotherexample.com" 
      />
       <HoverCard 
        title="SOUTH INDIA" 
        subtitle=""
        linkText="" 
        phone1="+91 9620678479"
        emails={["south@jpel.in"]  }
        linkUrl="https://anotherexample.com" 
      />
      <HoverCard 
        title="INDORE" 
        subtitle=""
        linkText="" 
        phone1="+91 9826915344"
        emails={["indore@jpel.in"]  }
        linkUrl="https://anotherexample.com" 
      />
       <HoverCard 
        title="OVERSEAS-RUSSIA" 
        subtitle="AVK-Polymer Group
Moscow region 141402, Khimki, Spartakovskaya Street House 5/7, Entrance 4, Office 8 Russia."
        linkText="" 
        phone1="+7 9267178402"
        phone2="+7 4959337907"
        emails={["vit@avk-polymer.ru"]  }
        linkUrl="https://anotherexample.com" 
      />
    </div>
    


        </div>


    )
}
export default ContactUs;