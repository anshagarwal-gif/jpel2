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
export const ProductImage = ({ image, images, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Check if we have multiple images
  const hasMultipleImages = Array.isArray(images) && images.length > 1;

  useEffect(() => {
    if (hasMultipleImages) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(timer);
    }
  }, [hasMultipleImages, images]);

  if (hasMultipleImages) {
    return (
      <div className="product-slideshow-container">
        <div className="product-slideshow">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product ${index + 1}`}
              className={`product-slide ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        {description && <p className="product-description">{description}</p>}
      </div>
    );
  }

  // Render single image if no multiple images provided
  return (
    <div>
      <img src={image} className="product-image" />
      {description && <p className="product-description">{description}</p>}
    </div>
  );
};

// Specifications Table Component
export const SpecsTable = ({ headers, rows }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  // Function to handle viewport changes
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 480);
    setIsTablet(window.innerWidth <= 768 && window.innerWidth > 480);
  };

  // Set up resize listener
  useEffect(() => {
    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // For very small screens, render a card-style layout
  if (isMobile) {
    return (
      <div className="specs-table-mobile">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="specs-card">
            {headers.map((header, headerIndex) => (
              <div key={headerIndex} className="specs-card-item">
                <div className="specs-card-header">{header}</div>
                <div className="specs-card-value">{row[headerIndex]}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  
  // For tablets and larger screens, use a responsive table
  return (
    <div className="specs-table-container">
      <table className={`specs-table ${isTablet ? 'tablet' : ''}`}>
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
    </div>
  );
};
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
    contactNumber: '',
    city: '',
    state: '',
    country: '',
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const currentTab = tabContent[activeTab]; // Get the current tab content
    
    // Fetch the user's IP address
    let visitorIP = "";
    try {
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipResponse.json();
      visitorIP = ipData.ip; // Extract IP address
    } catch (error) {
      console.error("Error fetching IP:", error);
    }
  
    // Get the current URL and extract the text of the end URL
    const url = window.location.href;
    const endText = url.split("/").pop(); // Get the last part of the URL

    // Create the email data to match backend expectations
    const emailData = {
      name: formData.name,
      companyName: formData.companyName,
      email: formData.email,
      contactNumber: formData.contactNumber, // Match the backend field name
      city: formData.city,
      state: formData.state,
      country: formData.country,
      brochureLink: currentTab?.catalogue || activeTab,
      url: url,
      visitorIP: visitorIP,
      endText: endText,
      message: formData.message
    };
  
    console.log("Sending email data: ", emailData);

    try {
      // Send email using backend API
      const response = await fetch(`${process.env.REACT_APP_API_URL}/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        alert('Catalogue has been sent to your email!');
        onClose();
      } else {
        const errorText = await response.text();
        alert(`Failed to send catalogue: ${errorText}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to connect to the server. Please try again later.');
    }
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
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Enter your company name"
                  required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email ID</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="contactNumber">Contact No</label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              placeholder="Enter your contact number"
                  required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Enter your city"
                  required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              placeholder="Enter your state"
                  required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Enter your country"
                  required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter any additional information"
              rows="3"
            ></textarea>
          </div>
          
          <button className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export const ProductWithDownloadCatalogue = ({ image, images, description, tabId, tabContent }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="product-with-download-catalogue">
      <ProductImage image={image} images={images} description={description} />
      <button
        className="download-catalogue-button download-button"
        onClick={() => setShowModal(true)}
      >
        <div className="docs">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          DOWNLOAD CATALOGUE
        </div>
        <div className="download">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </div>
      </button>
      {showModal && (
        <DownloadCatalogueModal
          onClose={() => setShowModal(false)}
          activeTab={tabId}
          tabContent={tabContent}
        />
      )}
    </div>
  );
};