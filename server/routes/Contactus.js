const express = require("express");
const router = express.Router();
const Inquiry = require("../models/ContactUsInquiry");

// POST - Create new inquiry
router.post("/", async (req, res) => {
  try {
    console.log('Received data:', req.body); 
    const inquiry = new Inquiry(req.body);
    await inquiry.save();
    res.status(201).json({ message: "Inquiry submitted successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET - Fetch all inquiries for admin
router.get("/", async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
