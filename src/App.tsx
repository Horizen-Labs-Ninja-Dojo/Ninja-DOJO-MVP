import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Game } from './pages/Game';
import { NFTs } from './pages/NFTs';
import { DAO } from './pages/DAO';
import { Earn } from './pages/Earn';
import { About } from './pages/About';
// import { WagmiProvider, useAccount } from 'wagmi'
// import { config } from './config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { Account } from './components/accounts'
// import { WalletOptions } from './components/wallet-options'

const queryClient = new QueryClient()



function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="min-h-screen bg-black text-white">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
              <Route path="/nfts" element={<NFTs />} />
              <Route path="/dao" element={<DAO />} />
              <Route path="/earn" element={<Earn />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </QueryClientProvider>
  );
}

export default App;