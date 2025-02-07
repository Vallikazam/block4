import { useState } from "react";
import { ethers } from "ethers";

const CreateListing = ({ marketplaceAddress, marketplaceABI, account }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [fileLink, setFileLink] = useState("");

  const createListing = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const marketplaceContract = new ethers.Contract(marketplaceAddress, marketplaceABI, signer);
    const tx = await marketplaceContract.createListing(name, description, ethers.utils.parseUnits(price, 18), fileLink);
    await tx.wait();
    alert("Listing created!");
  };

  return (
    <div>
      <h2>Create New Listing</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Price (MTK)" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="text" placeholder="File Link (IPFS)" value={fileLink} onChange={(e) => setFileLink(e.target.value)} />
      <button onClick={createListing}>Create Listing</button>
    </div>
  );
};

export default CreateListing;