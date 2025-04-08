const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
  name: String,
  companyName: String,
  email: String,
  contactNumber: String,
  city: String,
  state: String,
  country: String,
  message: String,
  followupStatus: {
    type: String,
    enum: ["Read", "Pending", "Contacted", "No Response"],
    default: "Pending"
  },
  isSpam: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ContactUsInquiry", inquirySchema);
