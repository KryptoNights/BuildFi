// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// a crowd-investment platform where developers can raise funds for their projects from day 1. it's milestone based and the funds get disbursed on successful milestone completion
// TODO:
// - penalization logic (credibility and payout)
// - add voting deadline to a milestone (if it exceeds without getting closed, penalization)
// - add proposals to project for investors to create vote on
// - a way for attestations to be added

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BuildFi {
    struct Developer {
        // identity
        string name;
        string email;
        string zkKYC_proof_id;
        // financial
        uint256 balance;
        uint256 credibility;
    }

    mapping(address => Developer) public buildfi_developers;

    struct Milestone {
        uint16 id;
        bool voting_active;
        uint256 votes_for;
        uint256 votes_against;
        mapping(address => bool) voters;
    }

    struct Project {
        // identity
        uint256 id;
        string name;
        string project_metadata_json;
        address owner;
        // milestones
        uint16 milestone_count;
        uint16 last_milestone_completed;
        uint16[] payout_percentages;
        string milestone_metadata_json;
        mapping(uint16 => Milestone) milestones;
        // financial
        uint256 total_budget;
        uint256 total_raised;
        // participants
        address[] investors;
        mapping(address => uint256) investments;
        // payouts
        address projectToken;
        bool token_set;
        uint256 tokens_commited;
        // timestamps
        uint256 created_at;
        uint256 started_at;
        uint256 funding_ends_at;
        uint256 completed_at;
        // status
        bool abandoned;
    }
    mapping(uint256 => Project) public buildfi_projects;

    uint256 public projectCount;

    constructor() {
        projectCount = 1;
    }

    function makeNewAccount(
        string memory _name,
        string memory _email,
        string memory _zkKYC_proof_id
    ) public {
        // ensure the developer doesn't already exist
        require(
            bytes(buildfi_developers[msg.sender].name).length == 0,
            "Developer already exists"
        );

        // create a new developer account
        buildfi_developers[msg.sender] = Developer(
            _name,
            _email,
            _zkKYC_proof_id,
            0,
            5
        );
    }

    function createProject(
        string memory _name,
        string memory _project_metadata_json,
        uint16 _milestones,
        uint16[] memory _payout_percentages,
        uint256 _total_budget,
        uint256 funding_ends_at
    ) public {
        // ensure the developer exists
        require(
            bytes(buildfi_developers[msg.sender].name).length != 0,
            "Developer does not exist"
        );

        // ensure the project doesn't already exist
        require(
            buildfi_projects[projectCount].id == 0,
            "Project already exists"
        );

        // ensure funding_ends_at is in the future
        require(
            funding_ends_at > block.timestamp,
            "Invalid funding end timestamp"
        );

        // ensure payout percentages are valid
        require(
            _payout_percentages.length == _milestones,
            "Invalid payout percentages"
        );
        uint256 total_percentage = 0;
        for (uint16 i = 0; i < _milestones; i++) {
            total_percentage += _payout_percentages[i];
        }
        require(total_percentage == 100, "Invalid payout percentages");

        // create a new project
        Project storage project = buildfi_projects[projectCount];
        project.id = projectCount;
        project.name = _name;
        project.project_metadata_json = _project_metadata_json;
        project.owner = msg.sender;
        project.milestone_count = _milestones;
        project.last_milestone_completed = 0;
        project.payout_percentages = _payout_percentages;
        project.total_budget = _total_budget;
        project.total_raised = 0;
        project.created_at = block.timestamp;
        project.funding_ends_at = funding_ends_at;

        // increment project count
        projectCount++;
    }

    function abandon_project(uint256 _projectId) public {
        // ensure the project exists
        require(buildfi_projects[_projectId].id != 0, "Project does not exist");

        // ensure it's the project owner
        require(msg.sender == buildfi_projects[_projectId].owner, "Not owner");

        // ensure the project is still open for funding
        require(
            block.timestamp < buildfi_projects[_projectId].funding_ends_at,
            "Project funding is closed"
        );

        // mark the project as abandoned
        buildfi_projects[_projectId].abandoned = true;
    }

    function reclaim_funds(uint256 _projectId) public {
        // investors can reclaim funds if the project is abandoned

        // ensure the project exists
        require(buildfi_projects[_projectId].id != 0, "Project does not exist");

        // ensure the project is abandoned
        require(
            buildfi_projects[_projectId].abandoned,
            "Project not abandoned"
        );

        // ensure the investor has invested
        require(
            buildfi_projects[_projectId].investments[msg.sender] > 0,
            "Sender has not invested"
        );

        // calculate refund
        uint256 refund = buildfi_projects[_projectId].investments[msg.sender];

        // pay out the refund
        payable(msg.sender).transfer(refund);

        // update investor investment
        buildfi_projects[_projectId].investments[msg.sender] = 0;
    }

    function set_and_transfer_tokens(
        uint256 _projectId,
        address _projectToken
    ) public {
        // ensure the project exists
        require(buildfi_projects[_projectId].id != 0, "Project does not exist");

        // ensure it's the project owner
        require(msg.sender == buildfi_projects[_projectId].owner, "Not owner");

        // ensure the project is still open for funding
        require(
            block.timestamp < buildfi_projects[_projectId].funding_ends_at,
            "Project funding is closed"
        );

        // ensure the project is not already completed
        require(
            buildfi_projects[_projectId].last_milestone_completed <
                buildfi_projects[_projectId].milestone_count,
            "Project already completed"
        );

        // set the project token
        buildfi_projects[_projectId].projectToken = _projectToken;
        buildfi_projects[_projectId].token_set = true;

        ERC20 token = ERC20(_projectToken);
        uint256 decimals = token.decimals();

        // transfer the project token
        token.transferFrom(
            msg.sender,
            address(this),
            buildfi_projects[_projectId].tokens_commited * 10 ** decimals
        );
    }

    function invest(uint256 _projectId) public payable {
        // ensure the project exists
        require(buildfi_projects[_projectId].id != 0, "Project does not exist");

        // ensure the project is still open for funding
        require(
            block.timestamp < buildfi_projects[_projectId].funding_ends_at,
            "Project funding is closed"
        );

        uint256 _amount = msg.value;

        // update project total raised
        buildfi_projects[_projectId].total_raised += _amount;

        // update project investors if not already there
        if (buildfi_projects[_projectId].investments[msg.sender] == 0) {
            buildfi_projects[_projectId].investors.push(msg.sender);
        }

        // update project investments
        buildfi_projects[_projectId].investments[msg.sender] += _amount;
    }

    function start_voting(uint256 _projectId, uint16 _milestoneId) public {
        // ensure the project exists
        require(buildfi_projects[_projectId].id != 0, "Project does not exist");

        // ensure it's the project owner
        require(msg.sender == buildfi_projects[_projectId].owner, "Not owner");

        // ensure the milestone exists
        require(
            buildfi_projects[_projectId].milestones[_milestoneId].id ==
                _milestoneId,
            "Milestone does not exist"
        );

        // ensure the milestone is not already completed
        require(
            _milestoneId >
                buildfi_projects[_projectId].last_milestone_completed,
            "Milestone already completed"
        );

        // ensure the milestone is not already voted on
        require(
            !buildfi_projects[_projectId]
                .milestones[_milestoneId]
                .voting_active,
            "Milestone already voted on"
        );

        // ensure the milestone is not already completed
        require(
            _milestoneId ==
                buildfi_projects[_projectId].last_milestone_completed + 1,
            "Milestone not next in line"
        );

        // start voting
        buildfi_projects[_projectId]
            .milestones[_milestoneId]
            .voting_active = true;
    }

    function vote(uint256 _projectId, uint16 _milestoneId, bool _vote) public {
        // ensure the project exists
        require(buildfi_projects[_projectId].id != 0, "Project does not exist");

        // ensure the milestone exists
        require(
            buildfi_projects[_projectId].milestones[_milestoneId].id ==
                _milestoneId,
            "Milestone does not exist"
        );

        // sender must be an investor
        require(
            buildfi_projects[_projectId].investments[msg.sender] > 0,
            "Sender is not an investor"
        );

        // sender must not have already voted
        require(
            !buildfi_projects[_projectId].milestones[_milestoneId].voters[
                msg.sender
            ],
            "Sender has already voted"
        );

        // ensure voting is active
        require(
            buildfi_projects[_projectId].milestones[_milestoneId].voting_active,
            "Voting is not active"
        );

        // update milestone votes
        if (_vote) {
            buildfi_projects[_projectId]
                .milestones[_milestoneId]
                .votes_for += 1;
        } else {
            buildfi_projects[_projectId]
                .milestones[_milestoneId]
                .votes_against += 1;
        }

        // update voter status
        buildfi_projects[_projectId].milestones[_milestoneId].voters[
            msg.sender
        ] = true;
    }

    function close_voting(uint256 _projectId, uint16 _milestoneId) public {
        // ensure the project exists
        require(buildfi_projects[_projectId].id != 0, "Project does not exist");

        // ensure the milestone exists
        require(
            buildfi_projects[_projectId].milestones[_milestoneId].id ==
                _milestoneId,
            "Milestone does not exist"
        );

        // ensure voting is active
        require(
            buildfi_projects[_projectId].milestones[_milestoneId].voting_active,
            "Voting is not active"
        );

        // if this is the last milestone, ensure token is set
        if (_milestoneId == buildfi_projects[_projectId].milestone_count) {
            require(
                buildfi_projects[_projectId].token_set,
                "Token not set for last milestone"
            );
        }

        // mark voting as closed
        buildfi_projects[_projectId]
            .milestones[_milestoneId]
            .voting_active = false;

        // ensure voting is successful
        if (
            buildfi_projects[_projectId].milestones[_milestoneId].votes_for >
            buildfi_projects[_projectId].milestones[_milestoneId].votes_against
        ) {
            // update project last milestone completed
            buildfi_projects[_projectId]
                .last_milestone_completed = _milestoneId;
        }

        // calculate payout
        uint256 payout = (buildfi_projects[_projectId].total_budget *
            buildfi_projects[_projectId].payout_percentages[_milestoneId]) /
            100;

        // pay out the milestone budget
        payable(msg.sender).transfer(payout);

        // if last milestone also payout tokens to investors
        ERC20 token = ERC20(buildfi_projects[_projectId].projectToken);
        if (_milestoneId == buildfi_projects[_projectId].milestone_count) {
            for (
                uint256 i = 0;
                i < buildfi_projects[_projectId].investors.length;
                i++
            ) {
                uint256 invested = buildfi_projects[_projectId].investments[
                    buildfi_projects[_projectId].investors[i]
                ];
                uint256 investor_payout = (buildfi_projects[_projectId]
                    .tokens_commited *
                    uint256(token.decimals()) *
                    invested) / buildfi_projects[_projectId].total_raised;
                token.transfer(
                    buildfi_projects[_projectId].investors[i],
                    investor_payout
                );
            }
        }
    }
}
