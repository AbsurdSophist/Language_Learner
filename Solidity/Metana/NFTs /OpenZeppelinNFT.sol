// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OpenZeppelinNFT is ERC721, Ownable {
    uint256 public tokenSupply = 0;
    uint256 public constant MAX_SUPPLY = 5;
    uint256 public constant PRICE = 0.001 ether;
    address immutable deployer;

    constructor() Ownable(msg.sender) ERC721("MyNFT", "MN") {
        deployer = msg.sender;
    }

    function mint() external payable {
        require(tokenSupply < MAX_SUPPLY, "Max supply met");
        require(msg.value == PRICE, "Wrong price");

        _mint(msg.sender, tokenSupply);
        tokenSupply++;
    }

    function _baseURI() internal pure override returns (string memory) {
        return "";
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
