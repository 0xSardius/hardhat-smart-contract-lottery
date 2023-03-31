const developmentChains = require("../helper-hardhat-config").developmentChains;

const BASE_FEE = ethers.utils.parseEther("0.25") //0.25 is the premium. It costs 0.25 per request
const GAS_PRICE_LINK = 

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  if (developmentChains.includes(network.name)) {
    log("Local network detected! Deploying mocks...");
    // deploy a mock vrf coordinator
    await deploy("VRFCoordinatorV2Mock", {
        from: deployer,
        log: true,
        args: [],
        ") 
  }
};
