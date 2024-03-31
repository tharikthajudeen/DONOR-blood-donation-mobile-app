const express = require('express');
const User = require('./user'); // Import the User model
const Requester = require('./newRequest'); // Import the User model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Import JSON Web Token for authentication

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const {
      name,
      username,
      nicnumber,
      email,
      password
    } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const user = new User({
      name,
      username,
      nicnumber,
      email,
      password
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Registration failed' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });

    // Check if the user exists and the password matches
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Create a JSON Web Token (JWT) for user authentication
    const token = jwt.sign({ userId: user._id }, 'your-secret-key');

    // Return the token and user information
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});


// Backend Route to get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Retrieve all users

    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});



router.post('/newRequests', async (req, res) => {
  try {
    const {
      name,
      nicnumber,
      contactno,
      email,
      neededby,
      bloodGroup,
      livingCity,
    } = req.body;

    
    const requester = new Requester({
      name,
      nicnumber,
      contactno,
      email,
      neededby,
      bloodGroup,
      livingCity,
    });

    await requester.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Registration failed' });
  }
});



// Backend Route to get all users
router.get('/requester', async (req, res) => {
  try {
    const requesters = await Requester.find();
    res.status(200).json({ requesters });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch requesters' });
  }
});

module.exports = router;
