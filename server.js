require('dotenv').config({ path: './Database/.env' });
const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const path = require('path');
const knex = require('knex')(require('./Database/knexfile.js').development);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('Website'));

// Session configuration
app.use(session({
  secret: 'pluhos-secret-key-change-this-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false,
    maxAge: 24 * 60 * 60 * 1000
  }
}));

// Login endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email and password are required' 
      });
    }

    const user = await knex('users').where({ email }).first();

    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid email or password' 
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid email or password' 
      });
    }

    req.session.userId = user.id;
    req.session.email = user.email;

    res.json({ 
      success: true, 
      message: 'Login successful',
      user: { id: user.id, email: user.email }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during login' 
    });
  }
});

// Registration endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email and password are required' 
      });
    }

    const existingUser = await knex('users').where({ email }).first();

    if (existingUser) {
      return res.status(409).json({ 
        success: false, 
        message: 'User already exists' 
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const [userId] = await knex('users').insert({
      email,
      password: hashedPassword
    }).returning('id');

    res.json({ 
      success: true, 
      message: 'Registration successful',
      userId
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during registration' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`PluhOS server running on port ${PORT}`);
});
