import React, { useState } from 'react';
import './InquiryForm.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    contactNumber: '',
    city: '',
    state: '',
    country: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/inquiries`, formData);
      toast.success("Inquiry sent successfully!");
      
      console.log("Submitted:", res.data);
      setFormData({
        name: '',
        companyName: '',
        email: '',
        contactNumber: '',
        city: '',
        state: '',
        country: '',
        message: '',
      });
    } catch (err) {
      console.error("Error submitting inquiry:", err);
      toast.error("Submission failed!");
    }
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
              name="name"
              placeholder="Name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
                  required
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className="form-input"
              value={formData.companyName}
              onChange={handleChange}
                  required
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
                  required
            />
            <input
              type="tel"
              name="contactNumber"
              placeholder="ContactNo"
              className="form-input"
              value={formData.contactNumber}
              onChange={handleChange}
                  required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              className="form-input"
              value={formData.city}
              onChange={handleChange}
                  required
            />
          </div>
          
          <div className="form-column">
            <input
              type="text"
              name="state"
              placeholder="State"
              className="form-input"
              value={formData.state}
              onChange={handleChange}
                  required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              className="form-input"
              value={formData.country}
              onChange={handleChange}
                  required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="form-textarea"
              rows="7"
              value={formData.message}
              onChange={handleChange}
                  required
            ></textarea>
          </div>
        </div>
        
        <button type="submit" className="submit-button">
          SEND MESSAGE
        </button>
      </form>
      
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default InquiryForm;