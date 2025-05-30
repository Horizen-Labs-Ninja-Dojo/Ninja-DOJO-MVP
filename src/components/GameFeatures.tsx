import React from 'react';
import { Sword, Users, Bot, Gamepad2, Trophy, Coins } from 'lucide-react';

const features = [
  {
    icon: Gamepad2,
    title: 'Immersive Gameplay',
    description: 'PvE & PvP missions, faction wars, stealth mechanics, and skill trees in stunning 3D environments',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: Sword,
    title: 'NFT Asset Ownership',
    description: 'Every sword, skill, land piece, and clan membership is a tradable, upgradable NFT',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: Coins,
    title: 'Play-to-Earn Economy',
    description: 'Earn tokens through battles, quests, crafting, and staking your valuable ninja NFTs',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Bot,
    title: 'AI-Enhanced NPCs',
    description: 'Adaptive enemies and allies powered by machine learning that respond to your playstyle',
    color: 'from-green-400 to-teal-500'
  },
  {
    icon: Users,
    title: 'DAO Governance',
    description: 'Stake tokens, propose features, vote on story arcs, and become a true village leader',
    color: 'from-indigo-400 to-purple-500'
  },
  {
    icon: Trophy,
    title: 'Cross-Platform',
    description: 'Available on web, PC, mobile with seamless wallet integration and future VR expansion',
    color: 'from-pink-400 to-red-500'
  }
];

export const GameFeatures = () => {
  return (
    <section id="game" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Game Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the next generation of blockchain gaming with cutting-edge features designed for both traditional gamers and crypto natives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};