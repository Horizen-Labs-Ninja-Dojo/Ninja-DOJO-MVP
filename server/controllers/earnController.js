const User = require('../models/User');
const NFT = require('../models/NFT');
const Battle = require('../models/Battle');

// Get earning methods
exports.getEarningMethods = async (req, res) => {
  try {
    const earningMethods = [
      {
        id: 1,
        icon: 'Target',
        title: 'Mission Rewards',
        description: 'Complete PvE missions and quests',
        earning: '50-200 NINJA/day',
        difficulty: 'Easy',
        color: 'from-green-400 to-emerald-500',
        image: 'https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 2,
        icon: 'Users',
        title: 'PvP Battles',
        description: 'Defeat other players in combat',
        earning: '100-500 NINJA/win',
        difficulty: 'Medium',
        color: 'from-cyan-400 to-blue-500',
        image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 3,
        icon: 'Trophy',
        title: 'Tournament Champions',
        description: 'Win weekly ninja tournaments',
        earning: '1000-5000 NINJA',
        difficulty: 'Hard',
        color: 'from-yellow-400 to-orange-500',
        image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 4,
        icon: 'Zap',
        title: 'NFT Staking',
        description: 'Stake ninja NFTs for passive income',
        earning: '20-100 NINJA/day',
        difficulty: 'Passive',
        color: 'from-purple-400 to-pink-500',
        image: 'https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ];
    
    res.json({
      success: true,
      data: earningMethods
    });
  } catch (error) {
    console.error('Get earning methods error:', error);
    res.status(500).json({ error: 'Failed to get earning methods' });
  }
};

// Get leaderboard
exports.getLeaderboard = async (req, res) => {
  try {
    const { limit = 10, period = 'week' } = req.query;
    
    const users = await User.find()
      .sort({ 'stats.totalEarnings': -1 })
      .limit(parseInt(limit))
      .select('username stats.totalEarnings');
    
    const leaderboard = users.map((user, index) => ({
      rank: index + 1,
      name: user.username,
      earnings: `${user.stats.totalEarnings.toLocaleString()} NINJA`,
      avatar: ['🥷', '⚔️', '🗡️', '🌟', '⚡'][index] || '🥷',
      weeklyChange: `+${Math.floor(Math.random() * 20) + 5}%`
    }));
    
    res.json({
      success: true,
      data: leaderboard,
      period,
      total: users.length
    });
  } catch (error) {
    console.error('Get leaderboard error:', error);
    res.status(500).json({ error: 'Failed to get leaderboard' });
  }
};

// Get user earnings
exports.getUserEarnings = async (req, res) => {
  try {
    const { userId } = req.params;
    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // Get recent battles for earnings breakdown
    const recentBattles = await Battle.find({ player: userId })
      .sort({ createdAt: -1 })
      .limit(5)
      .populate('mission', 'name');
    
    const userEarnings = {
      userId,
      totalEarnings: user.stats.totalEarnings,
      weeklyEarnings: Math.floor(user.stats.totalEarnings * 0.1),
      dailyEarnings: Math.floor(user.stats.totalEarnings * 0.02),
      rank: 47, // This would be calculated based on leaderboard position
      breakdown: {
        missions: Math.floor(user.stats.totalEarnings * 0.4),
        pvp: Math.floor(user.stats.totalEarnings * 0.3),
        tournaments: Math.floor(user.stats.totalEarnings * 0.2),
        staking: Math.floor(user.stats.totalEarnings * 0.1)
      },
      recentEarnings: recentBattles.map(battle => ({
        date: battle.createdAt.toISOString().split('T')[0],
        amount: battle.reward,
        source: battle.mission ? `Mission: ${battle.mission.name}` : 
                battle.type === 'PvP' ? 'PvP Victory' : 
                battle.type === 'Tournament' ? 'Tournament Win' : 'Battle'
      }))
    };
    
    res.json({
      success: true,
      data: userEarnings
    });
  } catch (error) {
    console.error('Get user earnings error:', error);
    res.status(500).json({ error: 'Failed to get user earnings' });
  }
};

// Claim earnings
exports.claimEarnings = async (req, res) => {
  try {
    const { userId, amount, source } = req.body;
    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // Add earnings to user
    user.ninjaTokens += amount;
    user.stats.totalEarnings += amount;
    await user.save();
    
    const claim = {
      userId,
      amount,
      source,
      claimedAt: new Date().toISOString(),
      transactionId: `tx_${Math.random().toString(36).substr(2, 9)}`
    };
    
    res.json({
      success: true,
      message: 'Earnings claimed successfully',
      data: claim
    });
  } catch (error) {
    console.error('Claim earnings error:', error);
    res.status(500).json({ error: 'Failed to claim earnings' });
  }
};

// Get staking information
exports.getStakingInfo = async (req, res) => {
  try {
    const { userId } = req.params;
    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const stakedNFTs = await NFT.find({ owner: userId, isStaked: true });
    
    const totalStaked = stakedNFTs.reduce((sum, nft) => sum + (nft.stakingReward || 0), 0);
    const dailyRewards = Math.floor(totalStaked * 0.05);
    
    const stakingInfo = {
      userId,
      totalStaked,
      dailyRewards,
      weeklyRewards: dailyRewards * 7,
      monthlyRewards: dailyRewards * 30,
      apy: 18.25,
      stakedNFTs: stakedNFTs.map(nft => ({
        id: nft._id,
        name: nft.name,
        dailyReward: nft.stakingReward || 15
      })),
      pendingRewards: Math.floor(Math.random() * 100) + 20,
      nextRewardIn: '2h 15m'
    };
    
    res.json({
      success: true,
      data: stakingInfo
    });
  } catch (error) {
    console.error('Get staking info error:', error);
    res.status(500).json({ error: 'Failed to get staking info' });
  }
};

// Stake NFT
exports.stakeNFT = async (req, res) => {
  try {
    const { userId, nftId } = req.body;
    
    const user = await User.findById(userId);
    const nft = await NFT.findById(nftId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    if (!nft) {
      return res.status(404).json({ error: 'NFT not found' });
    }
    
    if (nft.owner.toString() !== userId) {
      return res.status(403).json({ error: 'You do not own this NFT' });
    }
    
    if (nft.isStaked) {
      return res.status(400).json({ error: 'NFT is already staked' });
    }
    
    // Stake the NFT
    nft.isStaked = true;
    nft.stakingReward = Math.floor(Math.random() * 20) + 5; // 5-25 NINJA per day
    await nft.save();
    
    const stakeResult = {
      userId,
      nftId,
      stakedAt: new Date().toISOString(),
      dailyReward: nft.stakingReward,
      lockPeriod: '30 days'
    };
    
    res.json({
      success: true,
      message: 'NFT staked successfully',
      data: stakeResult
    });
  } catch (error) {
    console.error('Stake NFT error:', error);
    res.status(500).json({ error: 'Failed to stake NFT' });
  }
};

// Unstake NFT
exports.unstakeNFT = async (req, res) => {
  try {
    const { userId, nftId } = req.body;
    
    const user = await User.findById(userId);
    const nft = await NFT.findById(nftId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    if (!nft) {
      return res.status(404).json({ error: 'NFT not found' });
    }
    
    if (nft.owner.toString() !== userId) {
      return res.status(403).json({ error: 'You do not own this NFT' });
    }
    
    if (!nft.isStaked) {
      return res.status(400).json({ error: 'NFT is not staked' });
    }
    
    // Calculate final reward
    const finalReward = Math.floor(Math.random() * 100) + 50;
    
    // Unstake the NFT
    nft.isStaked = false;
    nft.stakingReward = 0;
    await nft.save();
    
    // Add reward to user
    user.ninjaTokens += finalReward;
    user.stats.totalEarnings += finalReward;
    await user.save();
    
    const unstakeResult = {
      userId,
      nftId,
      unstakedAt: new Date().toISOString(),
      finalReward,
      penalty: 0
    };
    
    res.json({
      success: true,
      message: 'NFT unstaked successfully',
      data: unstakeResult
    });
  } catch (error) {
    console.error('Unstake NFT error:', error);
    res.status(500).json({ error: 'Failed to unstake NFT' });
  }
};

// Get global earning stats
exports.getGlobalEarningStats = async (req, res) => {
  try {
    const totalEarningsResult = await User.aggregate([
      { $group: { _id: null, totalEarnings: { $sum: '$stats.totalEarnings' } } }
    ]);
    
    const activeEarners = await User.countDocuments({ 'stats.totalEarnings': { $gt: 0 } });
    const totalStakedNFTs = await NFT.countDocuments({ isStaked: true });
    
    const stats = {
      totalEarningsDistributed: `${(totalEarningsResult[0]?.totalEarnings / 1000000 || 2.4).toFixed(1)}M NINJA`,
      totalEarningsUSD: (totalEarningsResult[0]?.totalEarnings * 0.2 || 480000),
      activeEarners,
      averageDailyEarning: 87,
      topEarningMethod: 'PvP Battles',
      totalStaked: `${(totalStakedNFTs * 1000).toLocaleString()} NINJA`,
      stakingAPY: 18.25
    };
    
    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error('Get global earning stats error:', error);
    res.status(500).json({ error: 'Failed to get global earning stats' });
  }
};