import { Sword, Users, Bot, Gamepad2, Play } from 'lucide-react';

const features = [
  {
    icon: Gamepad2,
    title: 'Immersive Gameplay',
    description: 'PvE & PvP missions, faction wars, stealth mechanics, and skill trees in stunning 3D environments',
    color: 'from-cyan-400 to-blue-500',
    image: "/public/image/game/Immersive_Gameplay.png"
  },
  {
    icon: Sword,
    title: 'Combat System',
    description: 'Master ancient ninja techniques with modern blockchain-powered weapon upgrades',
    color: 'from-purple-400 to-pink-500',
    image: "/public/image/game/Combat_System.png"
  },
  {
    icon: Bot,
    title: 'AI-Enhanced NPCs',
    description: 'Adaptive enemies and allies powered by machine learning that respond to your playstyle',
    color: 'from-green-400 to-teal-500',
    image: "/public/image/game/AI_Enhanced_NPCs.png"
  },
  {
    icon: Users,
    title: 'Clan Warfare',
    description: 'Form alliances, build territories, and engage in epic faction battles',
    color: 'from-indigo-400 to-purple-500',
    image: "/public/image/game/Clan_Warfare.png"
  }
];

export const Game = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20 animate-slash-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 animate-combat-enter">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-stagger">
            <div className="animate-sword-strike">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Game Features
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Experience the next generation of blockchain gaming with cutting-edge features designed for both traditional gamers and crypto natives.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <Play className="h-6 w-6" />
                <span>Play Demo</span>
              </button>
            </div>
            <div className="relative animate-ninja-flip">
              <img
                src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ninja Combat"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black animate-stealth-reveal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-stagger-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 animate-weapon-draw`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gameplay Modes */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 animate-battle-formation">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Gameplay Modes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-formation-deploy">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden animate-mode-reveal">
              <img
                src="https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="PvE Missions"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">PvE Missions</h3>
                <p className="text-gray-400">Embark on epic quests and defeat AI-powered enemies in immersive storylines.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden animate-mode-reveal animation-delay-200">
              <img
                src="https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="PvP Battles"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">PvP Battles</h3>
                <p className="text-gray-400">Challenge other ninjas in intense real-time combat with ranked matchmaking.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden animate-mode-reveal animation-delay-400">
              <img
                src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Clan Wars"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Clan Wars</h3>
                <p className="text-gray-400">Unite with fellow ninjas and dominate territories in massive faction battles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};