// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Generator is ERC20 {
    constructor(
        uint256 _initialSupply,
        string memory _tokenName,
        string memory _tokenSymbol
    ) ERC20(_tokenName, _tokenSymbol) {
        _mint(msg.sender, _initialSupply * 10 ** decimals());
    }
}
