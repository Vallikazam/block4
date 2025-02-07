import { useState, useEffect } from "react";
import { ethers } from "ethers";

const AIModelList = ({ marketplaceAddress, marketplaceABI }) => {
  const [listings, setListings] = useState([]);

  const fetchListings = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const marketplaceContract = new ethers.Contract(marketplaceAddress, marketplaceABI, provider);
    const count = await marketplaceContract.modelCount();
    const listings = [];
    for (let i = 0; i < count; i++) {
      const model = await marketplaceContract.aiModels(i);
      listings.push(model);
    }
    setListings(listings);
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <div>
      <h2>AI Models for Sale</h2>
      {listings.map((model, index) => (
        <div key={index}>
          <h3>{model.name}</h3>
          <p>{model.description}</p>
          <p>Price: {ethers.utils.formatUnits(model.price, 18)} MTK</p>
          <p>Seller: {model.seller}</p>
          <p>Status: {model.isSold ? "Sold" : "Available"}</p>
        </div>
      ))}
    </div>
  );
};

export default AIModelList;