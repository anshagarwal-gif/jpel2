const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  qualification: String,
  message: String,
  jobTitle: String,
  resumePath: String,
  followupStatus: {
    type: String,
    enum: ["Unread", "Reviewed", "Shortlisted", "Interviewed","Rejected","Hired"],
    default: "Unread"
  },
  isSpam: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Carrer', applicationSchema);
