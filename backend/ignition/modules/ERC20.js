const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ERC20Module", (m) => {
  const initialSupply = m.getParameter("initialSupply", 1000000);
  const tokenName = m.getParameter("tokenName", "Tumble Bee");
  const tokenSymbol = m.getParameter("tokenSymbol", "TBEE");

  const erc20 = m.contract("ERC20Generator", [initialSupply, tokenName, tokenSymbol]);

  return { erc20 };
});
