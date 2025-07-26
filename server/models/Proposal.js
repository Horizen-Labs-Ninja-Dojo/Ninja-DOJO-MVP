const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  description: {
    type: String,
    required: true,
    maxlength: 1000
  },
  type: {
    type: String,
    required: true,
    enum: ['Territory', 'Economics', 'Feature', 'Governance', 'Community']
  },
  status: {
    type: String,
    default: 'Discussion',
    enum: ['Discussion', 'Active', 'Passed', 'Rejected', 'Executed']
  },
  proposer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  votes: {
    for: { type: Number, default: 0 },
    against: { type: Number, default: 0 }
  },
  voters: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    vote: { type: String, enum: ['for', 'against'] },
    tokenAmount: { type: Number, default: 1 },
    votedAt: { type: Date, default: Date.now }
  }],
  endDate: {
    type: Date,
    required: true
  },
  executedAt: {
    type: Date,
    default: null
  },
  minTokensRequired: {
    type: Number,
    default: 100
  }
}, {
  timestamps: true
});

// Calculate time left
proposalSchema.virtual('timeLeft').get(function() {
  if (this.status === 'Executed') return 'Executed';
  
  const now = new Date();
  const timeDiff = this.endDate - now;
  
  if (timeDiff <= 0) return 'Expired';
  
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  if (days > 0) return `${days} days`;
  return `${hours} hours`;
});

module.exports = mongoose.model('Proposal', proposalSchema);