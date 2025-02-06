require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.20", // Update this to match the pragma in your contracts
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545", // Default Hardhat network URL
    },
  },
};