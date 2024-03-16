// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OpenZeppelinNFT is ERC721, Ownable {
    uint256 public tokenSupply = 0;
    uint256 public constant MAX_SUPPLY = 5;
    uint256 public constant PRICE = 1 ether;
    address immutable deployer;

    constructor() Ownable(msg.sender) ERC721("MyNFT", "MN") {
        deployer = msg.sender;
    }

    function mint() external {
        require(tokenSupply < MAX_SUPPLY, "Max supply met");
        _mint(msg.sender, tokenSupply);
        tokenSupply++;
    }

    function viewBalance() external view returns (uint256) {
        return address(this).balance;
    }

    function withdraw() external onlyOwner {
        payable(deployer).transfer(address(this).balance);
    }

    function renounceOwnership() public pure override {
        require(false, "Cannot renounce");
    }

    function transferOwnership() public pure {
        require(false, "Cannot renounce");
    }
}
