const Mission = require('../models/Mission');
const Battle = require('../models/Battle');
const User = require('../models/User');

// Get game features
exports.getFeatures = async (req, res) => {
  try {
    const features = [
      {
        id: 1,
        icon: 'Gamepad2',
        title: 'Immersive Gameplay',
        description: 'PvE & PvP missions, faction wars, stealth mechanics, and skill trees in stunning 3D environments',
        color: 'from-cyan-400 to-blue-500',
        image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id: 2,
        icon: 'Sword',
        title: 'Combat System',
        description: 'Master ancient ninja techniques with modern blockchain-powered weapon upgrades',
        color: 'from-purple-400 to-pink-500',
        image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id: 3,
        icon: 'Bot',
        title: 'AI-Enhanced NPCs',
        description: 'Adaptive enemies and allies powered by machine learning that respond to your playstyle',
        color: 'from-green-400 to-teal-500',
        image: 'https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id: 4,
        icon: 'Users',
        title: 'Clan Warfare',
        description: 'Form alliances, build territories, and engage in epic faction battles',
        color: 'from-indigo-400 to-purple-500',
        image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ];

    res.json({
      success: true,
      data: features
    });
  } catch (error) {
    console.error('Get features error:', error);
    res.status(500).json({ error: 'Failed to get game features' });
  }
};

// Get gameplay modes
exports.getGameplayModes = async (req, res) => {
  try {
    const modes = [
      {
        id: 1,
        name: 'PvE Missions',
        description: 'Embark on epic quests and defeat AI-powered enemies in immersive storylines',
        image: 'https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=600',
        rewards: '50-200 NINJA/mission',
        difficulty: 'Easy to Hard'
      },
      {
        id: 2,
        name: 'PvP Battles',
        description: 'Challenge other ninjas in intense real-time combat with ranked matchmaking',
        image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600',
        rewards: '100-500 NINJA/win',
        difficulty: 'Medium to Expert'
      },
      {
        id: 3,
        name: 'Clan Wars',
        description: 'Unite with fellow ninjas and dominate territories in massive faction battles',
        image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600',
        rewards: '1000-5000 NINJA/victory',
        difficulty: 'Expert'
      }
    ];

    res.json({
      success: true,
      data: modes
    });
  } catch (error) {
    console.error('Get gameplay modes error:', error);
    res.status(500).json({ error: 'Failed to get gameplay modes' });
  }
};

// Get player stats
exports.getPlayerStats = async (req, res) => {
  try {
    const { playerId } = req.params;
    
    const user = await User.findById(playerId);
    if (!user) {
      return res.status(404).json({ error: 'Player not found' });
    }

    const playerStats = {
      playerId: user._id,
      level: user.level,
      experience: user.experience,
      nextLevelExp: user.level * 1000,
      wins: user.stats.totalWins,
      losses: user.stats.totalLosses,
      winRate: user.stats.winRate,
      totalEarnings: user.stats.totalEarnings,
      rank: user.rank,
      clan: user.clan,
      achievements: [
        { id: 1, name: 'First Blood', description: 'Win your first PvP battle' },
        { id: 2, name: 'Stealth Master', description: 'Complete 50 stealth missions' },
        { id: 3, name: 'Clan Leader', description: 'Lead a clan to victory' }
      ]
    };

    res.json({
      success: true,
      data: playerStats
    });
  } catch (error) {
    console.error('Get player stats error:', error);
    res.status(500).json({ error: 'Failed to get player stats' });
  }
};

// Start mission
exports.startMission = async (req, res) => {
  try {
    const { missionId, playerId } = req.body;
    
    const mission = await Mission.findById(missionId);
    if (!mission) {
      return res.status(404).json({ error: 'Mission not found' });
    }

    const user = await User.findById(playerId);
    if (!user) {
      return res.status(404).json({ error: 'Player not found' });
    }

    if (user.level < mission.levelRequired) {
      return res.status(400).json({ error: 'Player level too low for this mission' });
    }

    const missionData = {
      id: mission._id,
      name: mission.name,
      difficulty: mission.difficulty,
      estimatedTime: mission.estimatedTime,
      rewards: mission.rewards,
      objectives: mission.objectives,
      startedAt: new Date().toISOString()
    };

    res.json({
      success: true,
      message: 'Mission started successfully',
      data: missionData
    });
  } catch (error) {
    console.error('Start mission error:', error);
    res.status(500).json({ error: 'Failed to start mission' });
  }
};

// Complete mission
exports.completeMission = async (req, res) => {
  try {
    const { missionId, playerId, success, timeCompleted } = req.body;
    
    const mission = await Mission.findById(missionId);
    const user = await User.findById(playerId);
    
    if (!mission || !user) {
      return res.status(404).json({ error: 'Mission or player not found' });
    }

    let rewards = {
      experience: success ? mission.rewards.experience : Math.floor(mission.rewards.experience * 0.2),
      ninjaTokens: success ? mission.rewards.ninjaTokens : Math.floor(mission.rewards.ninjaTokens * 0.2),
      items: success ? mission.rewards.items : []
    };

    // Speed bonus
    if (success && timeCompleted < 900) {
      rewards.bonus = { ninjaTokens: 50, reason: 'Speed bonus' };
      rewards.ninjaTokens += 50;
    }

    // Update user stats
    user.experience += rewards.experience;
    user.ninjaTokens += rewards.ninjaTokens;
    user.stats.missionsCompleted += success ? 1 : 0;
    user.stats.totalEarnings += rewards.ninjaTokens;

    // Level up check
    const newLevel = Math.floor(user.experience / 1000) + 1;
    if (newLevel > user.level) {
      user.level = newLevel;
    }

    await user.save();

    // Create battle record
    const battle = new Battle({
      player: playerId,
      type: 'PvE',
      result: success ? 'Victory' : 'Defeat',
      duration: `${Math.floor(timeCompleted / 60)}m ${timeCompleted % 60}s`,
      reward: rewards.ninjaTokens,
      mission: missionId
    });
    await battle.save();

    res.json({
      success: true,
      message: success ? 'Mission completed successfully!' : 'Mission failed, but you gained some experience',
      data: {
        missionId,
        success,
        rewards,
        completedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Complete mission error:', error);
    res.status(500).json({ error: 'Failed to complete mission' });
  }
};