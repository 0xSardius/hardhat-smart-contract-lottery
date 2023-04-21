const { ethers } = require("hardhat");

const FRONT_END_ADDRESSES_FILE =
  "../nextjs-smartcontract-lottery-fcc/constants/contractAddresses.json";
const FRONT_END_ABI_FILE =
  "../nextjs-smartcontract-lottery-fcc/constants/abi.json";

module.exports = async function () {
  if (process.env.UPDATE_FRONT_END) {
    console.log("Updating front end...");
    updateContractAddresses();
  }
};

async function updateContractAddresses() {
  const raffle = await ethers.getContract("Raffle");
  const currentAddresses = 
}
