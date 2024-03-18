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

contract Game is IERC721Receiver {
    IERC721 public itemNFT;

    mapping(uint256 => address) public originalOwner;

    constructor(IERC721 _address) {
        itemNFT = _address;
    }

    function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes calldata data
    ) external returns (bytes4) {
        return IERC721Receiver.onERC721Received.selector;
    }

    function depositNFT(uint256 tokenID) external {
        originalOwner[tokenID] = msg.sender;
        itemNFT.safeTransferFrom(msg.sender, address(this), tokenID);
    }

    function withdrawNFT(uint tokenID) external {
        require(originalOwner[tokenID] == msg.sender, "Not original owner");
        itemNFT.safeTransferFrom(address(this), msg.sender, tokenID);
    }
}
