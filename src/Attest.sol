// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Attest {
    struct Attestation {
        string contractDetails;
        address signer;
    }

    mapping(address => Attestation) attestations;

    event AttestationCreated(
        address indexed user,
        string contractDetails,
        address signer
    );

    function createNotaryAttestation(string memory contractDetails) public {
        attestations[msg.sender] = Attestation(contractDetails, msg.sender);
        emit AttestationCreated(msg.sender, contractDetails, msg.sender);
    }

    function getAttestation(
        address user
    ) public view returns (string memory, address) {
        return (attestations[user].contractDetails, attestations[user].signer);
    }
}
