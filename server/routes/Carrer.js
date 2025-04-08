const express = require('express');
const router = express.Router();
const multer = require('multer');
const Application = require('../models/Carrer');

// File storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) =>
    cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage });

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
    const applications = await Application.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching applications' });
  }
});

module.exports = router;
