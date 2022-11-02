# Eneagon

Dashboard to onboard and coordinate developers and stakeholders into retroactive public goods funding

Developed at [ETH Online 2022](https://ethglobal.com/showcase/eneagon-0hf0o)  

## About
Eneagon is a public template for a dashboard that lets mint public goods projects as NFTs, helps to coordinate development milestones, and matches developers' and stakeholders' objectives with governance for retroactive public good funding.

Any development team or organization can use Eneagon to manage their own projects, by fetching data from contracts deployed on Ethereum Mainnet, Optimism, and Polygon networks, and a GitHub repository tied to GitHub Milestones to define the pending issues and tasks for 3 development stages.

Stakeholders will be able to mint soul bounded badges to donate funds on the 3 stages, and get token rewards if they have a worldcoin ID once the milestones and tasks are completed. Stakeholders will be able to vote on every stage to decide when to retroactive fund the developers.  
  
## How it's made

Eneagon was built with a next.js app, it integrates ENS to identify ethereum addresses with a domain NFT, it uses IPFS through NFT storage to store project logos, it integrates worldcoin id to prove Stakeholders' personhood and delivers a token stream with superfluid to human soul bounded badge holders. Contracts were deployed on Optimism and Polygon testnets and it uses the graph for a stakeholders leaderboard.


## Contracts
- [Project NFT on Optimism testnet](https://blockscout.com/optimism/goerli/address/0xfa343B1755a7197B2164B8cA55CF425AEE6C6efA)  
- [Project NFT on Polygon testnet](https://mumbai.polygonscan.com/address/0xba7fcaff6b3304e419acaaefb2c06aa9f96713a3)  
- [Soulbounded Badge on Optimism testnet](https://goerli.etherscan.io/address/0x8d462aa25b12D7C3be7E3D5e13F579c914ABEe8B)  
- [Soulbounded Badge on Polygon testnet](https://mumbai.polygonscan.com/address/0x7B688c975161b3bd42Dec27472e02C5636f308C4#code)  



### Built with:

- Next.js  
- Gihub API  
- Optimisim  
- Superfluid  
- Worldcoin  
- The Graph  
- Polygon    
- IPFS  
- Tailwind CSS  




### Dev Environment

Working with Optimism Goerli testnet and Polygon Mumbai testnet contracts (further update to deploy your own contracts)

1. Install dependencies

```bash
yarn install
```

2. Start developmment

```bash
yarn dev
```

3. 📱 Open http://localhost:3000 to see the app


