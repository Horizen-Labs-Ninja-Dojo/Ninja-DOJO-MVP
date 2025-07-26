const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  rarity: {
    type: String,
    required: true,
    enum: ['Common', 'Rare', 'Epic', 'Legendary']
  },
  category: {
    type: String,
    required: true,
    enum: ['weapon', 'armor', 'mask', 'gloves', 'cloak', 'accessory']
  },
  price: {
    type: String,
    required: true
  },
  priceUSD: {
    type: Number,
    required: true,
    min: 0
  },
  stats: {
    attack: { type: Number, min: 0, max: 100 },
    defense: { type: Number, min: 0, max: 100 },
    speed: { type: Number, min: 0, max: 100 },
    stealth: { type: Number, min: 0, max: 100 },
    agility: { type: Number, min: 0, max: 100 },
    tech: { type: Number, min: 0, max: 100 },
    accuracy: { type: Number, min: 0, max: 100 },
    damage: { type: Number, min: 0, max: 100 },
    range: { type: Number, min: 0, max: 100 },
    vision: { type: Number, min: 0, max: 100 },
    intimidation: { type: Number, min: 0, max: 100 },
    electric: { type: Number, min: 0, max: 100 },
    grip: { type: Number, min: 0, max: 100 },
    mobility: { type: Number, min: 0, max: 100 }
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  forSale: {
    type: Boolean,
    default: true
  },
  tokenId: {
    type: String,
    unique: true,
    sparse: true
  },
  contractAddress: {
    type: String,
    default: null
  },
  isStaked: {
    type: Boolean,
    default: false
  },
  stakingReward: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('NFT', nftSchema);