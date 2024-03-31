const mongoose = require('./db'); // Import the database configuration

const RequesterSchema = new mongoose.Schema({
  name: String,
  nicnumber: String,
  conatctno: String,
  email: String,
  neededby: String,
  bloodGroup: String,
  livingCity: String,
});

const Requester = mongoose.model('Requester', RequesterSchema);

module.exports = Requester;
