import React from 'react';
import { Target, Users, Zap, Shield, Globe, Code } from 'lucide-react';

const teamMembers = [
  {
    name: 'Marcus Rodriguez',
    role: 'Lead Game Designer',
    image: '/image/about/Marcus_Rodriguez.jpg',
    description: 'Former Ubisoft designer with 10+ years in AAA gaming'
  },
  {
    name: 'Sarah Chen',
    role: 'Blockchain Architect',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Ex-Ethereum Foundation, Web3 infrastructure expert'
  },
  {
    name: 'Mike Starr',
    role: 'AI/ML Engineer',
    image: '/image/about/Mike_Starr.jpg',
    description: 'PhD in Machine Learning, former Google DeepMind'
  },
  {
    name: 'Leila Nguyen',
    role: 'Creative Director',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Award-winning visual artist and storyteller with a focus on immersive worlds'
  },
  {
    name: 'Diego Marquez',
    role: 'Smart Contract Developer',
    image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Solidity expert with DeFi protocol experience and open-source contributor'
  },
  {
    name: 'Isabella Russo',
    role: 'Community & DAO Strategist',
    image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Former Reddit community lead, specializes in governance and engagement models'
  }
]


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
                src="/image/about/about.png"
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

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 animate-team-assemble">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Meet the Ninja Masters
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our world-class team of developers, designers, and technologists are bringing this vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-team-formation">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 overflow-hidden animate-member-intro`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-400">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};