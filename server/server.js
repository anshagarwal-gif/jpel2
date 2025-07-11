require("dotenv").config();  // Load environment variables
const connectDB = require("./config/db");
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const path = require("path");
const inquiryRoutes = require("./routes/Contactus");
const CarrerRoutes =require("./routes/Carrer")
const FormSubmission = require("./models/FormSubmission");
const Catalogue =require("./routes/FormSubmission")


// Create an Express app
const app = express();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/public', express.static(path.join(__dirname, 'images')));

app.use(express.json()); 
app.use(bodyParser.json()); // To parse JSON data in the request body
// To handle cross-origin requests
 // Handle preflight
connectDB();
// Nodemai  ler transport configuration using environment variables
const transporter = nodemailer.createTransport({
  service: "Gmail",  // Use Gmail as the email service
  auth: {
    user: process.env.EMAIL,  // Use the email from the .env file
    pass: process.env.PASSWORD,  // Use the password from the .env file
  },
});
 console.log(process.env.EMAIL);
  console.log(process.env.PASSWORD);
// Endpoint to send email



// Add this to your main server file (after your existing /send-email endpoint)

// New endpoint specifically for inquiry form emails
app.post("/send-email2", async (req, res) => {
  try {
    const {
      name,
      companyName,
      email,
      contactNumber,
      city,
      state,
      country,
      message,
      visitorIP,
      url = window?.location?.href || 'Direct form submission'
    } = req.body;

    // Validation
    if (!email || !name) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name and email are required.' 
      });
    }

    // Email to owner/admin about the inquiry
    const ownerMailOptions = {
      from: email, // Sender email (customer's email)
      to: ["rakesh@jpel.in", "info@jpel.in"], // Your email addresses
      subject: "New Inquiry Received | J P Extrusiontech Private Limited",
      html: `
        <div style="font-family: Arial, sans-serif; border: 2px dashed #000; padding: 20px; max-width: 600px; margin: auto; background-color: #F7F7F7;">
          <!-- Logo -->
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://jpel.in/static/media/footer-logo.6cd7aaadced76bd27f40.jpg" alt="JP Group Logo" style="max-width: 400px;">
          </div>
          
          <h2 style="text-align: center; color: #d32f2f; margin-bottom: 20px;">🔔 NEW INQUIRY RECEIVED</h2>
          
          <!-- Form Content -->
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; background-color: white; border: 1px solid #ddd;">
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; font-weight: bold; color: #000; border: 1px solid #ddd;">Name:</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #000; border: 1px solid #ddd;">Company Name:</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${companyName || 'Not provided'}</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; font-weight: bold; color: #000; border: 1px solid #ddd;">Email:</td>
              <td style="padding: 12px; border: 1px solid #ddd;"><a href="mailto:${email}" style="color: #0066cc;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #000; border: 1px solid #ddd;">Contact No:</td>
              <td style="padding: 12px; border: 1px solid #ddd;"><a href="tel:${contactNumber}" style="color: #0066cc;">${contactNumber}</a></td>
            </tr>
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; font-weight: bold; color: #000; border: 1px solid #ddd;">City:</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${city}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #000; border: 1px solid #ddd;">State:</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${state}</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; font-weight: bold; color: #000; border: 1px solid #ddd;">Country:</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${country}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #000; border: 1px solid #ddd; vertical-align: top;">Message:</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${message}</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; font-weight: bold; color: #000; border: 1px solid #ddd;">Source URL:</td>
              <td style="padding: 12px; border: 1px solid #ddd;"><a href="${url}" style="color: #0066cc; word-break: break-all;">${url}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #000; border: 1px solid #ddd;">Visitor IP:</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${visitorIP || 'Not captured'}</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; font-weight: bold; color: #000; border: 1px solid #ddd;">Received At:</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e3f2fd; border-left: 4px solid #2196f3;">
            <p style="margin: 0; font-weight: bold; color: #1976d2;">📧 Reply directly to this email to respond to the customer.</p>
          </div>
        </div>
      `,
    };

    

    // Send both emails
    const sendOwnerEmail = transporter.sendMail(ownerMailOptions);


    await Promise.all([sendOwnerEmail]);

    console.log("Inquiry emails sent successfully to both owner and customer");
    
    res.status(200).json({
      success: true,
      message: "Inquiry emails sent successfully!"
    });

  } catch (error) {
    console.error("Error sending inquiry emails:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send emails. Please try again.",
      error: error.message
    });
  }
});
app.post("/send-email", (req, res) => {
  const formData = req.body;
  console.log(process.env.PASSWORD);
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
    visitorIP,
    endText="home",
  } = req.body;
// Save to DB before sending emails
const newSubmission = new FormSubmission({
  name,
  email,
  contactNumber,
  city,
  state,
  message,
  productCategory: endText,
  ipAddress: visitorIP,
});
newSubmission.save()




  const brochureFiles = {
    TapeExtrusion: ["TapeExtrusion.pdf"],
    CircularLoom: ["4 Shuttle Circular Loom.pdf","6 Shuttle Circular Loom.pdf","8,10 & 12 Shuttle Circular Loom_20_02_2025.pdf","Inside Lamination.pdf"],
    ExtrusionCoating:["Extrusion Coating Line.pdf","Extrusion Coatling Line - POLYCOAT.pdf","Extrusion Coating - Leno Lamination.pdf"],
    PrintingMachine:["Flexo Printing Machine.pdf"],
    BagConversion:["Converting machine.pdf"],
    WovenSack:["Plastic Washing Cleaning & Recycling Line.pdf"],
    PET:["PET Washing Line.pdf"],
    Monofilament:["Monofilament Plant.pdf"],
    BoxStrapping:["PP and PET Box Strapping Line.pdf"],
    SheetExtrusion:["Sheet Extrusion Line.pdf"],
    CastLine:["Cast Film Line.pdf"],
    Flexible:["Extrusion Coating Line for Flexible Packaging.pdf"]
  
  };
  const brochureFileNames = Array.isArray(brochureFiles[endText]) 
  ? brochureFiles[endText] 
  : [brochureFiles[endText] || "ManufacturingRange.pdf"];
  const attachments = brochureFileNames.map(fileName => ({
    filename: fileName,
    path: path.join(__dirname, "catalogues", fileName),
    contentType: "application/pdf",
  }));
 // Define the email content for the owner
 const ownerMailOptions = {
  from: email, // Sender email
  to: ["rakesh@jpel.in",
    "info@jpel.in" ], // Owner's email from environment variable
  subject: "Download Catalogue | J P Extrusiontech Private Limited",
  html: `
    <div style="font-family: Arial, sans-serif; border: 2px dashed #000; padding: 20px; max-width: 600px; margin: auto; background-color: #F7F7F7;">
      <!-- Logo -->
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://jpel.in/static/media/footer-logo.6cd7aaadced76bd27f40.jpg" alt="JP Group Logo" style="max-width: 400px;">
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

// Define the email content for the user (based on the image template)
const userMailOptions = {
  from: process.env.EMAIL, // Owner's email as sender
  to: email, // User's email from the form
  subject: "Thank you for your interest | J P Extrusiontech Private Limited",
  html: `
    <div style="font-family: Arial, sans-serif; border: 2px dashed #000; padding: 20px; max-width: 600px; margin: auto;">
      <!-- Logo -->
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://jpel.in/static/media/footer-logo.6cd7aaadced76bd27f40.jpg" alt="JP Group Logo" style="max-width: 400px;">
      </div>
      
      <h2 style="text-align: center; font-size: 24px; margin-bottom: 20px;">Thank you!</h2>
      
      <p style="margin-bottom: 15px;">Dear ${name},</p>
      
      <p style="margin-bottom: 5px;">Awesome!</p>
      <p style="margin-bottom: 15px;">Thank you for your interest.</p>
      
      <p style="margin-bottom: 25px;">The requested ${brochureFileNames.length > 1 ? 'brochures are' : 'brochure is'} attached to this email.</p>
      
      <p style="margin-bottom: 5px;">Regards,</p>
      <p style="margin-bottom: 5px; font-weight: bold;">J P Extrusiontech Private Limited</p>
      
      <p style="margin-top: 30px; font-size: 12px; color: #666;">This is an auto generated email. PLEASE DO NOT REPLY directly to this email.</p>
    </div>
  `,
  attachments: attachments,
};
res.status(200).send("Request received. Your catalogue will be emailed shortly.");
// Send email to both the owner and the user
const sendOwnerEmail = new Promise((resolve, reject) => {
  transporter.sendMail(ownerMailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email to owner:", error);
      reject(error);
    } else {
      console.log("Email sent to owner:", info.response);
      resolve(info);
    }
  });
});

const sendUserEmail = new Promise((resolve, reject) => {
  transporter.sendMail(userMailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email to user:", error);
      reject(error);
    } else {
      console.log("Email sent to user:", info.response);
      resolve(info);
    }
  });
});

Promise.all([sendOwnerEmail, sendUserEmail])
  .then(() => {
    console.log("All emails sent successfully");
  })
  .catch((error) => {
    console.error("Error in email sending process:", error.message);
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api", CarrerRoutes);
app.use("/api/form",Catalogue)

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
