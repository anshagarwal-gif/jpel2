const mongoose = require("mongoose");

const FormSubmissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  contactNumber: String,
  city: String,
  state: String,
  message:String,
  productCategory: String,
  ipAddress: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("FormSubmission", FormSubmissionSchema);
