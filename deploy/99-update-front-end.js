const { ethers } = require("hardhat");
const { networkConfig } = require("../helper-hardhat-config");

const FRONT_END_ADDRESSES_FILE =
  "../nextjs-smartcontract-lottery-fcc/constants/contractAddresses.json";
const FRONT_END_ABI_FILE =
  "../nextjs-smartcontract-lottery-fcc/constants/abi.json";

module.exports = async function () {
  if (process.env.UPDATE_FRONT_END) {
    console.log("Updating front end...");
    updateContractAddresses();
    updateAbi();
  }
};

// Updates ABI constant file in front end
async function updateAbi() {
  const raffle = await ethers.getContract("Raffle");
  fs.writeFileSync(
    FRONT_END_ABI_FILE,
    raffle.interface.format(ethers.utils.FormatTypes.json)
  );
}

// Useful snippet for live updates of contract addresses. Minute 17:34:21 of hardhat FCC video
async function updateContractAddresses() {
  const raffle = await ethers.getContract("Raffle");
  const chainId = network.confif.chainId.toString();
  const currentAddresses = JSON.parse(
    fs.readFileSync(FRONT_END_ADDRESSES_FILE, "utf8")
  );
  if (chainId in contractAddresses) {
    if (!contractAddress[chainId].includes(raffle.address)) {
      contractAddress[chainId].push(raffle.address);
    }
  }
  {
    currentAddresses[chainId] = [raffle.address];
  }
  fs.writeFileSync(FRONT_END_ADDRESSES_FILE, JSON.stringify(currentAddresses));
}

module.exports.tags = ["all", "frontend"];
