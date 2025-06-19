import React from 'react';
import { Target, Users, Zap, Shield, Globe, Code } from 'lucide-react';

const teamMembers = [
  {
    name: 'Akira Tanaka',
    role: 'Lead Game Designer',
    image: 'https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Former Ubisoft designer with 10+ years in AAA gaming'
  },
  {
    name: 'Sarah Chen',
    role: 'Blockchain Architect',
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Ex-Ethereum Foundation, Web3 infrastructure expert'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'AI/ML Engineer',
    image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'PhD in Machine Learning, former Google DeepMind'
  }
];

const values = [
  {
    icon: Target,
    title: 'Gamify Decentralization',
    description: 'Deliver an AAA-level game built on blockchain rails, where every move has meaning and every asset has value.',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: Users,
    title: 'Empower Ninjas',
    description: 'Give players control through NFT ownership, DAO governance, and fair play-to-earn mechanics.',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: Code,
    title: 'Fuse Art & Code',
    description: 'Combine elite design, thrilling mechanics, and AI to make gameplay as graceful and lethal as a shadow strike.',
    color: 'from-green-400 to-teal-500'
  },
  {
    icon: Globe,
    title: 'Bridge Web2 and Web3',
    description: 'Onboard both traditional gamers and crypto natives into a seamless, accessible, and secure ninja world.',
    color: 'from-yellow-400 to-orange-500'
  }
];

export const About = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20 animate-scroll-unfurl">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 animate-wisdom-reveal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-stagger">
            <div className="animate-story-tell">
              <h1 className="text-5xl font-bold pb-3 mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                About NinjaDojo
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                We're building the legendary ninja metaverse where gameplay is not only exhilarating and immersive — but also empowering, community-driven, and decentralized.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-cyan-400" />
                  <span className="text-gray-300">Blockchain-powered ownership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-6 w-6 text-purple-400" />
                  <span className="text-gray-300">AI-enhanced gameplay</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-yellow-400" />
                  <span className="text-gray-300">Community governance</span>
                </div>
              </div>
            </div>
            <div className="relative animate-vision-manifest">
              <img
                src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ninja Dojo Vision"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black animate-values-emerge">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Our Mission & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-values-grid">
            {values.map((value, index) => (
              <div
                key={index}
                className={`p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 animate-value-card`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} p-4 mb-6`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Roadmap */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black animate-roadmap-unfold">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Development Roadmap
            </h2>
          </div>

          <div className="space-y-8 animate-timeline-draw">
            <div className="flex items-start space-x-6 animate-milestone-appear">
              <div className="w-4 h-4 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Q1 2025 - Alpha Launch</h3>
                <p className="text-gray-400">Core gameplay mechanics, basic NFT integration, and closed alpha testing</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 animate-milestone-appear animation-delay-200">
              <div className="w-4 h-4 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Q2 2025 - Beta Release</h3>
                <p className="text-gray-400">Full marketplace, DAO governance, and public beta with play-to-earn mechanics</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 animate-milestone-appear animation-delay-400">
              <div className="w-4 h-4 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Q3 2025 - Full Launch</h3>
                <p className="text-gray-400">Complete game launch with AI NPCs, cross-platform support, and mobile app</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 animate-milestone-appear animation-delay-600">
              <div className="w-4 h-4 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Q4 2025 - VR Expansion</h3>
                <p className="text-gray-400">Virtual reality support and advanced metaverse features</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};