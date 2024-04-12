// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// a crowd-investment platform where developers can raise funds for their projects from day 1. it's milestone based and the funds get disbursed on successful milestone completion

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BuildFi {
    struct Developer {
        // identity
        string name;
        string email;
        string zkKYC_proof_id;

        // financial
        uint256 balance;
        uint256 creditScore;
    }
    mapping (address => Developer) public developers;

    struct Project {
        uint256 id;
        string name;
        string project_metadata_json;

        uint16 milestones;
        uint16[] payout_percentages;

        uint256 total_budget;
        uint256 total_raised;

        // participants
        address[] investors;
        mapping (address => uint256) investments;

        // payouts
        address projectToken;
        bool token_set;
    }
    mapping (uint256 => Project) public projects;

    uint256 public projectCount;

    constructor() {
        projectCount = 0;
    }

    function makeNewAccount(string memory _name, string memory _email, string memory _zkKYC_proof_id) public {
        // ensure the developer doesn't already exist
        require(bytes(developers[msg.sender].name).length == 0, "Developer already exists");

        // create a new developer account
        developers[msg.sender] = Developer(_name, _email, _zkKYC_proof_id, 0, 0);
    }
}