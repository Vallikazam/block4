import { useState, useEffect } from "react";
import { ethers } from "ethers";

const TokenBalance = ({ account, tokenAddress, tokenABI }) => {
  const [balance, setBalance] = useState(0);

  const fetchBalance = async () => {
    if (account) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const tokenContract = new ethers.Contract(tokenAddress, tokenABI, provider);
      const balance = await tokenContract.balanceOf(account);
      setBalance(ethers.utils.formatUnits(balance, 18));
    }
  };

  useEffect(() => {
    fetchBalance();
  }, [account]);

  return (
    <div>
      <p>Token Balance: {balance}</p>
      <button onClick={fetchBalance}>Refresh</button>
    </div>
  );
};

export default TokenBalance;