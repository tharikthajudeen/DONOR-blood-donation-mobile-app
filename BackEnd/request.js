const mongoose = require('mongoose'); // Corrected import statement for mongoose
const mongoose = require('./db'); // Import the database configuration
const bcrypt = require('bcrypt');

const RequesterSchema = new mongoose.Schema({
  name: String,
  bloodGroup: String,
  livingCity: String,
  street: String,
});

const Requester = mongoose.model('Requester', RequesterSchema);

module.exports = Requester;
