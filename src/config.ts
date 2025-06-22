// import { createConfig } from 'wagmi'
// import http from '@wagmi/core'
// import { base, mainnet,  } from 'wagmi/chains'
// import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

// const projectId = '<WALLETCONNECT_PROJECT_ID>'

// export const config = createConfig({
//   chains: [mainnet, base],
//   connectors: [
//     injected(),
//     walletConnect({ projectId }),
//     metaMask(),
//     safe(),
//   ],
//   transports: {
//     [mainnet.id]: http(),
//     [base.id]: http(),
//   },
// })