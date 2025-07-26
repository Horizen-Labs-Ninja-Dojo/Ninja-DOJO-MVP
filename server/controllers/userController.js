const User = require('../models/User');
const NFT = require('../models/NFT');
const Battle = require('../models/Battle');

// Get user profile
exports.getUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const ownedNFTs = await NFT.find({ owner: userId }).select('name rarity');
    
    const userProfile = {
      id: user._id,
      username: user.username,
      walletAddress: user.walletAddress,
      level: user.level,
      experience: user.experience,
      nextLevelExp: user.level * 1000,
      ninjaTokens: user.ninjaTokens,
      rank: user.rank,
      clan: user.clan,
      joinedAt: user.createdAt,
      lastActive: user.lastActive,
      stats: user.stats,
      achievements: [
        { id: 1, name: 'First Blood', description: 'Win your first PvP battle', unlockedAt: '2024-08-16T14:20:00Z' },
        { id: 2, name: 'Stealth Master', description: 'Complete 50 stealth missions', unlockedAt: '2024-09-10T09:15:00Z' },
        { id: 3, name: 'Clan Leader', description: 'Lead a clan to victory', unlockedAt: '2024-10-05T16:45:00Z' }
      ],
      ownedNFTs,
      preferences: user.preferences
    };
    
    res.json({
      success: true,
      data: userProfile
    });
  } catch (error) {
    console.error('Get user profile error:', error);
    res.status(500).json({ error: 'Failed to get user profile' });
  }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const updates = req.body;
    
    // Remove sensitive fields that shouldn't be updated directly
    delete updates.password;
    delete updates.walletAddress;
    delete updates.ninjaTokens;
    delete updates.stats;
    
    const user = await User.findByIdAndUpdate(
      userId,
      { ...updates, updatedAt: new Date() },
      { new: true, runValidators: true }
    );
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({
      success: true,
      message: 'Profile updated successfully',
      data: user
    });
  } catch (error) {
    console.error('Update user profile error:', error);
    res.status(500).json({ error: 'Failed to update user profile' });
  }
};

// Get user inventory
exports.getUserInventory = async (req, res) => {
  try {
    const { userId } = req.params;
    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const nfts = await NFT.find({ owner: userId });
    
    const inventory = {
      userId,
      nfts: nfts.map(nft => ({
        id: nft._id,
        name: nft.name,
        rarity: nft.rarity,
        category: nft.category,
        equipped: false, // This would be tracked in a separate collection
        isStaked: nft.isStaked
      })),
      items: [
        { id: 1, name: 'Health Potion', quantity: 15 },
        { id: 2, name: 'Stealth Potion', quantity: 8 },
        { id: 3, name: 'Shuriken', quantity: 50 }
      ],
      resources: {
        ninjaTokens: user.ninjaTokens,
        experience: user.experience,
        energy: 85
      }
    };
    
    res.json({
      success: true,
      data: inventory
    });
  } catch (error) {
    console.error('Get user inventory error:', error);
    res.status(500).json({ error: 'Failed to get user inventory' });
  }
};

// Get user achievements
exports.getUserAchievements = async (req, res) => {
  try {
    const { userId } = req.params;
    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const achievements = {
      userId,
      unlocked: [
        { id: 1, name: 'First Blood', description: 'Win your first PvP battle', unlockedAt: '2024-08-16T14:20:00Z', rarity: 'Common' },
        { id: 2, name: 'Stealth Master', description: 'Complete 50 stealth missions', unlockedAt: '2024-09-10T09:15:00Z', rarity: 'Rare' },
        { id: 3, name: 'Clan Leader', description: 'Lead a clan to victory', unlockedAt: '2024-10-05T16:45:00Z', rarity: 'Epic' }
      ],
      locked: [
        { id: 4, name: 'Shadow Legend', description: 'Reach level 50', progress: user.level, requirement: 50, rarity: 'Legendary' },
        { id: 5, name: 'Tournament Master', description: 'Win 10 tournaments', progress: user.stats.tournamentsWon, requirement: 10, rarity: 'Epic' }
      ],
      totalUnlocked: 3,
      totalAchievements: 25,
      completionRate: 12
    };
    
    res.json({
      success: true,
      data: achievements
    });
  } catch (error) {
    console.error('Get user achievements error:', error);
    res.status(500).json({ error: 'Failed to get user achievements' });
  }
};

// Get user battle history
exports.getUserBattles = async (req, res) => {
  try {
    const { userId } = req.params;
    const { limit = 10, type, page = 1 } = req.query;
    
    let query = { player: userId };
    if (type) query.type = type;
    
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const battles = await Battle.find(query)
      .populate('opponent', 'username')
      .populate('mission', 'name')
      .skip(skip)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });
    
    const total = await Battle.countDocuments(query);
    
    const battleHistory = battles.map(battle => ({
      id: battle._id,
      type: battle.type,
      opponent: battle.opponent ? battle.opponent.username : null,
      mission: battle.mission ? battle.mission.name : battle.tournament,
      result: battle.result,
      duration: battle.duration,
      reward: battle.reward,
      date: battle.createdAt
    }));
    
    res.json({
      success: true,
      data: battleHistory,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Get user battles error:', error);
    res.status(500).json({ error: 'Failed to get user battles' });
  }
};

// Update user preferences
exports.updateUserPreferences = async (req, res) => {
  try {
    const { userId } = req.params;
    const preferences = req.body;
    
    const user = await User.findByIdAndUpdate(
      userId,
      { preferences, updatedAt: new Date() },
      { new: true }
    );
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({
      success: true,
      message: 'Preferences updated successfully',
      data: {
        userId,
        preferences: user.preferences,
        updatedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Update user preferences error:', error);
    res.status(500).json({ error: 'Failed to update user preferences' });
  }
};