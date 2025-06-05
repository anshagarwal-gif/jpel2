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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Function to get visitor IP
  const getVisitorIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error('Error getting IP:', error);
      return 'Unknown';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // First, save to database via your existing inquiry API
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/inquiries`, formData);
      
      // Get visitor IP
      const visitorIP = await getVisitorIP();
      
      // Then, send emails via the new send-email2 API
      const emailData = {
        ...formData,
        visitorIP: visitorIP,
        url: window.location.href
      };

      await axios.post(`${process.env.REACT_APP_API_URL}/send-email2`, emailData);

      toast.success("Inquiry sent successfully!");
      
      console.log("Submitted:", res.data);
      
      // Reset form
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
      
      // Check if database save worked but email failed
      if (err.response && err.response.status >= 200 && err.response.status < 300) {
        toast.warning("Inquiry saved but email notification failed. We'll still contact you!");
      } else {
        toast.error("Submission failed! Please try again.");
      }
    } finally {
      setIsSubmitting(false);
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
              disabled={isSubmitting}
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className="form-input"
              value={formData.companyName}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <input
              type="tel"
              name="contactNumber"
              placeholder="ContactNo"
              className="form-input"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              className="form-input"
              value={formData.city}
              onChange={handleChange}
              required
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              className="form-input"
              value={formData.country}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <textarea
              name="message"
              placeholder="Message"
              className="form-textarea"
              rows="7"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            ></textarea>
          </div>
        </div>
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
        </button>
      </form>
      
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default InquiryForm;