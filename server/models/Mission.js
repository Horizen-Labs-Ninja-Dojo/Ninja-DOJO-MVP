const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true,
    enum: ['Easy', 'Medium', 'Hard', 'Expert']
  },
  type: {
    type: String,
    required: true,
    enum: ['PvE', 'PvP', 'Tournament', 'Clan War']
  },
  rewards: {
    experience: { type: Number, required: true },
    ninjaTokens: { type: Number, required: true },
    items: [{ type: String }]
  },
  objectives: [{
    type: String,
    required: true
  }],
  estimatedTime: {
    type: String,
    required: true
  },
  levelRequired: {
    type: Number,
    default: 1
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Mission', missionSchema);