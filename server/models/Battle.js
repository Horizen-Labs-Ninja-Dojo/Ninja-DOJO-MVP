const mongoose = require('mongoose');

const battleSchema = new mongoose.Schema({
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  opponent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  type: {
    type: String,
    required: true,
    enum: ['PvP', 'PvE', 'Tournament']
  },
  result: {
    type: String,
    required: true,
    enum: ['Victory', 'Defeat', 'Draw']
  },
  duration: {
    type: String,
    required: true
  },
  reward: {
    type: Number,
    default: 0
  },
  mission: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mission',
    default: null
  },
  tournament: {
    type: String,
    default: null
  },
  battleData: {
    damageDealt: { type: Number, default: 0 },
    damageTaken: { type: Number, default: 0 },
    skillsUsed: [{ type: String }],
    itemsUsed: [{ type: String }]
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Battle', battleSchema);