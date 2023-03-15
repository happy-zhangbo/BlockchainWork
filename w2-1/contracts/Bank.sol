// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Bank {
    
    mapping(address => uint256) public balance;

    receive() payable external{
        balance[msg.sender] = msg.value;
    }

    function withdraw() external{
        require(balance[msg.sender] > 0, "you not balance");
        payable(msg.sender).transfer(balance[msg.sender]);
        delete balance[msg.sender];
    }
}