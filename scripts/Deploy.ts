import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying PayLisk contract with the account:", deployer.address);

    const PayLisk = await ethers.getContractFactory("PayLisk");
    const payLisk = await PayLisk.deploy(); // Deploy the contract

    console.log("Target set to:", payLisk.target);

    // Target set to: 0xf5e99F0441deAe7Ca6078e977106Bf0607D8fEf3
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
