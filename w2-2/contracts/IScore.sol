// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

interface IScore {    
    function updateScore(address student, uint256 score) external;
}