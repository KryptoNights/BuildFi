// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script} from "forge-std/Script.sol";
import {console2} from "forge-std/console2.sol";
import {IRiscZeroVerifier} from "risc0/IRiscZeroVerifier.sol";
import {ControlID, RiscZeroGroth16Verifier} from "risc0/groth16/RiscZeroGroth16Verifier.sol";
import {BuildFi} from "../src/BuildFi.sol";

contract CounterScript is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerKey = uint256(vm.envBytes32("ETH_WALLET_PRIVATE_KEY"));
        vm.startBroadcast(deployerKey);

        IRiscZeroVerifier verifier = new RiscZeroGroth16Verifier(ControlID.CONTROL_ID_0, ControlID.CONTROL_ID_1, ControlID.BN254_CONTROL_ID);
        console2.log("Deployed RiscZeroGroth16Verifier to", address(verifier));

        // BonsaiPay bonsaiPay = new BonsaiPay(verifier);
        // console2.log("Deployed BonsaiPay to", address(bonsaiPay));

        BuildFi lightBuildFi = new BuildFi(bytes32(0x81fc3071b00c7f7d4edff773e7ca4a90ef31219c15a444fb19d5fea7a43febfd), verifier);
        console2.log("Deployed LightBuildFi to", address(lightBuildFi));

        vm.stopBroadcast();
    }
}
