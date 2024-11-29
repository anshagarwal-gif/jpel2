import React, { useState } from "react";
import ReactGA from "react-ga4";
import styled from "styled-components";

// Initialize Google Analytics
ReactGA.initialize("G-4G63P3V3DN", { debugMode: true });
// Replace with your Measurement ID

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log event to Google Analytics
    ReactGA.event({
      category: "Form",
      action: "Download Catalogue",
      label: "Catalogue Form Submission",
      value: 1, // Optional value for analytics
    });

    alert("Form Submitted Successfully!");
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
              src="./assets/logo-red.png"
              alt="JP Logo"
              className="main-logo"
            />
            <p>SINCE 1987</p>
            <button className="download-btn" onClick={handleOpenModal}>
              ⬇ DOWNLOAD CATALOGUE
            </button>
          </div>
        </div>
      </div>

       {/* Modal */}
       {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Download Catalogue</h2>
            <form onSubmit={handleSubmit}>
              <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required /></label>
              <label>Company Name: <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required /></label>
              <label>Email: <input type="email" name="email" value={formData.email} onChange={handleChange} required /></label>
              <label>Contact Number: <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required /></label>
              <label>City: <input type="text" name="city" value={formData.city} onChange={handleChange} required /></label>
              <label>State: <input type="text" name="state" value={formData.state} onChange={handleChange} required /></label>
              <label>Country: <input type="text" name="country" value={formData.country} onChange={handleChange} required /></label>
              <label>Message: <textarea name="message" value={formData.message} onChange={handleChange} required /></label>
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
    flex: 1;
    padding: 20px;
    text-align: center;

    .card {
      position: relative;
      width: 600px; /* Increased width */
      height: 700px; /* Increased height */
      border-radius: 14px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;

      .bg {
        position: absolute;
        top: 10px;
        left: 10px;
        width: 500px; /* Adjusted to match the larger card */
        height: 580px; /* Adjusted to match the larger card */
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(24px);
        border-radius: 10px;
        overflow: hidden;
        outline: 1px solid white; /* Thinner outline */
        z-index: 1;
      }

      .blob {
        position: absolute;
        z-index: 0;
        top: 50%;
        left: 50%;
        width: 50px; /* Adjusted to fit larger card */
        height: 220px; /* Adjusted to fit larger card */
        border-radius: 50;
        background-color: #ff0000;
        opacity: 1;
        filter: blur(12px);
        animation: blob-bounce 5s infinite ease;
      }

      .content {
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;

        .main-logo {
          width: 200px; /* Increased logo size */
          margin-bottom: 10px;
        }

        p {
          margin-bottom: 20px;
          font-weight: bold;
        }

        .download-btn {
          padding: 15px 30px; /* Larger button size */
          background-color: #f2f2f2;
          border: 1px solid #ccc; /* Thinner border */
          font-size: 18px; /* Larger font size */
          cursor: pointer;
          font-weight: bold;
          text-transform: uppercase;

          &:hover {
            background-color: #d8d8d8;
          }
        }
      }
    }
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;

    h2 {
      margin-bottom: 20px;
    }

    form {
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 10px;
      }

      input {
        margin-top: 5px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      .submit-btn {
        padding: 10px;
        background-color: black;
        color: white;
        border: none;
        margin-top: 10px;
        cursor: pointer;
        text-transform: uppercase;

        &:hover {
          background-color: #444;
        }
      }

      .close-btn {
        margin-top: 10px;
        padding: 10px;
        background-color: #ccc;
        border: none;
        cursor: pointer;
        text-transform: uppercase;

        &:hover {
          background-color: #999;
        }
      }
    }
  }
.blob {
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  width: 10px; /* Thinner width */
  height: 250px; /* Taller height */
  border-radius: 50px; /* Elongated border radius */
  background: linear-gradient(to bottom, #ff0000, transparent); /* Gradient for fading */
  opacity: 1;
  filter: blur(6px); /* Slight blur for smoothness */
  animation: blob-slide 5s infinite ease;
}

@keyframes blob-slide {
  0% {
    transform: translate(-50%, -50%) scaleY(1);
  }
  50% {
    transform: translate(-50%, -60%) scaleY(1.2); /* Slight stretch vertically */
  }
  100% {
    transform: translate(-50%, -50%) scaleY(1);
  }
}

`;


export default CompanySection;
