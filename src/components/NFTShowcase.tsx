import React from 'react';
import { Star, TrendingUp, Shield, Zap } from 'lucide-react';

const nftItems = [
  {
    id: 1,
    name: 'Shadow Blade Katana',
    rarity: 'Legendary',
    price: '2.5 ETH',
    image: 'https://images.pexels.com/photos/8534560/pexels-photo-8534560.jpeg?auto=compress&cs=tinysrgb&w=400',
    stats: { attack: 95, speed: 88, stealth: 92 },
    rarityColor: 'from-yellow-400 to-orange-500'
  },
  {
    id: 2,
    name: 'Cyber Ninja Armor',
    rarity: 'Epic',
    price: '1.8 ETH',
    image: 'https://images.pexels.com/photos/7654474/pexels-photo-7654474.jpeg?auto=compress&cs=tinysrgb&w=400',
    stats: { defense: 90, agility: 75, tech: 85 },
    rarityColor: 'from-purple-400 to-pink-500'
  },
  {
    id: 3,
    name: 'Mystic Throwing Stars',
    rarity: 'Rare',
    price: '0.9 ETH',
    image: 'https://images.pexels.com/photos/8892559/pexels-photo-8892559.jpeg?auto=compress&cs=tinysrgb&w=400',
    stats: { accuracy: 93, damage: 78, range: 88 },
    rarityColor: 'from-blue-400 to-cyan-500'
  }
];

export const NFTShowcase = () => {
  return (
    <section id="nfts" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            NFT Marketplace
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Own, trade, and upgrade legendary ninja weapons and equipment. Every item is a unique NFT with verified ownership and stats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nftItems.map((item) => (
            <div
              key={item.id}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${item.rarityColor} text-white text-sm font-bold`}>
                  {item.rarity}
                </div>
                <div className="absolute top-4 right-4 bg-black/70 rounded-full p-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {item.name}
                </h3>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{item.price}</span>
                  <div className="flex items-center space-x-1 text-green-400">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm">+12%</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {Object.entries(item.stats).map(([stat, value]) => (
                    <div key={stat} className="flex items-center justify-between">
                      <span className="text-gray-400 capitalize">{stat}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
                            style={{ width: `${value}%` }}
                          ></div>
                        </div>
                        <span className="text-white text-sm font-bold">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-bold hover:from-purple-400 hover:to-pink-500 transition-all duration-300">
                    Buy Now
                  </button>
                  <button className="px-4 py-2 border border-purple-500 rounded-lg text-purple-400 hover:bg-purple-500/10 transition-all duration-300">
                    <Shield className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl font-bold text-lg hover:from-purple-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-105">
            View All NFTs
          </button>
        </div>
      </div>
    </section>
  );
};