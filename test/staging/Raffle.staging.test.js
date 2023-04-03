const { getNamedAccounts, deployments, ethers, network } = require("hardhat");
const {
  developmentChains,
  networkConfig,
} = require("../../helper-hardhat-config");
const { assert, expect } = require("chai");

developmentChains.includes(network.name)
  ? describe.skip
  : describe("Raffle Unit Tests", function () {
      let raffle, raffleEntranceFee, deployer;

      beforeEach(async function () {
        deployer = (await getNamedAccounts()).deployer;
        await deployments.fixture(["all"]);
        raffle = await ethers.getContract("Raffle", deployer);
        vrfCoordinatorV2Mock = await ethers.getContract(
          "VRFCoordinatorV2Mock",
          deployer
        );
        raffleEntranceFee = await raffle.getEntranceFee();
        interval = await raffle.getInterval();
      });

      describe("fulfillRandomWords", function () {
        it("Works with live Chainlink keepers and Chainlink VRF, we get a random winner", async function () {
          // enter the raffle
          const startingTimeStamp = await raffle.getLatestTimeStamp();
          const deployerAccount = await ethers.getSigner(deployer); 

          await new Promise(async (resolve, reject) => {
            raffle.once("WinnerPicked", async () => {
              try {
                const recentWinner = await raffle.getRecentWinner();
                const raffleState = await raffle.getRaffleState();
                const winnerBalance = await 
              } catch (error) {
                console.log(error);
                reject(e);
              }
            });

            await raffle.enterRaffle({ value: raffleEntranceFee });

            // This code won't complete until our listener has finished listening

          });
        });
      });
    });
