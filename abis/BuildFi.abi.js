export const BUILDFI_ABI = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_imageId",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "_verifier",
                "type": "address",
                "internalType": "contract IRiscZeroVerifier"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "abandon_project",
        "inputs": [
            {
                "name": "_projectId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "buildfi_developers",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "name",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "email",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "zkKYC_proof_id",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "balance",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "credibility",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "buildfi_projects",
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "id",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "name",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "project_metadata_json",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "milestone_count",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "last_milestone_completed",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "milestone_metadata_json",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "total_budget",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "total_raised",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "projectToken",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "token_set",
                "type": "bool",
                "internalType": "bool"
            },
            {
                "name": "tokens_commited",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "created_at",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "started_at",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "funding_ends_at",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "completed_at",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "abandoned",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "changeImageId",
        "inputs": [
            {
                "name": "_imageId",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "claims",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "close_voting",
        "inputs": [
            {
                "name": "_projectId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_milestoneId",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "createProject",
        "inputs": [
            {
                "name": "_name",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "_project_metadata_json",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "_milestones",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "_payout_percentages",
                "type": "uint16[]",
                "internalType": "uint16[]"
            },
            {
                "name": "_total_budget",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "funding_ends_at",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "imageId",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "invest",
        "inputs": [
            {
                "name": "_projectId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "makeNewAccount",
        "inputs": [
            {
                "name": "_name",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "_email",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "_zkKYC_proof_id",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "projectCount",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "reclaim_funds",
        "inputs": [
            {
                "name": "_projectId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "set_and_transfer_tokens",
        "inputs": [
            {
                "name": "_projectId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_projectToken",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "start_voting",
        "inputs": [
            {
                "name": "_projectId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_milestoneId",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "verificationCallback",
        "inputs": [
            {
                "name": "sender",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "claimId",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "postStateDigest",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "seal",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "verifier",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract IRiscZeroVerifier"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "vote",
        "inputs": [
            {
                "name": "_projectId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_milestoneId",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "_vote",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "error",
        "name": "InvalidClaim",
        "inputs": [
            {
                "name": "message",
                "type": "string",
                "internalType": "string"
            }
        ]
    }
]