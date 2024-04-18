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
    const claimId = "0xf244d77da78a8f624aeccde06ccebb99d94e296224edd4361156381f556c5b9b"
    const postStateDigest = "0xc52561afe2b01a26f9a368fe109fdaaeb6c5cf2e17999faf5df1b8ae3b103426"
    const messageSender = "0xd6f285aff13129f0e27a2079e343c9af3b19a776"
    const seal = [25, 89, 179, 199, 116, 41, 140, 149, 226, 146, 100, 29, 90, 90, 211, 121, 196, 40, 215, 155, 189, 252, 99, 212, 187, 50, 144, 136, 159, 204, 165, 207, 9, 251, 110, 168, 137, 192, 64, 172, 157, 239, 9, 23, 210, 157, 175, 112, 17, 143, 36, 132, 225, 173, 237, 233, 214, 28, 52, 175, 125, 12, 54, 173, 45, 78, 31, 228, 203, 215, 65, 35, 17, 80, 138, 10, 27, 98, 225, 159, 116, 133, 222, 89, 68, 45, 178, 103, 119, 146, 1, 188, 90, 17, 20, 238, 7, 223, 122, 195, 91, 203, 199, 248, 30, 215, 16, 242, 157, 191, 207, 41, 240, 178, 180, 225, 218, 185, 160, 168, 75, 63, 232, 123, 210, 70, 123, 71, 16, 123, 146, 46, 242, 205, 216, 60, 212, 17, 48, 136, 153, 114, 42, 158, 174, 65, 238, 166, 83, 171, 194, 241, 31, 253, 132, 172, 35, 91, 147, 73, 25, 49, 131, 107, 226, 237, 45, 114, 209, 123, 39, 46, 61, 162, 43, 24, 168, 46, 246, 124, 227, 81, 66, 37, 113, 83, 76, 130, 45, 221, 121, 182, 8, 99, 246, 186, 223, 26, 141, 108, 128, 113, 249, 110, 145, 45, 128, 251, 209, 22, 83, 118, 251, 97, 157, 7, 89, 154, 202, 120, 50, 77, 48, 138, 45, 211, 148, 55, 35, 170, 157, 153, 144, 64, 3, 104, 174, 77, 106, 35, 162, 109, 251, 39, 147, 108, 96, 5, 189, 191, 1, 40, 249, 36, 23, 123]
    // // Convert each element to hex string 
    const sealHexString = ethers.hexlify(new Uint8Array(seal));
    console.log("sealHexArray: ", sealHexString, typeof sealHexString)
    const res = await buildFi.verificationCallback(
        messageSender,
        claimId,
        postStateDigest,
        sealHexString
    )

    // console.log("Obtained value at deployed contract is: " + res);

})("https://arb-sepolia.g.alchemy.com/v2/gdoWsVkAdoopk0ijXAAOtvq-CsXT8PTO")