import { useState } from "react";
import { ethers } from "ethers";

const ConnectWallet = ({ setAccount }) => {
  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <button onClick={connectWallet}>
      Connect Wallet
    </button>
  );
};

export default ConnectWallet;