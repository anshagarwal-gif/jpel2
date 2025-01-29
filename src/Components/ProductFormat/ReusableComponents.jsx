import React, { useState, useEffect } from 'react';
import './ReusableComponents.css';

// Navigation Component
export const Navigation = ({ tabs, activeTab, onTabChange }) => (
  <div className="tab-navigation">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => onTabChange(tab)}
        className={`tab-button ${activeTab === tab ? 'active' : ''}`}
      >
        {tab}
      </button>
    ))}
  </div>
);

// Product Image Component
export const ProductImage = ({ image, description }) => (
  <div>
    <img src={image} alt="Product" className="product-image" />
    {description && <p className="product-description">{description}</p>}
   
  </div>
);

// Specifications Table Component
export const SpecsTable = ({ headers, rows }) => (
  <table className="specs-table">
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, index) => (
        <tr key={index}>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex}>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

// Applications Slideshow Component
export const ApplicationsSlideshow = ({ images, interval = 2500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="applications-slideshow">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`slideshow-image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

// Applications Component
export const Applications = ({ title, images, points }) => (
  <div className="applications">
    <h2>{title}</h2>
    <div className="applications-content">
      <ApplicationsSlideshow images={images} />
      <ul className="applications-list">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  </div>
);

// Download Catalogue Component
const DownloadCatalogueModal = ({ onClose, activeTab, tabContent }) => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    contactNo: '',
    city: '',
    state: '',
    country: '',
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const currentTab = tabContent[activeTab]; // Get the current tab conten
    const emailData = {
      user: formData,
      catalogue: currentTab.catalogue,
      tabName: activeTab,
    };
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
    try {
      // Send email using backend API
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        alert('Catalogue has been sent to your email!');
      } else {
        alert('Failed to send catalogue. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
    onClose();
  };
  const handleBackdropClick = (e) => {
    if (e.target.className === 'download-catalogue-modal') {
      onClose();
    }
  };

  return (
    <div
    className="download-catalogue-modal"
    onClick={handleBackdropClick} // Close on outside click
  >
    <div className="download-catalogue-modal-content">
      <h2>Download Catalogue</h2>
      <p>Please provide the below credentials to get our Catalogue emailed.</p>
      <div className="download-catalogue-modal-form">
        
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}

        /> 
        <input
          name="companyName"
          label="Company Name"
          value={formData.companyName}
          onChange={handleInputChange}
        />
        <input
          name="email"
          label="Email ID"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          name="contactNo"
          label="Contact No"
          value={formData.contactNo}
          onChange={handleInputChange}
        />
        <input
          name="city"
          label="City"
          value={formData.city}
          onChange={handleInputChange}
        />
        <input
          name="state"
          label="State"
          value={formData.state}
          onChange={handleInputChange}
        />
        <input
          name="country"
          label="Country"
          value={formData.country}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
    </div>
  );
};

export const ProductWithDownloadCatalogue = ({ image, description, tabId, tabContent }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="product-with-download-catalogue">
      <ProductImage image={image} description={description} />
      <button
        className="download-catalogue-button"
        onClick={() => setShowModal(true)}
      >
        <img src="/api/placeholder/24/24" alt="Download" />
        Download Catalogue
      </button>
      {showModal && (
        <div className="download-catalogue-modal">
           <DownloadCatalogueModal
          onClose={() => setShowModal(false)}
          activeTab={tabId}
          tabContent={tabContent}
        />
        </div>
      )}
    </div>
  );
};

