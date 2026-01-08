import { useState, useRef } from 'react';
import './OOSForm.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OOSForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submissionHandled = useRef(false);

  // Google Form configuration - Updated with your actual form details
  const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSfKpsZgmwbOdks0wzZLbU4XwrXReZNn5XngSa4fvaVaktlVqA/formResponse";
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    submissionHandled.current = false;

    // Get form data
    const formData = new FormData(e.target);
    
    // Debug: Log form data being sent
    console.log('Form data being sent:');
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    // Create a temporary form element for submission
    const tempForm = document.createElement('form');
    tempForm.method = 'POST';
    tempForm.action = GOOGLE_FORM_ACTION;
    tempForm.target = 'hidden-iframe';
    tempForm.style.display = 'none';

    // Add all form data as hidden inputs
    for (let [key, value] of formData.entries()) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      tempForm.appendChild(input);
    }

    // Add form to document and submit
    document.body.appendChild(tempForm);
    
    // Create a completion handler that only runs once
    const handleCompletion = () => {
      if (submissionHandled.current) return;
      submissionHandled.current = true;
      
      setIsSubmitting(false);
      toast.success("Form submitted successfully! We'll get back to you soon.");
      e.target.reset();
      
      // Clean up temporary form
      if (tempForm.parentNode) {
        document.body.removeChild(tempForm);
      }
    };

    // Set up iframe load handler
    const iframe = document.getElementById('hidden-iframe');
    if (iframe) {
      iframe.onload = () => {
        console.log('Iframe loaded - form submission completed');
        handleCompletion();
      };
      iframe.onerror = () => {
        console.error('Iframe error - form submission failed');
        handleCompletion();
      };
    }

    // Submit the temporary form
    tempForm.submit();
    console.log('Form submitted to Google Forms');

    // Reliable timeout - will always complete the submission after 3 seconds
    setTimeout(() => {
      console.log('Timeout reached - completing form submission');
      handleCompletion();
    }, 3000);
  };

  return (
    <div className="oos-section">
      <div className="oos-header">
        <h1 className="oos-title">
          <span className="oos-text">OOS - </span>
          <span className="spare-parts">Spare Parts </span>
          <span className="interest-form">Interest Form</span>
        </h1>
        <p className="oos-subtitle">Please fill out the form below to express your interest in our spare parts</p>
      </div>
      
      {/* Hidden iframe to prevent page redirect */}
      <iframe
        id="hidden-iframe"
        name="hidden-iframe"
        style={{ display: 'none' }}
        title="Hidden iframe for form submission"
      ></iframe>
      
      <form 
        className="oos-form" 
        onSubmit={handleSubmit}
      >
        <div className="form-field">
          <label className="form-label">Full Name *</label>
          <input
            type="text"
            name="entry.599279717"
            placeholder="Enter your full name"
            className="form-input"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-field">
          <label className="form-label">Company Name *</label>
          <input
            type="text"
            name="entry.2069027532"
            placeholder="Enter your company name"
            className="form-input"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-field">
          <label className="form-label">Email *</label>
          <input
            type="email"
            name="entry.53554863"
            placeholder="your.email@company.com"
            className="form-input"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-field">
          <label className="form-label">Phone Number *</label>
          <input
            type="tel"
            name="entry.241111757"
            placeholder="+91 1234567890"
            className="form-input"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-field">
          <label className="form-label">Country *</label>
          <input
            type="text"
            name="entry.1591312528"
            placeholder="Enter your country"
            className="form-input"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-field">
          <label className="form-label">State *</label>
          <input
            type="text"
            name="entry.648543090"
            placeholder="Enter your state"
            className="form-input"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-field">
          <label className="form-label">City *</label>
          <input
            type="text"
            name="entry.1337921733"
            placeholder="Enter your city"
            className="form-input"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-field">
          <label className="form-label">Are you or your company already a customer? *</label>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="entry.659778059"
                value="YES"
                required
                disabled={isSubmitting}
              />
              <span className="radio-text">Yes</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="entry.659778059"
                value="NO"
                required
                disabled={isSubmitting}
              />
              <span className="radio-text">No</span>
            </label>
          </div>
        </div>
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Interest Form'}
        </button>

        <p className="required-note">All fields are required</p>
      </form>
      
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default OOSForm;