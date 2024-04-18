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
const ADDR = "0x883F94eF06f3F28eea30453aDaAB7d6130743a7B";

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
const ISP_ADDR = "0xb8bb7ff14fda4e11F48a45Ce9d733B3dCBAaCE77"
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
    // const res = await ispTest.setSchemaIds(14, 14);
    // console.log("Obtained value at deployed contract is: " + res);
    // const res2 = await ispTest.schema_ids();
    // console.log("Obtained value at deployed contract is: " + res2);
    // const args = AbiCoder.encode(
    //     ["string", "uint256"],
    //     ["hello world", 20]
    // )
    // const res4 = await ispTest.testAttestation(
    //     args
    // )
    // console.log("Obtained value at deployed contract is: " + res4);
    // const res3 = await ispTest.attestation()
    // console.log("Obtained value at deployed contract is: " + res3);

    const buildFi = new ethers.Contract(ADDR, ABI, signer);
    // const res = await buildFi.changeImageId("0xaceac4faee5f55dde55fcc4e922317a3a74017b952b4c305e36eaae412b52bf5");
    // const res = await buildFi.imageId();
    // const claimId = "0x73c09d2c8f161bab31f4ea1276f303abc84f2d7d0ee5396a7ffa9c87ded1cfc0"
    // const postStateDigest = "0xb04d470703992bd3f3c9cd8fa3459c35aef56466fd4cbfa9e5c45f814047678a"
    // const messageSender = "0xed7BF904D369aba6A0244E7b2CfB5f92B31FF11a"
    // const seal = [26, 88, 71, 6, 43, 174, 131, 55, 169, 241, 145, 236, 173, 209, 206, 52, 110, 163, 189, 221, 78, 48, 6, 145, 114, 113, 162, 64, 250, 60, 236, 51, 9, 93, 139, 171, 175, 87, 215, 67, 247, 35, 107, 49, 241, 47, 164, 183, 56, 210, 213, 46, 130, 6, 202, 96, 157, 99, 124, 55, 128, 108, 145, 56, 25, 183, 197, 252, 90, 33, 48, 110, 49, 64, 60, 30, 147, 151, 43, 63, 228, 196, 176, 197, 239, 103, 162, 200, 134, 153, 180, 26, 196, 28, 28, 253, 40, 60, 178, 179, 62, 14, 88, 79, 249, 85, 148, 192, 35, 204, 155, 3, 78, 1, 49, 5, 250, 3, 198, 90, 117, 137, 171, 109, 59, 53, 131, 24, 19, 104, 228, 105, 84, 88, 184, 213, 119, 76, 103, 63, 99, 183, 147, 213, 230, 175, 65, 55, 89, 161, 198, 7, 157, 192, 254, 208, 103, 101, 93, 232, 38, 37, 115, 105, 160, 131, 74, 23, 24, 77, 111, 31, 125, 195, 8, 181, 154, 213, 131, 240, 223, 114, 19, 126, 226, 97, 230, 8, 215, 11, 131, 193, 28, 209, 19, 44, 171, 114, 196, 189, 137, 116, 100, 156, 238, 154, 36, 28, 81, 229, 158, 190, 244, 233, 17, 200, 91, 65, 253, 191, 209, 8, 79, 206, 15, 176, 251, 132, 41, 95, 177, 105, 131, 51, 243, 25, 4, 50, 7, 55, 8, 79, 155, 57, 178, 235, 204, 25, 13, 45, 46, 171, 171, 182, 106, 255]
    // // // Convert each element to hex string 
    // const sealHexString = ethers.hexlify(new Uint8Array(seal));
    // console.log("sealHexArray: ", sealHexString, typeof sealHexString)
    // const res = await buildFi.verificationCallback(
    //     messageSender,
    //     claimId,
    //     postStateDigest,
    //     sealHexString
    // )
    // const res = await buildFi.projectCount()
    // const res = await buildFi.createProject(
    //     "BuildFi: Raise funds from day 1",
    //     "https://github.com/KryptoNights/BuildFi/blob/main/frontend_buildfi/public/Build.png?raw=true",
    //     [1713701114000, 1713901114000, 1714301114000, 1714901114000],
    //     [10, 20, 30, 40],
    //     "10000000000000000000",
    //     1713661114000
    // )
    const res = await buildFi.buildfi_projects(1)
    // const res = await buildFi.makeNewAccount("deb", "debjitbhowal.db@gmail.com")
    console.log("Obtained value at deployed contract is: " + res);
    for (let i = 0; i < res.length; i++) {
        console.log(res[i])
    }


    // console.log("Obtained value at deployed contract is: " + res);

})("https://arb-sepolia.g.alchemy.com/v2/gdoWsVkAdoopk0ijXAAOtvq-CsXT8PTO")