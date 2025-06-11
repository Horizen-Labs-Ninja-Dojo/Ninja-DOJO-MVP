import React from 'react';
import { Coins, TrendingUp, Target, Users, Trophy, Zap } from 'lucide-react';

const earningMethods = [
  {
    icon: Target,
    title: 'Mission Rewards',
    description: 'Complete PvE missions and quests',
    earning: '50-200 NINJA/day',
    difficulty: 'Easy',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Users,
    title: 'PvP Battles',
    description: 'Defeat other players in combat',
    earning: '100-500 NINJA/win',
    difficulty: 'Medium',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: Trophy,
    title: 'Tournament Champions',
    description: 'Win weekly ninja tournaments',
    earning: '1000-5000 NINJA',
    difficulty: 'Hard',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Zap,
    title: 'NFT Staking',
    description: 'Stake ninja NFTs for passive income',
    earning: '20-100 NINJA/day',
    difficulty: 'Passive',
    color: 'from-purple-400 to-pink-500'
  }
];

const leaderboard = [
  { rank: 1, name: 'ShadowMaster', earnings: '15,432 NINJA', avatar: '🥷' },
  { rank: 2, name: 'CyberBlade', earnings: '12,891 NINJA', avatar: '⚔️' },
  { rank: 3, name: 'StealthNinja', earnings: '11,567 NINJA', avatar: '🗡️' },
  { rank: 4, name: 'MysticWarrior', earnings: '9,234 NINJA', avatar: '🌟' },
  { rank: 5, name: 'ThunderStrike', earnings: '8,765 NINJA', avatar: '⚡' }
];

export const PlayToEarn = () => {
  return (
    <section id="earn" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Play-to-Earn Economy
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Turn your ninja skills into real value. Multiple earning mechanisms ensure every moment in the dojo generates rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Earning Methods */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Coins className="h-8 w-8 text-yellow-400 mr-3" />
              Earning Methods
            </h3>
            <div className="space-y-6">
              {earningMethods.map((method, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} p-3 flex-shrink-0`}>
                      <method.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-white">{method.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                          method.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                          method.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          method.difficulty === 'Hard' ? 'bg-red-500/20 text-red-400' :
                          'bg-purple-500/20 text-purple-400'
                        }`}>
                          {method.difficulty}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-2">{method.description}</p>
                      <div className="flex items-center text-yellow-400 font-bold">
                        <Coins className="h-4 w-4 mr-1" />
                        {method.earning}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <TrendingUp className="h-8 w-8 text-cyan-400 mr-3" />
              Top Earners
            </h3>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6">
              <div className="space-y-4">
                {leaderboard.map((player, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                      index === 0 ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30' :
                      index === 1 ? 'bg-gradient-to-r from-gray-400/20 to-gray-500/20 border border-gray-400/30' :
                      index === 2 ? 'bg-gradient-to-r from-amber-600/20 to-amber-700/20 border border-amber-600/30' :
                      'bg-gray-800/30 hover:bg-gray-700/30'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        index === 0 ? 'bg-yellow-500 text-black' :
                        index === 1 ? 'bg-gray-400 text-black' :
                        index === 2 ? 'bg-amber-600 text-white' :
                        'bg-gray-600 text-white'
                      }`}>
                        {player.rank}
                      </div>
                      <div className="text-2xl">{player.avatar}</div>
                      <div>
                        <div className="font-bold text-white">{player.name}</div>
                        <div className="text-sm text-gray-400">This Week</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-yellow-400">{player.earnings}</div>
                      <div className="text-sm text-gray-400 flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +12%
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-gray-400 mb-2">Your Current Earnings</div>
                  <div className="text-2xl font-bold text-cyan-400">2,456 NINJA</div>
                  <div className="text-sm text-gray-400">Rank #47</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl border border-yellow-400/20 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Start Earning Today</h3>
            <p className="text-gray-400 mb-6">
              Join thousands of ninjas already earning cryptocurrency through gameplay. No experience required - just pure ninja skills.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105">
              Start Playing & Earning
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};