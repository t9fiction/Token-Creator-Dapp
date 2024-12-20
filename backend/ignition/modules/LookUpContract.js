const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("LookUpContractModule", (m) => {
  const lookUpContract = m.contract("LookUpContract");
  return { lookUpContract };
});
