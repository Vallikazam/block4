const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners(); // Get the default signer

  console.log("Deploying contracts with account:", deployer.address);

  // Deploy ERC-20 Token
  const Token = await hre.ethers.getContractFactory("MyToken");
  const token = await Token.deploy(1000); // Initial supply of 1000 tokens
  await token.deployed();
  console.log("Token deployed to:", token.address);

  // Deploy Marketplace
  const Marketplace = await hre.ethers.getContractFactory("Marketplace");
  const marketplace = await Marketplace.deploy(token.address);
  await marketplace.deployed();
  console.log("Marketplace deployed to:", marketplace.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });