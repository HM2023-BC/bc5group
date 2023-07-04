const ConstitutionCreator = artifacts.require("./Constitution.sol");

module.exports = function(deployer) {
  deployer.deploy(ConstitutionCreator);
};
