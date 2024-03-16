// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/utils/Strings.sol";

contract SimpleNFT {
    using Strings for uint256;

    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 indexed _tokenId
    );
    event ApprovalForAll(
        address indexed _owner,
        address indexed _operator,
        bool _approved
    );

    mapping(uint256 => address) private _owners;
    mapping(address => mapping(address => bool)) private _operators;
    mapping(address => uint256) private _balances;

    string baseURL = "https://example.com/images/"; // Base URL for the token image

    function mint(uint256 _tokenId) public {
        require( // Check if the token is already minted
            _owners[_tokenId] == address(0),
            "SimpleNFT: token already minted"
        );
        require(_tokenId < 100, "SimpleNFT: token ID must be less than 100"); // Limiting the number of tokens to 100

        emit Transfer(address(0), msg.sender, _tokenId);
        _owners[_tokenId] = msg.sender;
        _balances[msg.sender] += 1;
    }

    function ownerOf(uint256 _tokenId) public view returns (address) {
        require(
            _owners[_tokenId] != address(0),
            "SimpleNFT: owner query for nonexistent token"
        );
        return _owners[_tokenId];
    }

    function transferFrom(address _from, address _to, uint256 _tokenId) public {
        require(
            _owners[_tokenId] != address(0),
            "SimpleNFT: transfer of token that is not own"
        );
        require(
            _owners[_tokenId] == _from,
            "SimpleNFT: transfer of token that is not owned"
        );
        require(
            msg.sender == _from || _operators[_from][msg.sender],
            "SimpleNFT: caller is not the owner"
        ); // Only the owner can transfer the token

        emit Transfer(_from, _to, _tokenId);
        _operators[_from][msg.sender] = false; //
        _owners[_tokenId] = _to;
        _balances[_to] += 1;
        _balances[_from] -= 1;
    }

    function tokenURI(uint256 _tokenId) external view returns (string memory) {
        require(
            _owners[_tokenId] != address(0),
            "SimpleNFT: URI query for nonexistent token"
        );
        return string(abi.encodePacked(baseURL, _tokenId.toString(), ".jpeg"));
    }

    function setApprovalForAll(address _operator, bool _approved) external {
        _operators[msg.sender][_operator] = _approved;
        emit ApprovalForAll(msg.sender, _operator, _approved);
    }

    function balanceOf(address _owner) external view returns (uint256) {
        require(_owner != address(0), "zero address");
        return _balances[_owner];
    }
}
