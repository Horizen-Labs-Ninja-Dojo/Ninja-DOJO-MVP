import React from 'react';
import { Sword, Twitter, MessageCircle, Github, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-cyan-500/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sword className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                NinjaDojo
              </span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              The ultimate Web3 ninja metaverse where gameplay meets blockchain. Own, battle, and earn in the most immersive gaming experience ever created.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://x.com/xdemocle" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <MessageCircle className="h-6 w-6" />
              </a>
              <a href="https://github.com/loopcrewhub" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="mail:hello@theweb3.ninja" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Game</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Play Now</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Download</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">System Requirements</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Community */}
          {/* <div>
            <h3 className="text-white font-bold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Discord</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Telegram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Reddit</a></li>
            </ul>
          </div> */}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 NinjaDojo. All rights reserved. Built with ⚔️ by the ninja community.
          </p>
        </div>
      </div>
    </footer>
  );
};