import React from 'react';
import { Vote, Users, Coins, TrendingUp, Calendar, CheckCircle } from 'lucide-react';

const proposals = [
  {
    id: 1,
    title: 'New Clan Territory: Cyber Gardens',
    description: 'Expand the metaverse with a new high-tech garden district featuring advanced stealth mechanics',
    status: 'Active',
    votes: { for: 1247, against: 203 },
    timeLeft: '3 days',
    type: 'Territory'
  },
  {
    id: 2,
    title: 'Increase Staking Rewards by 15%',
    description: 'Boost ninja NFT staking rewards to encourage long-term holding and participation',
    status: 'Passed',
    votes: { for: 2156, against: 89 },
    timeLeft: 'Executed',
    type: 'Economics'
  },
  {
    id: 3,
    title: 'AI Companion System',
    description: 'Introduce AI-powered companion ninjas that learn from player behavior and assist in missions',
    status: 'Discussion',
    votes: { for: 0, against: 0 },
    timeLeft: '7 days',
    type: 'Feature'
  }
];

const stats = [
  { label: 'Total Voters', value: '12,847', icon: Users, color: 'text-cyan-400' },
  { label: 'Proposals Passed', value: '156', icon: CheckCircle, color: 'text-green-400' },
  { label: 'Total Tokens Staked', value: '2.8M', icon: Coins, color: 'text-yellow-400' },
  { label: 'Treasury Value', value: '$1.2M', icon: TrendingUp, color: 'text-purple-400' }
];

export const DAO = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20 animate-council-assemble">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 animate-governance-rise">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-stagger">
            <div className="animate-decree-unfurl">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                DAO Governance
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Shape the future of the ninja metaverse. Stake tokens, propose features, and vote on the direction of our decentralized world.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105">
                Join the Council
              </button>
            </div>
            <div className="relative animate-council-chamber">
              <img
                src="https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ninja Council"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black animate-stats-emerge">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-counter-roll">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 text-center animate-stat-popup`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Proposals */}
          <div className="space-y-6 animate-proposals-scroll">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Vote className="h-8 w-8 text-cyan-400 mr-3" />
              Active Proposals
            </h3>

            {proposals.map((proposal) => (
              <div
                key={proposal.id}
                className={`p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 animate-proposal-slide`}
                style={{ animationDelay: `${proposal.id * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 mb-2 md:mb-0">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      proposal.status === 'Active' ? 'bg-cyan-500/20 text-cyan-400' :
                      proposal.status === 'Passed' ? 'bg-green-500/20 text-green-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {proposal.status}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold">
                      {proposal.type}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {proposal.timeLeft}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-2">{proposal.title}</h4>
                <p className="text-gray-400 mb-4">{proposal.description}</p>

                {proposal.status !== 'Discussion' && (
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-green-400 font-semibold">For: {proposal.votes.for.toLocaleString()}</span>
                      <span className="text-red-400 font-semibold">Against: {proposal.votes.against.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-green-400 to-cyan-400 h-3 rounded-full"
                        style={{
                          width: `${(proposal.votes.for / (proposal.votes.for + proposal.votes.against)) * 100}%`
                        }}
                      ></div>
                    </div>
                  </div>
                )}

                {proposal.status === 'Active' && (
                  <div className="flex space-x-3">
                    <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg font-bold hover:from-green-400 hover:to-cyan-500 transition-all duration-300">
                      Vote For
                    </button>
                    <button className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg font-bold hover:from-red-400 hover:to-pink-500 transition-all duration-300">
                      Vote Against
                    </button>
                  </div>
                )}

                {proposal.status === 'Discussion' && (
                  <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-bold hover:from-purple-400 hover:to-pink-500 transition-all duration-300">
                    Join Discussion
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-create-proposal-glow">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105">
              Create Proposal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};