const ABI = [
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
            },
            {
                "name": "_sign_deployed_addr",
                "type": "address",
                "internalType": "address"
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
                "type": "bytes32",
                "internalType": "bytes32"
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
                "type": "int16",
                "internalType": "int16"
            },
            {
                "name": "last_milestone_completed",
                "type": "int16",
                "internalType": "int16"
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
            },
            {
                "name": "projectCommitted",
                "type": "uint64",
                "internalType": "uint64"
            },
            {
                "name": "projectWrapped",
                "type": "uint64",
                "internalType": "uint64"
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
                "type": "int16",
                "internalType": "int16"
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
                "name": "_milestone_timestamps",
                "type": "uint256[]",
                "internalType": "uint256[]"
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
        "name": "deployer",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
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
        "name": "isp",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract ISP"
            }
        ],
        "stateMutability": "view"
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
        "name": "schema_ids",
        "inputs": [],
        "outputs": [
            {
                "name": "committed",
                "type": "uint64",
                "internalType": "uint64"
            },
            {
                "name": "wrapped",
                "type": "uint64",
                "internalType": "uint64"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "setSchemaIds",
        "inputs": [
            {
                "name": "_committed",
                "type": "uint64",
                "internalType": "uint64"
            },
            {
                "name": "_wrapped",
                "type": "uint64",
                "internalType": "uint64"
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
        "name": "start_project",
        "inputs": [
            {
                "name": "_projectId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "commitAttestationData",
                "type": "bytes",
                "internalType": "bytes"
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
                "type": "int16",
                "internalType": "int16"
            },
            {
                "name": "_voting_deadline",
                "type": "uint256",
                "internalType": "uint256"
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
                "type": "int16",
                "internalType": "int16"
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
];
const ADDR = "0x638FaBcc5c96e3bD97eea29e85e067D17Af1ae05";

const ISP_ABI = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_sign_deployed_addr",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "attestation",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint64",
                "internalType": "uint64"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "deployer",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "isp",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract ISP"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "schema_ids",
        "inputs": [],
        "outputs": [
            {
                "name": "committed",
                "type": "uint64",
                "internalType": "uint64"
            },
            {
                "name": "wrapped",
                "type": "uint64",
                "internalType": "uint64"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "setSchemaIds",
        "inputs": [
            {
                "name": "_committed",
                "type": "uint64",
                "internalType": "uint64"
            },
            {
                "name": "_wrapped",
                "type": "uint64",
                "internalType": "uint64"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "testAttestation",
        "inputs": [
            {
                "name": "commitAttestationData",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    }
];
const ISP_ADDR = "0xEe152162dEfD9210B50A78532786affa7D60f3A8"
import { ethers } from "ethers";

(async function getValueAtAddress(
    host,
) {
    const provider = new ethers.JsonRpcProvider(host);
    const signer = new ethers.Wallet(process.env["ETH_WALLET_PRIVATE_KEY"], provider);
    const AbiCoder = new ethers.AbiCoder();

    const address = signer.address;
    console.log("Address: ", address);

    // const buildfi = new ethers.Contract(ADDR, ABI, provider);
    // const res = await buildfi.imageId();
    // console.log("Obtained value at deployed contract is: " + res);
    // const claims = await buildfi.claims("0xed7BF904D369aba6A0244E7b2CfB5f92B31FF11a");
    // console.log("Obtained value at deployed contract is: " + claims, claims === `0x73c09d2c8f161bab31f4ea1276f303abc84f2d7d0ee5396a7ffa9c87ded1cfc0`);
    // return res;

    // const ispTest = new ethers.Contract(ISP_ADDR, ISP_ABI, signer);
    // const res = await 
    // const res = await ispTest.setSchemaIds(19, 19);
    // console.log("Obtained value at deployed contract is: " + res);
    // const res2 = await ispTest.schema_ids();
    // console.log("Obtained value at deployed contract is: " + res2);
    // const res3 = await ispTest.attestation()
    // console.log("Obtained value at deployed contract is: " + res3);
    // const args = AbiCoder.encode(
    //     ["string", "uint256"],
    //     ["hello world", 20]
    // )
    // const res4 = await ispTest.testAttestation(
    //     args
    // )
    // console.log("Obtained value at deployed contract is: " + res4);

    const buildFi = new ethers.Contract(ADDR, ABI, signer);
    // const res = await buildFi.changeImageId("0xaceac4faee5f55dde55fcc4e922317a3a74017b952b4c305e36eaae412b52bf5");
    // const res = await buildFi.imageId();
    const claimId = "0x73c09d2c8f161bab31f4ea1276f303abc84f2d7d0ee5396a7ffa9c87ded1cfc0"
    const postStateDigest = "0x1cc583801d72279b5278e9c6f7f5783072b43c6a1a03018c563515544388d624"
    const messageSender = "0x48d74743caa686e52d77be3cdb90704e60e3b110"
    const seal = [18, 210, 17, 42, 99, 5, 129, 43, 255, 76, 74, 88, 185, 202, 94, 32, 210, 162, 69, 181, 58, 47, 148, 33, 156, 125, 65, 175, 24, 244, 144, 250, 8, 191, 247, 56, 120, 52, 174, 7, 49, 85, 167, 134, 113, 189, 28, 74, 90, 56, 183, 56, 62, 54, 53, 196, 73, 230, 239, 136, 96, 127, 75, 127, 19, 213, 199, 217, 226, 172, 175, 254, 58, 186, 191, 254, 127, 225, 48, 207, 251, 72, 202, 101, 112, 184, 143, 136, 224, 151, 100, 241, 6, 203, 9, 173, 16, 224, 222, 132, 56, 49, 15, 29, 66, 125, 86, 67, 124, 95, 184, 14, 92, 64, 147, 213, 232, 61, 25, 172, 198, 177, 102, 166, 41, 32, 172, 70, 44, 63, 230, 13, 107, 58, 71, 237, 218, 74, 232, 227, 101, 101, 227, 99, 190, 76, 222, 208, 82, 205, 217, 83, 75, 211, 201, 236, 21, 255, 221, 214, 33, 124, 72, 129, 87, 123, 47, 60, 30, 174, 28, 127, 149, 214, 213, 46, 33, 233, 62, 254, 191, 53, 34, 102, 245, 208, 57, 252, 129, 109, 233, 23, 33, 204, 81, 3, 79, 246, 198, 142, 143, 245, 206, 185, 44, 21, 38, 207, 241, 204, 95, 187, 69, 174, 195, 126, 84, 202, 218, 215, 87, 10, 160, 133, 21, 219, 248, 215, 148, 180, 210, 91, 6, 18, 249, 145, 227, 98, 196, 191, 131, 78, 73, 87, 219, 82, 249, 144, 167, 36, 12, 60, 118, 21, 88, 65]
    // Convert each element to hex string 
    const sealHexString = ethers.hexlify(new Uint8Array(seal));
    console.log("sealHexArray: ", sealHexString, typeof sealHexString)
    const res = await buildFi.verificationCallback(
        messageSender,
        claimId,
        postStateDigest,
        sealHexString
    )

    console.log("Obtained value at deployed contract is: " + res);

})("https://arb-sepolia.g.alchemy.com/v2/gdoWsVkAdoopk0ijXAAOtvq-CsXT8PTO")