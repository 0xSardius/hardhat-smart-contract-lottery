const developmentChains = require("../helper-hardhat-config").developmentChains;
const { network, deployments, ethers } = require("hardhat");
const BASE_FEE = ethers.utils.parseEther("0.25"); //0.25 is the premium. It costs 0.25 per request
const GAS_PRICE_LINK = 1e9; // 1000000000 //link per gas

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  const args = [BASE_FEE, GAS_PRICE_LINK];

  if ((chainId = 31337)) {
    log("Local network detected! Deploying mocks...");
    // deploy a mock vrf coordinator
    await deploy("VRFCoordinatorV2Mock", {
      from: deployer,
      log: true,
      args: args,
    });
    log("Mocks deployed!");
    log("--------------------");
  }
};

module.exports.tags = ["all", "mocks"];
