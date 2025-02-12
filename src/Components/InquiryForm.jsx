// InquiryForm.jsx
import React from 'react';
import './InquiryForm.css';

const InquiryForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="inquiry-section">
      <h2 className="inquiry-title">INQUIRY</h2>
      <p className="inquiry-subtitle">Request you to kindly fill all the required details.</p>
      
      <form className="inquiry-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-column">
            <input
              type="text"
              placeholder="Name"
              className="form-input"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="form-input"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="form-input"
            />
            <input
              type="tel"
              placeholder="Contact No"
              className="form-input"
            />
            <input
              type="text"
              placeholder="City"
              className="form-input"
            />
          </div>
          
          <div className="form-column">
            <input
              type="text"
              placeholder="State"
              className="form-input"
            />
            <input
              type="text"
              placeholder="Country"
              className="form-input"
            />
            <textarea
              placeholder="Message"
              className="form-textarea"
              rows="7"
            ></textarea>
          </div>
        </div>
        
        <button type="submit" className="submit-button">
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default InquiryForm;