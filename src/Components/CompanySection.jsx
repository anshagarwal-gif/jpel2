import React, { useState } from "react";
import ReactGA from "react-ga4";
import styled from "styled-components";
import logorevised from "../assets/JP GROUP LOGO 2024 Revised.jpg"
import { FaDownload } from "react-icons/fa";
import logonewversion from "../assets/logonewversion.jpg"
// Initialize Google Analytics
ReactGA.initialize("G-4G63P3V3DN", { debugMode: true });

const CompanySection = () => {
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
    <StyledWrapper>
      {/* Left Section */}
      <div className="left-section">
        <h1>
          MANUFACTURER AND EXPORTER OF PLASTIC PROCESSING MACHINERY, SINCE 1987
        </h1>

<button class="animated-button">
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
          Founded in 1987, J P Extrusiontech (Pvt) Ltd. manufactures Plastic
          Processing Machinery & Equipment and is situated in one of the
          largest industrial estates of Asia at Ankleshwar in Gujarat State,
          India around 360 kilometers away from Mumbai having state-of-the-art
          manufacturing facilities with a total covered area of 70,000 sq.
          meters equipped with the most modern machine tools.
        </p>
        <p>
          The company is well-managed by a group of professionals and is
          manufacturing extrusion machines and allied equipment for Plastic
          Processing and packaging industry. We offer a wide range of machinery
          in every segment depending upon the need of the end product.
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
        <div className="modal-overlay">
          <div className="modal-content">
           <h2>Download Catalogue</h2>
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
    </StyledWrapper>
  );
};

// Styled-components
const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  font-family: Arial, sans-serif;
  position: relative;

  .left-section {
    flex: 1;
    padding: 20px;

    h1 {
      font-size: 28px;
      font-weight: bold;
      line-height: 1.5;
      margin: 0;
    }
   }

.animated-button {
  position: relative;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 19px 36px;
  border: 4px solid;
  border-color: transparent;
  font-size: 16px;
  background-color: inherit;
  border-radius: 100px;
  font-weight: 600;
  color: black;
  box-shadow: 0 0 0 2px black;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button svg {
  position: absolute;
  width: 24px;
  fill: black;
  z-index: 9;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button .arr-1 {
  right: 16px;
}

.animated-button .arr-2 {
  left: -25%;
}

.animated-button .circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background-color: black;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button .text {
  position: relative;
  z-index: 1;
  transform: translateX(-12px);
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button:hover {
  box-shadow: 0 0 0 12px transparent;
  color: white;
  border-radius: 12px;
}

.animated-button:hover .arr-1 {
  right: -25%;
}

.animated-button:hover .arr-2 {
  left: 16px;
}

.animated-button:hover .text {
  transform: translateX(12px);
}

.animated-button:hover svg {
  fill: white;
}

.animated-button:active {
  scale: 0.95;
  box-shadow: 0 0 0 4px greenyellow;
}

.animated-button:hover .circle {
  width: 220px;
  height: 220px;
  opacity: 1;
}

  }

  .center-section {
    flex: 2;
    padding: 20px;

    h3 {
      font-size: 20px;
      font-weight: bold;
    }

    p {
      margin: 10px 0;
      line-height: 1.5;
    }
  }
.right-section {
  .card {
    position: relative;
    width: 500px; /* Adjusted card size */
    height: 900px;
    background: white;
    border-radius: 30px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    padding: 20px;
  }

  .content {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center logos horizontally */
  justify-content: center; /* Optional: center logos vertically */
  padding: 20px;
  
  
}
    .main-logo {
      width: 390px; /* Adjusted logo size */
      margin-top:30px;
      margin-bottom: 30px;
    }
   

  .download-btn-container {
   display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;    
  margin-top:30px;

    .download-btn {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: black;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      cursor: pointer;

      .download-icon {
        color: white;
        font-size: 30px;
        z-index: 2;
      }

      .signal {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100px;
        height: 100px;
        border: 2px solid rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: pulse 2s infinite;
        z-index: 1;
      }
    }

    .span1 {
      margin-top: 10px;
      font-size: 16px;
      font-weight: bold;
      color: black;
      text-transform: uppercase;
    }
  }
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0;
  }
}


.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  
  z-index: 1000;
}

.modal-content {
 display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;
  width: 900px;
  flex-direction: column;
  gap: 35px;

  border-radius: 8px;
}

@media (max-width: 768px) {
  .modal-content {
    max-width: 90%; /* Use more width on smaller screens */
  }
}

@media (max-width: 480px) {
  .modal-content {
    padding: 20px; /* Less padding on very small screens */
  }
}
/* Modal Header */
.modal-content h2 {
  margin-bottom: 30px;
  text-align: center;
  font-size: 43px;
  font-weight: bold;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Styling for the form */
.modal-content form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  
}

/* Label and Input Styling */
.inputBox {
  position: relative;
  width: 100%;
}

.inputBox input,
.inputBox textarea {
   width: 90%;
  padding: 17px;
  outline: none;
  border: none;
  color: #000;
  font-size: 1em;
  background: transparent;
  border-left: 2px solid #000;
  border-bottom: 2px solid #000;
  transition: 0.1s;
  border-bottom-left-radius: 8px;
}
@media (max-width: 768px) {
  .inputBox input,
  .inputBox textarea {
    padding: 8px; /* Adjust padding for smaller screens */
  }

  .submit-btn,
  .close-btn {
  width: 50%;
    font-size: 14px; /* Reduce font size on smaller screens */
  }
}
.inputBox input:valid~span,
.inputBox input:focus~span,
.inputBox textarea:valid~span,
.inputBox textarea:focus~span {
  transform: translateX(113px) translateY(-15px);
  font-size: 0.8em;
  padding: 7px 15px;
  margin-left: 10px;
  background: #000;
  letter-spacing: 0.2em;
  color: #fff;
}
  .inputBox input:valid,
.inputBox input:focus {
  border: 2px solid #000;
  border-radius: 8px;
}

.uiverse {
 margin-top: 5px;
  position: absolute;
  left: 0;
  transform: translateY(-7px);
  margin-left: 17px;
  padding: 10px;
  pointer-events: none;
  font-size: 12px;
  color: #000;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 3px;
  border-radius: 8px;
}

textarea {
  resize: vertical;
  height: 120px;
}

/* Submit and Close Button Styling */
.submit-btn,
.close-btn {
  height: 45px;
  width: 48%; /* Set width to 48% to keep both buttons on the same line */
  border-radius: 5px;
  border: 2px solid #000;
  cursor: pointer;
  background-color: transparent;
  transition: 0.5s;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 2px;
  margin-top: 10px;
}

.submit-btn {
  background-color: #000;
  color: white;
}

.submit-btn:hover {
  background-color: rgb(0, 0, 0);
}

.close-btn {
  background-color: gray;
  color: white;
}

.close-btn:hover {
  background-color: #555;
}

.submit-btn:focus,
.close-btn:focus {
  outline: none;
}
/* Container for buttons */
.submitbtn-container {
  display: flex;
  gap: 20px; /* Optional: Adjust the gap between the buttons */
  width: 100%; /* Ensure it takes up full width */
}
`;

export default CompanySection;
