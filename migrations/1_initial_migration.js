const HealthGuard = artifacts.require("./HealthGuard.sol");

module.exports = function(deployer) {
  deployer.deploy(HealthGuard);
};