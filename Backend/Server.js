const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt'); // Import bcrypt
const CustomerModel = require('./Models/Customer');

const app = express();

app.use(express.json());
app.use(cors());
app.use(
  cors({
    origin: 'http://localhost:3000', // Allow only this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true, // Allow cookies and headers
  })
);

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/Customer')
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Login Endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  CustomerModel.findOne({ email: email })
    .then(async (user) => {
      if (user) {
        // Compare entered password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          res.json('Success');
        } else {
          res.json('Incorrect Password');
        }
      } else {
        res.json('User not found');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json('Error logging in');
    });
});

// Registration Endpoint
app.post('/register', async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create the user with the hashed password
    const newCustomer = new CustomerModel({
      name,
      email,
      password: hashedPassword,
    });

    const savedCustomer = await newCustomer.save();
    res.json(savedCustomer);
  } catch (err) {
    console.error(err);
    res.status(500).json('Error registering user');
  }
});

// Start the Server
app.listen(3001, () => {
  console.log('Server is Running...');
});
