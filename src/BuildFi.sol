// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// a crowd-investment platform where developers can raise funds for their projects from day 1. it's milestone based and the funds get disbursed on successful milestone completion

import "../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";

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
        string name;
        string project_metadata_json;

        uint16 milestones;
        uint16[] payout_percentages;

        uint256 total_budget;
        uint256 total_raised;

        // participants
        address[] investors;
        mapping (address => uint256) investments;
    }
    mapping (address => Project) public projects;
}