const express = require("express");
const router = express.Router();
const Inquiry = require("../models/ContactUsInquiry");
const { default: mongoose } = require("mongoose");

router.get("/spam", async (req, res) => {
  try {
    const spamInquiries = await Inquiry.find({ isSpam: true }).sort({ createdAt: -1 });
    res.json(spamInquiries);
  } catch (err) {
    console.error("Error fetching spam inquiries:", err);
    res.status(500).json({ message: err.message });
  }
});
router.get("/spam/count", async (req, res) => {
  try {
    const count = await Inquiry.countDocuments({ isSpam: true });
    res.json({ count });
  } catch (err) {
    console.error("Error counting spam inquiries:", err);
    res.status(500).json({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Attempting to update inquiry with ID:", id);
    
    // Convert string ID to MongoDB ObjectId
    let objectId;
    try {
      objectId = new mongoose.Types.ObjectId(id);
    } catch (err) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    
    const updates = req.body;
    
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
    
    const inquiry = await Inquiry.findByIdAndUpdate(
      objectId,
      actualUpdates,
      { new: true, runValidators: true }
    );
    
    if (!inquiry) {
      console.log("No inquiry found with ID:", id);
      return res.status(404).json({ message: "Inquiry not found" });
    }
    
    console.log("Successfully updated inquiry:", inquiry);
    res.json(inquiry);
  } catch (error) {
    console.error("Error updating inquiry:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

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
