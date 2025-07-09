import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sword, Menu, X, Wallet } from 'lucide-react';
import { useAppKit, useAppKitAccount } from '@reown/appkit/react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { address, isConnected } = useAppKitAccount()

  const { open } = useAppKit();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/game', label: 'Game' },
    { path: '/nfts', label: 'NFTs' },
    { path: '/dao', label: 'DAO' },
    { path: '/earn', label: 'Earn' },
    { path: '/about', label: 'About' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Sword className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              NinjaDojo
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors ${location.pathname === item.path
                  ? 'text-cyan-400'
                  : 'text-gray-300 hover:text-cyan-400'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {!isConnected ? <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 flex items-center space-x-2" onClick={() => open()}>
              <Wallet className="h-4 w-4" />
              <span>Connect Wallet</span>
            </button> :
              <appkit-button />}
          </div>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-cyan-500/20">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-colors ${location.pathname === item.path
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button className="mt-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold flex items-center space-x-2">
                <Wallet className="h-4 w-4" />
                <span>Connect Wallet</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};