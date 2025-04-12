const express = require('express');
const router = express.Router();
const FormSubmission = require('../models/FormSubmission');
router.get("/get-submissions", async (req, res) => {
    try {
      const submissions = await FormSubmission.find().sort({ date: -1 });
      res.status(200).json(submissions);
    } catch (err) {
      res.status(500).send("Error fetching submissions");
    }
  });
  

  module.exports = router;