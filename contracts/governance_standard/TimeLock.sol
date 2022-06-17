// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/governance/TimelockController.sol";

// We want to wait for a new vote to be "executed", because it
// gives time for users to "get out" if they don't like a governance update
contract TimeLock is TimelockController {
    // minDelay: How long you have to wait before executing
    // proposers: the list of addresses that can propose
    // executors: the list of addresses that can execute when a proposal passses
    constructor(
        uint256 minDelay,
        address[] memory proposers,
        address[] memory executors
    ) TimelockController(minDelay, proposers, executors) {}
}
