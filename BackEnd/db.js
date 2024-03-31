const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Donor', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
