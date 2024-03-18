// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Skeleton for ERC20 contract
contract MyToken is ERC20 {
    constructor() ERC20("MyToken", "MT") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}

// Skeleton for NFT contract
contract OpenZeppelinNFT is ERC721, Ownable {
    uint256 public tokenSupply = 0;
    uint256 public constant MAX_SUPPLY = 10;
    uint256 public constant PRICE = 0 ether;
    address immutable deployer;

    constructor() Ownable(msg.sender) ERC721("MyNFT", "MN") {
        deployer = msg.sender;
    }

    function mint() external payable {
        require(tokenSupply <= MAX_SUPPLY, "Max supply met");
        require(msg.value == PRICE, "Wrong price");

        _mint(msg.sender, tokenSupply);
        tokenSupply++;
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmcZiRBjALqx6NyA8TWJu9skkndhpxWWiSAS9EJNzPQKhW/";
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

// Skeleton for staking contract
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
        originalOwner[tokenId] = from;
        return IERC721Receiver.onERC721Received.selector;
    }

    function depositNFT(uint256 tokenId) external {
        originalOwner[tokenId] = msg.sender;
        itemNFT.safeTransferFrom(msg.sender, address(this), tokenId);
    }

    function withdrawNFT(uint tokenId) external {
        require(originalOwner[tokenId] == msg.sender, "Not original owner");
        itemNFT.safeTransferFrom(address(this), msg.sender, tokenId);
    }
}
