const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const multer = require('multer');
const Application = require('../models/Carrer');
const { default: mongoose } = require('mongoose');

// Nodemailer transport configuration
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// File storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) =>
    cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage });
router.get('/admin/applications/spam', async (req, res) => {
  try {
    const spamApplications = await Application.find({ isSpam: true }).sort({ createdAt: -1 });
    res.json(spamApplications);
  } catch (err) {
    console.error("Error fetching spam applications:", err);
    res.status(500).json({ error: 'Error fetching spam applications' });
  }
});

// GET - Count of spam applications
router.get('/admin/applications/spam/count', async (req, res) => {
  try {
    const count = await Application.countDocuments({ isSpam: true });
    res.json({ count });
  } catch (err) {
    console.error("Error counting spam applications:", err);
    res.status(500).json({ error: 'Error counting spam applications' });
  }
});

// POST form submission
router.post('/apply', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, contact, qualification, message, jobTitle } = req.body;
    const resumePath = req.file.path;
   // Get visitor IP
    const visitorIP = req.headers['x-forwarded-for'] || 
                     req.headers['x-real-ip'] || 
                     req.connection.remoteAddress || 
                     req.socket.remoteAddress ||
                     (req.connection.socket ? req.connection.socket.remoteAddress : null) ||
                     'IP not captured';

    // Save application to database
    const newApplication = new Application({
      name, 
      email, 
      contact, 
      qualification, 
      message, 
      jobTitle, 
      resumePath
    });

    await newApplication.save();

    // Send email notification
    try {
      // Email to owner/admin about the job application
      const ownerMailOptions = {
        from: email, // Sender email (applicant's email)
        to: ["rakesh@jpel.in", "info@jpel.in"], // Your email addresses
        subject: `New Job Application Received - ${jobTitle} | J P Extrusiontech Private Limited`,
        html: `
          <div style="font-family: Arial, sans-serif; border: 2px dashed #000; padding: 20px; max-width: 600px; margin: auto; background-color: #F7F7F7;">
            <!-- Logo -->
            <div style="text-align: center; margin-bottom: 20px;">
              <img src="https://jpel.in/static/media/footer-logo.6cd7aaadced76bd27f40.jpg" alt="JP Group Logo" style="max-width: 400px;">
            </div>
            
            <h2 style="text-align: center; color: #d32f2f; margin-bottom: 20px;">💼 NEW JOB APPLICATION RECEIVED</h2>
            
            <!-- Form Content -->
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; background-color: white; border: 1px solid #ddd;">
              <tr style="background-color: #f5f5f5;">
                <td style="padding: 12px; font-weight: bold; color: #000; border: 1px solid #ddd;">Position Applied For:</td>
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; color: #d32f2f;">${jobTitle}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; color: #000; border: 1px solid #ddd;">Name:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${name}</td>
              </tr>
              <tr style="background-color: #f5f5f5;">
                <td style="padding: 12px; font-weight: bold; color: #000; border: 1px solid #ddd;">Email:</td>
                <td style="padding: 12px; border: 1px solid #ddd;"><a href="mailto:${email}" style="color: #0066cc;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; color: #000; border: 1px solid #ddd;">Contact No:</td>
                <td style="padding: 12px; border: 1px solid #ddd;"><a href="tel:${contact}" style="color: #0066cc;">${contact}</a></td>
              </tr>
              <tr style="background-color: #f5f5f5;">
                <td style="padding: 12px; font-weight: bold; color: #000; border: 1px solid #ddd;">Qualification:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${qualification}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; color: #000; border: 1px solid #ddd; vertical-align: top;">Message:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${message}</td>
              </tr>
              <tr style="background-color: #f5f5f5;">
                <td style="padding: 12px; font-weight: bold; color: #000; border: 1px solid #ddd;">Resume:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${resumePath ? 'Resume uploaded - Check server uploads folder' : 'No resume uploaded'}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; color: #000; border: 1px solid #ddd;">Visitor IP:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${visitorIP}</td>
              </tr>
              <tr style="background-color: #f5f5f5;">
                <td style="padding: 12px; font-weight: bold; color: #000; border: 1px solid #ddd;">Applied At:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e8; border-left: 4px solid #4caf50;">
              <p style="margin: 0; font-weight: bold; color: #2e7d32;">📧 Reply directly to this email to respond to the applicant.</p>
              <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Resume file path: ${resumePath || 'Not uploaded'}</p>
            </div>
          </div>
        `,
        // Attach resume if uploaded
        attachments: resumePath ? [{
          filename: `${name}_Resume_${jobTitle.replace(/\s+/g, '_')}.${req.file.originalname.split('.').pop()}`,
          path: resumePath
        }] : []
      };

      // Send both emails
      const sendOwnerEmail = transporter.sendMail(ownerMailOptions);


      await Promise.all([sendOwnerEmail]);

      console.log("Job application emails sent successfully to both admin and applicant");
      
    } catch (emailError) {
      console.error("Error sending job application emails:", emailError);
      // Don't fail the entire request if email fails
    }

    res.status(201).json({ 
      message: 'Application submitted successfully! You will receive a confirmation email shortly.' 
    });

  } catch (err) {
    console.error("Error in job application submission:", err);
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
});

// GET all applications for admin
router.get('/admin/applications', async (req, res) => {
  try {
    const { spam } = req.query;
    
    
    let filter = {};
    if (spam === 'true') {
      // Only show spam records when specifically requested
      filter.isSpam = true;
    } else if (spam === 'false') {
      // Only show non-spam when specifically requested
      filter.isSpam = { $ne: true };
    }
    // If spam parameter is not provided, no filter is applied (shows all)
    
    const applications = await Application.find(filter).sort({ createdAt: -1 });

    
    res.json(applications);
  } catch (err) {
    console.error("Error fetching applications:", err);
    res.status(500).json({ error: 'Error fetching applications' });
  }
});
// PATCH update application status and spam flag
router.patch('/admin/applications/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    // Convert string ID to MongoDB ObjectId
    let objectId;
    try {
      objectId = new mongoose.Types.ObjectId(id);
    } catch (err) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    
    // Validate the updates - only allow certain fields to be updated
    const allowedUpdates = ["followupStatus", "isSpam"];
    const actualUpdates = Object.keys(updates)
      .filter(key => allowedUpdates.includes(key))
      .reduce((obj, key) => {
        obj[key] = updates[key];
        return obj;
      }, {});
    
    if (Object.keys(actualUpdates).length === 0) {
      return res.status(400).json({ message: "No valid updates provided" });
    }
    
    const application = await Application.findByIdAndUpdate(
      objectId,
      actualUpdates,
      { new: true, runValidators: true }
    );
    
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }
    
    res.json(application);
  } catch (error) {
    console.error("Error updating application:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});


module.exports = router;
