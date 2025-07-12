import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Zap, Shield, ArrowRight } from 'lucide-react';

// Feature Cards (Why Choose NinjaDojo)
const features = [
  {
    icon: <Zap className="h-12 w-12 text-cyan-400 mb-4 group-hover:animate-pulse" />,
    title: "Lightning Fast",
    description: "Experience seamless gameplay with instant blockchain transactions",
    link: "/game",
    linkText: "Learn more",
  },
  {
    icon: <Shield className="h-12 w-12 text-purple-400 mb-4 group-hover:animate-pulse" />,
    title: "Secure & Decentralized",
    description: "Your assets are truly yours with blockchain-backed ownership",
    link: "/nfts",
    linkText: "View NFTs",
  },
  {
    icon: <Play className="h-12 w-12 text-pink-400 mb-4 group-hover:animate-pulse" />,
    title: "Play to Earn",
    description: "Turn your ninja skills into real value and cryptocurrency rewards",
    link: "/earn",
    linkText: "Start earning",
  },
];

// Core Game Features
const coreFeatures = [
  {
    title: "Immersive Ninja Gameplay",
    desc: "PvE & PvP missions, stealth kills, and faction wars in stunning 3D cyberpunk worlds.",
  },
  {
    title: "NFT Asset Ownership",
    desc: "Swords, land, clans — every item is a tradable, evolvable NFT you truly own.",
  },
  {
    title: "Play-to-Earn Economy",
    desc: "Earn tokens through battles, quests, and staking ninja NFTs.",
  },
  {
    title: "AI-Enhanced NPCs",
    desc: "Enemies that learn from your tactics. Allies that evolve with your journey.",
  },
  {
    title: "Cross-Platform Access",
    desc: "Play on web, PC, and mobile — VR expansion on the horizon.",
  },
  {
    title: "DAO Governance",
    desc: "Propose, vote, and shape the game’s future through token-based decision making.",
  },
];

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
                  src="/image/home/hero_section.png"
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
            {features.map((feat, i) => (
              <div
                key={i}
                className="group p-8 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 animate-bounce-in"
              >
                {feat.icon}
                <h3 className="text-xl font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-gray-400 mb-4">{feat.description}</p>
                <Link to={feat.link} className="text-cyan-400 hover:text-cyan-300 flex items-center">
                  {feat.linkText} <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-black text-white animate-fade-in-up border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We're building more than a game — we're building a decentralized ninja universe powered by players.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-6 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl border border-cyan-500/10">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To create a legendary ninja metaverse where gameplay is not only exhilarating and immersive — but also empowering, community-driven, and decentralized. Players don’t just play; they own, shape, and earn from the world they inhabit.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl border border-purple-500/10">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Our Mission</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-400 leading-relaxed">
                <li>Gamify Decentralization with AAA-level blockchain gameplay.</li>
                <li>Empower Ninjas with NFT ownership, DAO voting, and P2E mechanics.</li>
                <li>Fuse Art & Code into graceful, lethal gameplay.</li>
                <li>Bridge Web2 & Web3 with accessible onboarding for all gamers.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Game Features */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black animate-fade-in-up border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent mb-4">
              Core Game Features
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Every ninja in our world fights with tools of power, technology, and true digital ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, i) => (
              <div
                key={i}
                className={`group p-6 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-2xl border border-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 animate-fade-in animation-delay-${i * 100}`}
              >
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
