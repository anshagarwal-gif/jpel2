import React, { useState } from "react";
import ReactGA from "react-ga4";
import styled from "styled-components";
import logorevised from "../assets/JP GROUP LOGO 2024 Revised.jpg"
import { FaDownload } from "react-icons/fa";
import logonewversion from "../assets/logonewversion.jpg"
import "../Components/CompanySection.css"
import { useNavigate } from "react-router-dom";





// Initialize Google Analytics
ReactGA.initialize("G-4G63P3V3DN", { debugMode: true });

const CompanySection = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    contactNumber: "",
    city: "",
    state: "",
    country: "",
    message: "",
  });
  
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
const handleOverlayClick = (e) => {
  if (e.target.className === "modal-overlay2") {
    handleCloseModal();
  }
};
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Fetch the user's IP address
    let visitorIP = "";
    try {
      const Response = await fetch("https://api.ipify.org?format=json");
      const Data = await Response.json();
      visitorIP = Data.ip; // Extract IP address
    } catch (error) {
      console.error("Error fetching IP:", error);
    }
  
    // Get the current URL and extract the text of the end URL
    const currentURL = window.location.href;
    const endText = currentURL.split("/").pop(); // Get the last part of the URL
  
    const extendedFormData = {
      ...formData,
      endText,
      currentURL,
      
      visitorIP
    };
  
    console.log("Form Data with IP and URL: ", extendedFormData);
  
    // Log the event to Google Analytics
    ReactGA.event({
      category: "Form",
      action: "Download Catalogue",
      label: "Catalogue Form Submission",
      value: 1,
    });
  
    // Send form data to the backend
    fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(extendedFormData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Form submitted successfully and email sent!");
        } else {
          alert("Failed to send email. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("An error occurred. Please try again.");
      });
  
    // Reset form fields
    setFormData({
      name: "",
      companyName: "",
      email: "",
      contactNumber: "",
      city: "",
      state: "",
      country: "",
      message: "",
    });
    setModalOpen(false);
  };

  return (
    <div className="styled-wrapper">
      {/* Left Section */}
      <div className="left-section">
        <h1>
          MANUFACTURER AND EXPORTER OF PLASTIC PROCESSING MACHINERY, SINCE 1987
        </h1>

<button class="animated-button" onClick={() => navigate("/AboutUs")}>
  <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span class="text">About Company</span>
  <span class="circle"></span>
  <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
</button>

      </div>

      {/* Center Section */}
      <div className="center-section">
        <h3>ABOUT J P EXTRUSIONTECH</h3>
        <p>
        Established in 1987, J P Extrusiontech Pvt. Ltd. has been at the forefront of manufacturing and exporting world-class plastic processing machinery and equipment. Located in Ankleshwar, Gujarat—one of Asia’s largest and most prominent industrial hubs—the company benefits from its strategic proximity to Mumbai, just 360 kilometers away. With a sprawling manufacturing facility covering 70,000 square meters, equipped with cutting-edge machine tools and advanced technology, we deliver precision-engineered solutions to meet global industry standards.
        </p>
        <p>
        For over three decades, J P Extrusiontech has built a reputation for excellence by delivering innovative and reliable machinery. Our state-of-the-art production processes, backed by a team of skilled professionals, ensure we stay ahead of the evolving demands in the plastic processing and packaging industries. Our commitment to quality and customer satisfaction drives us to continually improve and expand our product offerings.
        </p>
        <p>
        We specialize in the design and manufacture of extrusion machines and auxiliary equipment, offering a comprehensive range of solutions tailored to the specific requirements of our clients. Whether you need machinery for film extrusion, pipe and profile production, or advanced packaging solutions, J P Extrusiontech provides end-to-end support to meet your operational goals.


        </p>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="card">
          <div className="content">
          <img
              src={logonewversion }
              alt="JP Logo"
              className="main-logo"
            />
            <img
              src={logorevised }
              alt="JP Logo"
              className="main-logo"
            />
            <div className="download-btn-container">
            <button className="download-btn" onClick={handleOpenModal}>
           
                <FaDownload className="download-icon" />
                <div className="signal" />
              
              
            </button>
            <span className="span1">DOWNLOAD CATALOGUE</span>
              </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay2" onClick={(e) => handleOverlayClick(e)}>
          <div className="modal-content2">
           <h2>Download Catalogue</h2>
           <h4>Please provide the below credentials to get our Catalogue emailed.</h4>
       <form onSubmit={handleSubmit}>
   <div className="inputBox">
       <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <span className="uiverse">Name</span>
    </div>
    
    <div className="inputBox">
      <input
        type="text"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        required
      />
      <span className="uiverse">Company Name</span>
    </div>
    
    <div className="inputBox">
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <span className="uiverse">Email</span>
    </div>
    
    <div className="inputBox">
      <input
        type="tel"
        name="contactNumber"
        value={formData.contactNumber}
        onChange={handleChange}
        required
      />
      <span className="uiverse">Contact Number</span>
    </div>
    
    <div className="inputBox">
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        required
      />
      <span className="uiverse">City</span>
    </div>

    <div className="inputBox">
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleChange}
        required
      />
      <span className="uiverse">State</span>
    </div>

    <div className="inputBox">
      <input
        type="text"
        name="country"
        value={formData.country}
        onChange={handleChange}
        required
      />
      <span className="uiverse">Country</span>
    </div>
    

    <div className="inputBox">
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <span className="uiverse">Message</span>
    </div>
<div className="submitbtn-container">
    <button type="submit" className="submit-btn">Submit</button>
    <button type="button" className="close-btn" onClick={handleCloseModal}>Close</button>
    </div>
  </form>
</div>
 </div>
      )}
    </div>
  );
};


export default CompanySection;
