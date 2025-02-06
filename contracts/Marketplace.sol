// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20; // Ensure this matches the version in hardhat.config.js

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Marketplace {
    struct AIModel {
        string name;
        string description;
        uint256 price;
        address seller;
        string fileLink; // IPFS or other secure storage link
        bool isSold;
    }

    IERC20 public token;
    mapping(uint256 => AIModel) public aiModels;
    uint256 public modelCount;

    event ModelListed(uint256 indexed modelId, string name, uint256 price, address seller);
    event ModelPurchased(uint256 indexed modelId, address buyer);

    constructor(address _tokenAddress) {
        token = IERC20(_tokenAddress);
    }

    function createListing(string memory _name, string memory _description, uint256 _price, string memory _fileLink) public {
        require(_price > 0, "Price must be greater than 0");
        aiModels[modelCount] = AIModel(_name, _description, _price, msg.sender, _fileLink, false);
        emit ModelListed(modelCount, _name, _price, msg.sender);
        modelCount++;
    }

    function buyModel(uint256 _modelId) public {
        AIModel storage model = aiModels[_modelId];
        require(!model.isSold, "Model already sold");
        require(token.transferFrom(msg.sender, model.seller, model.price), "Transfer failed");
        model.isSold = true;
        emit ModelPurchased(_modelId, msg.sender);
    }
}