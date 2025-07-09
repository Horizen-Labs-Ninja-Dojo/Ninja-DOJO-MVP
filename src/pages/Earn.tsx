import React from 'react';
import { Coins, TrendingUp, Target, Users, Trophy, Zap } from 'lucide-react';

const earningMethods = [
  {
    icon: Target,
    title: 'Mission Rewards',
    description: 'Complete PvE missions and quests',
    earning: '50-200 NINJA/day',
    difficulty: 'Easy',
    color: 'from-green-400 to-emerald-500',
    image: '/public/image/earn/mission_rewards.png'
  },
  {
    icon: Users,
    title: 'PvP Battles',
    description: 'Defeat other players in combat',
    earning: '100-500 NINJA/win',
    difficulty: 'Medium',
    color: 'from-cyan-400 to-blue-500',
    image: '/public/image/earn/pbp_battles.png'
  },
  {
    icon: Trophy,
    title: 'Tournament Champions',
    description: 'Win weekly ninja tournaments',
    earning: '1000-5000 NINJA',
    difficulty: 'Hard',
    color: 'from-yellow-400 to-orange-500',
    image: '/public/image/earn/tournament_champions.png'
  },
  {
    icon: Zap,
    title: 'NFT Staking',
    description: 'Stake ninja NFTs for passive income',
    earning: '20-100 NINJA/day',
    difficulty: 'Passive',
    color: 'from-purple-400 to-pink-500',
    image: '/public/image/earn/nft_staking.png'
  }
];

const leaderboard = [
  { rank: 1, name: 'ShadowMaster', earnings: '15,432 NINJA', avatar: '🥷' },
  { rank: 2, name: 'CyberBlade', earnings: '12,891 NINJA', avatar: '⚔️' },
  { rank: 3, name: 'StealthNinja', earnings: '11,567 NINJA', avatar: '🗡️' },
  { rank: 4, name: 'MysticWarrior', earnings: '9,234 NINJA', avatar: '🌟' },
  { rank: 5, name: 'ThunderStrike', earnings: '8,765 NINJA', avatar: '⚡' }
];

export const Earn = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20 animate-gold-rain">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 animate-treasure-hunt">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-stagger">
            <div className="animate-coin-flip">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Play-to-Earn Economy
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Turn your ninja skills into real value. Multiple earning mechanisms ensure every moment in the dojo generates rewards.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105">
                Start Earning Today
              </button>
            </div>
            <div className="relative animate-earning-showcase">
              <img
                src="/public/image/earn/earn.png"
                alt="Ninja Earning"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Earning Methods */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black animate-methods-deploy">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-stagger">
            {/* Methods */}
            <div className="animate-method-cards">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Coins className="h-8 w-8 text-yellow-400 mr-3" />
                Earning Methods
              </h3>
              <div className="space-y-6 animate-method-stack">
                {earningMethods.map((method, index) => (
                  <div
                    key={index}
                    className={`p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 animate-method-appear`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={method.image}
                          alt={method.title}
                          className="w-full h-full object-cover"
                        />
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
            <div className="animate-leaderboard-rise">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <TrendingUp className="h-8 w-8 text-cyan-400 mr-3" />
                Top Earners
              </h3>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 animate-board-glow">
                <div className="space-y-4 animate-rank-cascade">
                  {leaderboard.map((player, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 animate-rank-entry ${
                        index === 0 ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30' :
                        index === 1 ? 'bg-gradient-to-r from-gray-400/20 to-gray-500/20 border border-gray-400/30' :
                        index === 2 ? 'bg-gradient-to-r from-amber-600/20 to-amber-700/20 border border-amber-600/30' :
                        'bg-gray-800/30 hover:bg-gray-700/30'
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
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

                <div className="mt-6 pt-6 border-t border-gray-700 animate-your-rank-highlight">
                  <div className="text-center">
                    <div className="text-gray-400 mb-2">Your Current Earnings</div>
                    <div className="text-2xl font-bold text-cyan-400">2,456 NINJA</div>
                    <div className="text-sm text-gray-400">Rank #47</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 animate-final-call">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl border border-yellow-400/20 p-8 max-w-4xl mx-auto animate-cta-glow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-stagger">
              <div className="animate-cta-text">
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Earning?</h3>
                <p className="text-gray-400 mb-6">
                  Join thousands of ninjas already earning cryptocurrency through gameplay. No experience required - just pure ninja skills.
                </p>
                <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105">
                  Start Playing & Earning
                </button>
              </div>
              <div className="relative animate-cta-image">
                <img
                  src="/public/image/earn/start_section.jpeg"
                  alt="Ninja Training"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};