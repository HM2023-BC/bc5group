const HealthGuard = artifacts.require("./Constitution.sol");

module.exports = function(deployer) {
  deployer.deploy(HealthGuard);
};
