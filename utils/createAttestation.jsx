// SPDX-License-Identifier: MIT
const { ethers } = require("ethers");
const { SignProtocolClient, SpMode, EvmChains } = require("@ethsign/sp-sdk");
const { privateKeyToAccount } = require("viem/accounts");

const privateKey = "YOUR_PRIVATE_KEY";

const provider = new ethers.providers.JsonRpcProvider("YOUR_RPC_ENDPOINT");

const contractABI = [
    // Paste your contract ABI here
];

const contractAddress = "YOUR_CONTRACT_ADDRESS";

const contract = new ethers.Contract(contractAddress, contractABI, provider);

const client = new SignProtocolClient(SpMode.OnChain, {
    chain: EvmChains.baseSepolia,
    account: privateKeyToAccount(privateKey)
});

async function createNotaryAttestation(contractDetails, signer) {
    try {
        // Call the createNotaryAttestation function on the contract
        const tx = await contract.createNotaryAttestation(contractDetails);
        await tx.wait(); // Wait for the transaction to be mined

        // Create the attestation using the SDK
        const res = await client.createAttestation({
            schemaId: "YOUR_SCHEMA_ID",
            data: {
                contractDetails,
                signer
            },
            indexingValue: signer.toLowerCase()
        });
        console.log("Attestation created:", res);
    } catch (error) {
        console.error("Error creating attestation:", error);
    }
}

// Example
// const contractDetails = "Some contract details";
// const signer = "0x..."; // Signer's address
// createNotaryAttestation(contractDetails, signer);
