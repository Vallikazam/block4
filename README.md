# AI Model Marketplace

## Overview
This project is a decentralized marketplace where users can buy and sell AI models using an ERC-20 token.

## Features
- User Authentication and Wallet Integration: Users can connect their wallets via Metamask to interact with the blockchain securely.
- Token Balance Display: Displays the user's ERC-20 token balance in real-time and allows balance refresh.
- AI Model Listings: Sellers can list AI models with a name, description, price in ERC-20 tokens, and a secure model file link.
- Model Purchase Flow: Buyers can view detailed AI model information, initiate purchases, and transfer the required amount of ERC-20 tokens to the seller.
- Secure Transactions: All transactions occur on the blockchain, ensuring transparency and immutability.
- Decentralized Marketplace: Eliminates intermediaries, allowing direct transactions between buyers and sellers.
- Easy Deployment: Smart contracts are built using Solidity and deployed to Ethereum testnets or mainnet.

## Installation

1. Clone the repository:
   bash
   git clone https://github.com/YOUR_GITHUB_REPO.git
   cd AI-Model-Marketplace
   
2. Install dependencies:
   bash
   npm install
   
3. Deploy smart contract (Replace YOUR_INFURA_URL, YOUR_PRIVATE_KEY):
   bash
   npx hardhat run scripts/deploy.js --network goerli
   
4. Update app.js with deployed contract addresses.
5. Run the app:
   bash
   npm start
   

## Screenshots
(Include screenshots or GIFs of the working marketplace interface)

## License
[MIT License](LICENSE)

## References
- [Metamask Integration](https://docs.web3js.org/guides/dapps/metamask-vanilla/)
- [OpenZeppelin Contracts](https://wizard.openzeppelin.com/)
