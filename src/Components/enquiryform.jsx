import React from 'react';
import './enquiryform.css'; // Include your CSS file for styling

const enquiryForm = () => {
  return (
    <form className="form1">
      <p className="title1">INQUIRY</p>
      <p className="message1">Request you to kindly fill all the required details.</p>
      <div className="flex1">
        <label>
          <input className="input1" type="text" placeholder="" required />
          <span>Name</span>
        </label>

        <label>
          <input className="input1" type="text" placeholder="" required />
          <span>Company Name</span>
        </label>
      </div>

      <label>
        <input className="input1" type="email" placeholder="" required />
        <span>Email ID</span>
      </label>

      <label>
        <input className="input1" type="text" placeholder="" required />
        <span>Contact No.</span>
      </label>

      <label>
        <input className="input1" type="text" placeholder="" required />
        <span>City</span>
      </label>

      <label>
        <input className="input1" type="text" placeholder="" required />
        <span>State</span>
      </label>

      <label>
        <input className="input1" type="text" placeholder="" required />
        <span>Country</span>
      </label>

      <label>
        <textarea className="input1" placeholder="" required></textarea>
        <span>Message</span>
      </label>

      <button className="submit1" type="submit">Submit</button>
      <p className="signin1"><a href="#">Sign In</a></p>
    </form>
  );
};

export default enquiryForm;
