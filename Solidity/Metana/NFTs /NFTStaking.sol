// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

contract Item is ERC721 {
    address public game;
    constructor() ERC721("Item", "IT") {
        _mint(msg.sender, 10);
    }
}

contract Game {
    IERC721 public itemNFT;

    constructor(IERC721 _address) {
        itemNFT = _address;
    }
}
