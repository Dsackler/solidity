const FaucetContract = artifacts.require("Faucet");

module.exports = function(deployer) { //deployer contains deploy function
    deployer.deploy(FaucetContract);
}