require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "19";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [PRIVATE_KEY],
    },
  },
};

