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
const handleOverlayClick = (e) => {
  if (e.target.className === "modal-overlay") {
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
        <div className="modal-overlay" onClick={(e) => handleOverlayClick(e)}>
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
    margin-top:30px;

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
  top:10%;
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
      font-size: 28px;
      font-weight: bold;
    }

    p {
      margin: 10px 0;
      line-height: 1.5;
      font-size:18px;
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
  overflow: hidden; /* Prevent extra scrolling */
}
.modal-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 35px;
  padding: 20px;
  max-width: 90vw; /* Ensures it fits the viewport width */
  max-height: 90vh; /* Ensures it fits the viewport height */
  width: 900px;
  min-height: 350px;
  border-radius: 8px;
  background: #fff; /* Add a background color */
  overflow: auto; /* Enable scrolling if content exceeds available space */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Optional: Add a subtle shadow */
}
@media (max-width: 768px) {
  .modal-content {
    max-width: 95vw; /* Further limit width on smaller screens */
    max-height: 90vh; /* Maintain responsiveness for height */
  }
}
@media (max-width: 480px) {
  .modal-content {
    padding: 15px; /* Adjust padding for very small screens */
  }
}
/* Modal Header */
.modal-content h2 {
  margin-bottom: 5px;
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
  width: 90%;
  
  
}

.inputBox {
  position: relative;
  width: 100%;
}
.inputBox input,
.inputBox textarea {
  width: 90%;
  padding: 7px;
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

.inputBox .uiverse {
  position: absolute;
  top: 5%; /* Position label vertically in the middle */
  left: 17px; /* Adjust for consistent horizontal alignment */
  transform: translateY(-50%); /* Center vertically */
  pointer-events: none;
  font-size: 8px;
  color: #000;
  text-transform: uppercase;
  transition: 0.3s; /* Smooth transition for animation */
  letter-spacing: 3px;
  background: transparent;
  padding: 0 5px; /* Optional: Add a small padding for aesthetics */
}

/* Ensure input and button elements also scale well */
.inputBox input,
.inputBox textarea {
  width: calc(100% - 20px); /* Adjust width to account for padding */
}
  .submit-btn,
  .close-btn {
  width: 50%;
    font-size: 14px; /* Reduce font size on smaller screens */
  }
}
.inputBox input:focus ~ .uiverse,
.inputBox textarea:focus ~ .uiverse,
.inputBox input:valid ~ .uiverse,
.inputBox textarea:valid ~ .uiverse {
  bottom: -15px; /* Move the label above the field */
  left: 10px; /* Optional: Adjust horizontal alignment */
  font-size: 0.8em;
  background: #fff; /* Add background to prevent overlap */
  padding: 0 5px; /* Match the padding */
  color: #000; /* Change color for better contrast */
}
  .inputBox input:valid,
.inputBox input:focus {
  border: 2px solid #000;
  border-radius: 8px;
}

.uiverse {

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

/* Textarea-specific adjustments */
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
  .submit-btn,
.close-btn {
  height: 45px;
  width: 100%; /* Ensure buttons span full width in narrow spaces */
  max-width: 48%; /* Keep them side-by-side when space allows */
}
.submitbtn-container {
  flex-wrap: wrap; /* Allow buttons to wrap on smaller screens */
  justify-content: space-between;
}
`;

export default CompanySection;
