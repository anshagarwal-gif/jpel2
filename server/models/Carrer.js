const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  qualification: String,
  message: String,
  jobTitle: String,
  resumePath: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Carrer', applicationSchema);
