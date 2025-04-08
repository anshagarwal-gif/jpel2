const express = require('express');
const router = express.Router();
const multer = require('multer');
const Application = require('../models/Carrer');
const { default: mongoose } = require('mongoose');

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

    const newApplication = new Application({
      name, email, contact, qualification, message, jobTitle, resumePath
    });

    await newApplication.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
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
