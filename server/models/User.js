const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 20
  },
  email: {
    type: String,
    unique: true,
    sparse: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    minlength: 6
  },
  walletAddress: {
    type: String,
    unique: true,
    sparse: true,
    lowercase: true
  },
  level: {
    type: Number,
    default: 1,
    min: 1,
    max: 100
  },
  experience: {
    type: Number,
    default: 0,
    min: 0
  },
  ninjaTokens: {
    type: Number,
    default: 1000,
    min: 0
  },
  rank: {
    type: String,
    default: 'Novice Ninja',
    enum: ['Novice Ninja', 'Shadow Apprentice', 'Stealth Warrior', 'Shadow Master', 'Legendary Ninja']
  },
  clan: {
    type: String,
    default: null
  },
  stats: {
    totalWins: { type: Number, default: 0 },
    totalLosses: { type: Number, default: 0 },
    winRate: { type: Number, default: 0 },
    totalEarnings: { type: Number, default: 0 },
    missionsCompleted: { type: Number, default: 0 },
    pvpBattles: { type: Number, default: 0 },
    tournamentsWon: { type: Number, default: 0 }
  },
  preferences: {
    theme: { type: String, default: 'dark', enum: ['dark', 'light'] },
    notifications: { type: Boolean, default: true },
    publicProfile: { type: Boolean, default: true }
  },
  lastActive: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Calculate win rate before saving
userSchema.pre('save', function(next) {
  if (this.stats.totalWins + this.stats.totalLosses > 0) {
    this.stats.winRate = (this.stats.totalWins / (this.stats.totalWins + this.stats.totalLosses)) * 100;
  }
  next();
});

module.exports = mongoose.model('User', userSchema);