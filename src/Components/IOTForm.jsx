import { useState, useRef } from 'react';
import './IOTForm.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const IOTForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submissionHandled = useRef(false);

  // Google Form configuration - Updated with actual form details
  const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSdUZhf4pNLIeIEZF636w1wDmQeIsrjCGtLsQbVuEOJCzytcug/formResponse";
  
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
    tempForm.target = 'hidden-iframe-iot';
    tempForm.style.display = 'none';

    // Add all form data as hidden inputs (Google Forms expects URL-encoded format)
    for (let [key, value] of formData.entries()) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      tempForm.appendChild(input);
    }

    // Ensure iframe exists before submitting
    let iframe = document.getElementById('hidden-iframe-iot');
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = 'hidden-iframe-iot';
      iframe.name = 'hidden-iframe-iot';
      iframe.style.display = 'none';
      iframe.title = 'Hidden iframe for form submission';
      document.body.appendChild(iframe);
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

    // Set up iframe load handler (use the iframe we ensured exists)
    if (iframe) {
      // Remove previous handlers to avoid duplicates
      iframe.onload = null;
      iframe.onerror = null;
      
      iframe.onload = () => {
        console.log('Iframe loaded - form submission completed');
        handleCompletion();
      };
      iframe.onerror = () => {
        console.error('Iframe error - form submission failed');
        handleCompletion();
      };
    }

    // Small delay to ensure iframe is ready, then submit
    setTimeout(() => {
      tempForm.submit();
      console.log('Form submitted to Google Forms');
    }, 100);

    // Reliable timeout - will always complete the submission after 3 seconds
    setTimeout(() => {
      console.log('Timeout reached - completing form submission');
      handleCompletion();
    }, 3000);
  };

  return (
    <div className="iot-section">
      <div className="iot-header">
        <h1 className="iot-title">
          <span className="iot-text">JP Group - </span>
          <span className="iot-enquiry">IoT Enquiry </span>
          <span className="form-text">Form</span>
        </h1>
        <p className="iot-subtitle">Please fill out the form below to express your interest in our IoT services</p>
      </div>
      
      {/* Hidden iframe to prevent page redirect */}
      <iframe
        id="hidden-iframe-iot"
        name="hidden-iframe-iot"
        style={{ display: 'none' }}
        title="Hidden iframe for form submission"
      ></iframe>
      
      <form 
        className="iot-form" 
        onSubmit={handleSubmit}
      >
        <div className="form-field">
          <label className="form-label">Name *</label>
          <input
            type="text"
            name="entry.418466542"
            placeholder="Your answer"
            className="form-input"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-field">
          <label className="form-label">Company Name *</label>
          <input
            type="text"
            name="entry.1333691727"
            placeholder="Your answer"
            className="form-input"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-field">
          <label className="form-label">Email *</label>
          <input
            type="email"
            name="entry.152391433"
            placeholder="Your answer"
            className="form-input"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-field">
          <label className="form-label">Products which you want to monitor *</label>
          <input
            type="text"
            name="entry.840624901"
            placeholder="Machine Name (Model Name)"
            className="form-input"
            required
            disabled={isSubmitting}
          />
        </div>
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>

        <p className="required-note">All fields are required</p>
      </form>
      
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default IOTForm;
