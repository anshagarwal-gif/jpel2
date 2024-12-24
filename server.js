require("dotenv").config();  // Load environment variables

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

// Create an Express app
const app = express();
app.use(bodyParser.json()); // To parse JSON data in the request body
app.use(cors()); // To handle cross-origin requests

// Nodemailer transport configuration using environment variables
const transporter = nodemailer.createTransport({
  service: "Gmail",  // Use Gmail as the email service
  auth: {
    user: process.env.EMAIL,  // Use the email from the .env file
    pass: process.env.PASSWORD,  // Use the password from the .env file
  },
});

// Endpoint to send email
app.post("/send-email", (req, res) => {
  const formData = req.body;

  if (!formData.email) {
    return res.status(400).send('Email is required.');
  }

  const {
    name,
    companyName,
    email,
    contactNumber,
    city,
    state,
    country,
    message,
    brochureLink,
    url,
    visitorIP
  } = req.body;

  // Define the email content
  const mailOptions = {
    from: process.env.EMAIL,  // Sender email from the environment variable
    to: "dorikdarshan2004@gmail.com",  // Replace with your recipient email address
    subject: "Download Catalogue |  J P Extrusiontech Private Limited",
      html: `
        <div style="font-family: Arial, sans-serif; border: 2px dashed #000; padding: 20px; max-width: 600px; margin: auto; background-color: #F7F7F7;">
  <!-- Logo -->
  <div style="text-align: center; margin-bottom: 20px;">
    <img src="https://jpel2.vercel.app/logojpel1.jpg" alt="JP Group Logo" style="max-width: 400px;">
  </div>
  
  <!-- Form Content -->
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <tr>
      <td style="padding: 8px; font-weight: bold; color: #000;">Name:</td>
      <td style="padding: 8px;">${name}</td>
    </tr>
    <tr>
      <td style="padding: 8px; font-weight: bold; color: #000;">Company Name:</td>
      <td style="padding: 8px;">${companyName}</td>
    </tr>
    <tr>
      <td style="padding: 8px; font-weight: bold; color: #000;">Email:</td>
      <td style="padding: 8px;">${email}</td>
    </tr>
    <tr>
      <td style="padding: 8px; font-weight: bold; color: #000;">Contact No:</td>
      <td style="padding: 8px;">${contactNumber}</td>
    </tr>
    <tr>
      <td style="padding: 8px; font-weight: bold; color: #000;">City:</td>
      <td style="padding: 8px;">${city}</td>
    </tr>
    <tr>
      <td style="padding: 8px; font-weight: bold; color: #000;">State:</td>
      <td style="padding: 8px;">${state}</td>
    </tr>
    <tr>
      <td style="padding: 8px; font-weight: bold; color: #000;">Country:</td>
      <td style="padding: 8px;">${country}</td>
    </tr>
    <tr>
      <td style="padding: 8px; font-weight: bold; color: #000;">Brochure Link:</td>
      <td style="padding: 8px;">${brochureLink}</td>
    </tr>
    <tr>
      <td style="padding: 8px; font-weight: bold; color: #000;">URL:</td>
      <td style="padding: 8px;"><a href="${url}" style="color: #0066cc; text-decoration: none;">${url}</a></td>
    </tr>
    <tr>
      <td style="padding: 8px; font-weight: bold; color: #000;">Visitor IP:</td>
      <td style="padding: 8px;">${visitorIP}</td>
    </tr>
  </table>
</div>

      `,
  
    
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email"+ error.message);
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully" + error.message);
    }
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
