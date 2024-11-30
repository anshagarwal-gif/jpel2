import React, { useState } from "react";
import ReactGA from "react-ga4";
import styled from "styled-components";
import logorevised from "../assets/JP GROUP LOGO 2024 Revised.jpg"
import { FaDownload } from "react-icons/fa";
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
        <button className="about-btn">ABOUT COMPANY</button>
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
          <div className="bg" />
          <div className="blob" />
          <div className="content">
            <img
              src={logorevised }
              alt="JP Logo"
              className="main-logo"
            />
            <p>SINCE 1987</p>
            <div className="download-btn-container">
            <button className="download-btn" onClick={handleOpenModal}>
           
                <FaDownload className="download-icon" />
                <div className="signal" />
              
              
            </button>
            <span>DOWNLOAD CATALOGUE</span>
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
              <label>Name: 
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>Company Name: 
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>Email: 
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>Contact Number: 
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>City: 
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>State: 
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>Country: 
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>Message: 
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>
              <button type="submit" className="submit-btn">Submit</button>
              <button type="button" className="close-btn" onClick={handleCloseModal}>Close</button>
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

    .about-btn {
      padding: 12px 24px;
      border: 1px solid black;
      background-color: white;
      cursor: pointer;
      font-weight: bold;
      text-transform: uppercase;
      margin-top: 20px;

      &:hover {
        background-color: black;
        color: white;
      }
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
    width: 400px; /* Adjusted card size */
    height: 700px;
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
    align-items: center;

    .main-logo {
      width: 370px; /* Adjusted logo size */
      margin-bottom: 10px;
    }

    p {
      font-size: 18px;
      font-weight: bold;
    }
  }

  .download-btn-container {
   display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;    

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

    span {
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

  .modal-content {
    background: white;
    padding: 40px;
    border-radius: 15px;
    max-width: 500px; /* Increased modal size for larger screens */
    width: 100%;

    h2 {
      margin-bottom: 30px;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
    }

    form {
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 20px;
        font-size: 16px;
      }

      input,
      textarea {
        width: 100%;
        padding: 12px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }

      .submit-btn {
        margin-top: 30px;
        padding: 15px;
        background: black;
        color: white;
        border: none;
        cursor: pointer;
        font-weight: bold;
        font-size: 16px;
        text-transform: uppercase;
        border-radius: 5px;
      }

      .close-btn {
        margin-top: 10px;
        padding: 15px;
        background: gray;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 16px;
        text-transform: uppercase;
        border-radius: 5px;
      }
    }
  }
}

`;

export default CompanySection;
