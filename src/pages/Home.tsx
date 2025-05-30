import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Zap, Shield, ArrowRight } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white animate-fade-in">
      {/* Hero Section */}
      <section className="min-h-screen bg-black relative overflow-hidden flex items-center animate-slide-up">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2300F5FF%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-stagger">
            <div className="animate-slide-in-left">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                NINJA DOJO
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
                The Ultimate Web3 Ninja Metaverse
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Enter a legendary ninja world where gameplay meets blockchain. Own, battle, and earn in the most immersive Web3 gaming experience ever created.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/game"
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Play className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  <span>Enter the Dojo</span>
                </Link>
                <button className="px-8 py-4 border-2 border-cyan-500 rounded-xl font-bold text-lg text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">
                  Watch Trailer
                </button>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative z-10">
                <img
                  src="/public/image/home/hero_section.png"
                  alt="Cyber Ninja Warrior"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 animate-fade-in-up">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Why Choose NinjaDojo?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-stagger-children">
            <div className="group p-8 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 animate-bounce-in">
              <Zap className="h-12 w-12 text-cyan-400 mb-4 group-hover:animate-pulse" />
              <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-400 mb-4">Experience seamless gameplay with instant blockchain transactions</p>
              <Link to="/game" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 animate-bounce-in animation-delay-200">
              <Shield className="h-12 w-12 text-purple-400 mb-4 group-hover:animate-pulse" />
              <h3 className="text-xl font-bold text-white mb-2">Secure & Decentralized</h3>
              <p className="text-gray-400 mb-4">Your assets are truly yours with blockchain-backed ownership</p>
              <Link to="/nfts" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                View NFTs <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 animate-bounce-in animation-delay-400">
              <Play className="h-12 w-12 text-pink-400 mb-4 group-hover:animate-pulse" />
              <h3 className="text-xl font-bold text-white mb-2">Play to Earn</h3>
              <p className="text-gray-400 mb-4">Turn your ninja skills into real value and cryptocurrency rewards</p>
              <Link to="/earn" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                Start earning <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};