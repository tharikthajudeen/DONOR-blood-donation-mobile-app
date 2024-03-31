const mongoose = require('./db'); // Import the database configuration
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  name: String,
  username: String,
  nicnumber: String,
  email: String,
  password: String
});

// Hash the password before saving
UserSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
