import React from 'react';
import { Play, Zap, Shield } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
      <div className=""></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              NINJA DOJO
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-4">
              The Ultimate Web3 Ninja Metaverse
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Enter a legendary ninja world where gameplay meets blockchain. Own, battle, and earn in the most immersive Web3 gaming experience ever created.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <Play className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              <span>Enter the Dojo</span>
            </button>
            <button className="px-8 py-4 border-2 border-cyan-500 rounded-xl font-bold text-lg text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">
              Watch Trailer
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="group p-6 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
              <Zap className="h-12 w-12 text-cyan-400 mb-4 mx-auto group-hover:animate-pulse" />
              <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Experience seamless gameplay with instant blockchain transactions</p>
            </div>
            <div className="group p-6 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
              <Shield className="h-12 w-12 text-purple-400 mb-4 mx-auto group-hover:animate-pulse" />
              <h3 className="text-xl font-bold text-white mb-2">Secure & Decentralized</h3>
              <p className="text-gray-400">Your assets are truly yours with blockchain-backed ownership</p>
            </div>
            <div className="group p-6 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
              <Play className="h-12 w-12 text-pink-400 mb-4 mx-auto group-hover:animate-pulse" />
              <h3 className="text-xl font-bold text-white mb-2">Play to Earn</h3>
              <p className="text-gray-400">Turn your ninja skills into real value and cryptocurrency rewards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};