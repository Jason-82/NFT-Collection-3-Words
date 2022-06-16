require("@nomiclabs/hardhat-web3");

require("dotenv").config({ path: ".env" });
const { ethers } = require("ethers");
//const { web3 } = require("hardhat");
//require("../abi/contracts/MyEpicNFT.sol/MyEpicNFT.json");

let abi = require("../abi/contracts/MyEpicNFT.sol/MyEpicNFT.json");

//const { ethereum } = window;
//let abi2 = require("../artifacts/contracts/MyEpicNFT.sol/MyEpicNFT.json");



task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async (taskArgs) => {
    console.log(taskArgs.account);
    const account = web3.utils.toChecksumAddress(taskArgs.account);
    const balance = await web3.eth.getBalance(account);

    console.log(web3.utils.fromWei(balance, "ether"), "ETH");
  });

task("tokenbalance", "Prints an account's token balance")
  .addParam("contract", "The contract address")
  .addParam("account", "The account address")
  .setAction(async (contractInfo) => {
    console.log(contractInfo);
    
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
    //const nftContract = await nftContractFactory.deploy();
    const nftContract = await nftContractFactory.attach(
      contractInfo.contract // The deployed contract address
  );
  
  let accountBalance = await nftContract.balanceOf(contractInfo.account);
    // Wait for it to be mined.
  //await accountBalance.wait()

  console.log(accountBalance);
  console.log("Finished");

  });


task("getOwner", "Gets owner of specific tokenId")
  .addParam("contract", "The contract's address")
  .addParam("token", "The token's Id")
  //.addParam("account", "The account's address")
  .setAction(async (contractInfo) => {

    console.log(contractInfo);
  
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
    //const nftContract = await nftContractFactory.deploy();
    const nftContract = await nftContractFactory.attach(
      contractInfo.contract // The deployed contract address
  );
  console.log("Contract address is " + nftContract.address);
  let ownerAddress = await nftContract.ownerOf(contractInfo.token);
    // Wait for it to be mined.
  //await ownerAddress.wait()
  console.log(ownerAddress);

  //console.log(ownerAddress);
  });

  task("getOwnerAlt", "Gets owner of specific tokenId")
  .addParam("contract", "The contract's address")
  .addParam("token", "The token's Id")
  //.addParam("account", "The account's address")
  .setAction(async (contractInfo) => {

    console.log(contractInfo);
  
    const accounts = await hre.ethers.getSigners();

    const signer = accounts[0];

    const nftContract = new ethers.Contract(contractInfo.contract, abi, signer); 
  
  console.log("Contract address is " + nftContract.address);
  let ownerAddress = await nftContract.ownerOf(contractInfo.token);
    // Wait for it to be mined.
  //await ownerAddress.wait()
  console.log(ownerAddress);

  //console.log(ownerAddress);
  });


  task("mintNFT", "Mints NFT to provided address")
  .addParam("contract", "The contract's address")
  .addParam("recipient", "The recipient's address")
  //.addParam("account", "The account's address")
  .setAction(async (contractInfo) => {

    console.log(contractInfo);

  const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
  //const nftContract = await nftContractFactory.deploy();
  const nftContract = await nftContractFactory.attach(
    contractInfo.contract // The deployed contract address
  );
  
  // Now you can call functions of the contract
  let txn = await nftContract.makeAnEpicNFT(contractInfo.recipient);

  await txn.wait();

  let myTokenURI = await nftContract.tokenURI(0);
    // Wait for it to be mined.
  //await myTokenURI.wait()
  console.log(myTokenURI);
  console.log(nftContract.address);
  console.log("Just finished minting hello");

  
  });


  task("mintNFTResume", "Mints NFT to provided address")
  .addParam("contract", "The contract's address")
  .addParam("recipient", "The recipient's address")
  //.addParam("account", "The account's address")
  .setAction(async (contractInfo) => {

    console.log(contractInfo);

  const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFTResume');
  //const nftContract = await nftContractFactory.deploy();
  const nftContract = await nftContractFactory.attach(
    contractInfo.contract // The deployed contract address
  );
  
  // Now you can call functions of the contract
  let txn = await nftContract.makeAnEpicNFT(contractInfo.recipient);

  await txn.wait();

  let myTokenURI = await nftContract.tokenURI(0);
    // Wait for it to be mined.
  //await myTokenURI.wait()
  console.log(myTokenURI);
  console.log(nftContract.address);
  console.log("Just finished minting hello");

  
  });

  task("getTokenURI", "Gets TokenURI")
  .addParam("contract", "The contract's address")
  .addParam("token", "The TokenId")
  //.addParam("account", "The account's address")
  .setAction(async (contractInfo) => {

    console.log(contractInfo);
  
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
    //const nftContract = await nftContractFactory.deploy();
    const nftContract = await nftContractFactory.attach(
      contractInfo.contract // The deployed contract address
  );
  
  let myTokenURI = await nftContract.tokenURI(contractInfo.token);
    // Wait for it to be mined.
  //await myTokenURI.wait()

  console.log(myTokenURI);
  console.log("Finished");
  });


  task("getTotalTokenIds", "Gets total tokens minted")
  .addParam("contract", "The contract's address")
  //.addParam("account", "The account's address")
  .setAction(async (contractInfo) => {

    console.log(contractInfo);
  
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
    //const nftContract = await nftContractFactory.deploy();
    const nftContract = await nftContractFactory.attach(
      contractInfo.contract // The deployed contract address
  );
  
  let totalTokens = await nftContract.getTotalTokenIds();
    // Wait for it to be mined.
  //await myTokenURI.wait()

  console.log(totalTokens);
  console.log("Finished");
  });
module.exports = {};


