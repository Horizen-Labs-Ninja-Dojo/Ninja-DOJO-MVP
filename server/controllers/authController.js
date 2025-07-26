const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET || 'ninja-secret-key', {
    expiresIn: '7d'
  });
};

// Register user
exports.register = async (req, res) => {
  try {
    const { email, password, walletAddress, username } = req.body;

    // Validation
    if (!username) {
      return res.status(400).json({ error: 'Username is required' });
    }

    if (!email && !walletAddress) {
      return res.status(400).json({ error: 'Email or wallet address is required' });
    }

    if (email && !password) {
      return res.status(400).json({ error: 'Password is required when using email' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [
        { email: email },
        { username: username },
        { walletAddress: walletAddress }
      ]
    });

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password if provided
    let hashedPassword = null;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 12);
    }

    // Create new user
    const newUser = new User({
      email,
      password: hashedPassword,
      walletAddress,
      username
    });

    await newUser.save();

    // Generate token
    const token = generateToken(newUser._id);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token,
      user: {
        id: newUser._id,
        email: newUser.email,
        username: newUser.username,
        walletAddress: newUser.walletAddress,
        level: newUser.level,
        ninjaTokens: newUser.ninjaTokens
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user || !user.password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Update last active
    user.lastActive = new Date();
    await user.save();

    // Generate token
    const token = generateToken(user._id);

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
        walletAddress: user.walletAddress,
        level: user.level,
        ninjaTokens: user.ninjaTokens
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
};

// Wallet connect
exports.walletConnect = async (req, res) => {
  try {
    const { walletAddress, signature } = req.body;

    if (!walletAddress) {
      return res.status(400).json({ error: 'Wallet address is required' });
    }

    // Find or create user by wallet address
    let user = await User.findOne({ walletAddress: walletAddress.toLowerCase() });
    
    if (!user) {
      user = new User({
        walletAddress: walletAddress.toLowerCase(),
        username: `Ninja${Math.floor(Math.random() * 10000)}`
      });
      await user.save();
    } else {
      // Update last active
      user.lastActive = new Date();
      await user.save();
    }

    // Generate token
    const token = generateToken(user._id);

    res.json({
      success: true,
      message: 'Wallet connected successfully',
      token,
      user: {
        id: user._id,
        username: user.username,
        walletAddress: user.walletAddress,
        level: user.level,
        ninjaTokens: user.ninjaTokens
      }
    });
  } catch (error) {
    console.error('Wallet connection error:', error);
    res.status(500).json({ error: 'Wallet connection failed' });
  }
};