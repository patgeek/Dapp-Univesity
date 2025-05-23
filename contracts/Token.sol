// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.28;

contract Token {
    string public name = "Dapp Token";
    string public symbol = "Dapp";
    uint8 public decimals = 18;
    uint256 public totalSupply;
    // uint256 public totalSupply = 1_000_000 * (10 ** decimals); //conversion en wei
    //1 millions tokens in wei

    constructor(string memory _name, string memory _symbol, uint256 _totalSupply) {
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply * (10 ** decimals);
    }
}
