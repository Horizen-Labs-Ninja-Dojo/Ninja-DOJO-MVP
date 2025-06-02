import React from 'react';
import { Star, TrendingUp, Shield, Zap, Filter, Search } from 'lucide-react';

const nftItems = [
  {
    id: 1,
    name: 'Shadow Blade Katana',
    rarity: 'Legendary',
    price: '2.5 ETH',
    image: '/public/image/nfts/Shadow_Blade_Katana.png',
    stats: { attack: 95, speed: 88, stealth: 92 },
    rarityColor: 'from-yellow-400 to-orange-500'
  },
  {
    id: 2,
    name: 'Cyber Ninja Armor',
    rarity: 'Epic',
    price: '1.8 ETH',
    image: '/public/image/nfts/Cyber_Ninja_Armor_image.png',
    stats: { defense: 90, agility: 75, tech: 85 },
    rarityColor: 'from-purple-400 to-pink-500'
  },
  {
    id: 3,
    name: 'Mystic Throwing Stars',
    rarity: 'Rare',
    price: '0.9 ETH',
    image: '/public/image/nfts/Mystic_Throwing_Stars.png',
    stats: { accuracy: 93, damage: 78, range: 88 },
    rarityColor: 'from-blue-400 to-cyan-500'
  },
  {
    id: 4,
    name: 'Dragon Scale Mask',
    rarity: 'Epic',
    price: '1.2 ETH',
    image: '/public/image/nfts/Dragon_scale_mask.png',
    stats: { stealth: 88, vision: 92, intimidation: 85 },
    rarityColor: 'from-purple-400 to-pink-500'
  },
  {
    id: 5,
    name: 'Lightning Gauntlets',
    rarity: 'Rare',
    price: '0.7 ETH',
    image: '/public/image/nfts/Lightning_Gauntlets.png',
    stats: { speed: 90, electric: 85, grip: 88 },
    rarityColor: 'from-blue-400 to-cyan-500'
  },
  {
    id: 6,
    name: 'Phantom Cloak',
    rarity: 'Legendary',
    price: '3.1 ETH',
    image: '/public/image/nfts/Phantom_Cloak.png',
    stats: { stealth: 98, mobility: 90, defense: 85 },
    rarityColor: 'from-yellow-400 to-orange-500'
  }
];

export const NFTs = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20 animate-treasure-reveal">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 animate-vault-open">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-glow-pulse">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              NFT Marketplace
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Own, trade, and upgrade legendary ninja weapons and equipment. Every item is a unique NFT with verified ownership and stats.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-2xl mx-auto animate-search-appear">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search NFTs..."
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <button className="px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white hover:border-cyan-400 transition-colors flex items-center space-x-2">
              <Filter className="h-5 w-5" />
              <span>Filter</span>
            </button>
          </div>
        </div>
      </section>

      {/* NFT Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black animate-collection-display">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-nft-cascade">
            {nftItems.map((item) => (
              <div
                key={item.id}
                className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden animate-nft-materialize`}
                style={{ animationDelay: `${item.id * 150}ms` }}
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

          <div className="text-center mt-12 animate-load-more-bounce">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl font-bold text-lg hover:from-purple-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-105">
              Load More NFTs
            </button>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 animate-legendary-entrance">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Collection: Ancient Legends
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-stagger">
            <div className="animate-artifact-description">
              <h3 className="text-3xl font-bold text-white mb-6">Legendary Ninja Artifacts</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Discover the most powerful and rare ninja equipment ever forged. These legendary artifacts carry the spirits of ancient masters and grant extraordinary abilities to their wielders.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <Zap className="h-5 w-5 text-cyan-400 mr-3" />
                  Unique special abilities and passive bonuses
                </li>
                <li className="flex items-center text-gray-300">
                  <Shield className="h-5 w-5 text-purple-400 mr-3" />
                  Verified authenticity and ownership
                </li>
                <li className="flex items-center text-gray-300">
                  <Star className="h-5 w-5 text-yellow-400 mr-3" />
                  Limited edition with increasing rarity
                </li>
              </ul>
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105">
                Explore Collection
              </button>
            </div>
            <div className="relative animate-artifact-showcase">
              <img
                src="/public/image/nfts/legendary_ninja_Artifacts.png"
                alt="Ancient Ninja Artifacts"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};