const HealthGuard = artifacts.require("HealthGuard");

module.exports = function(deployer) {
    deployer.deploy(HealthGuard);
};