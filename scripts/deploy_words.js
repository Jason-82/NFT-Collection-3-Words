const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT_Words');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);
  
    //const recipient = "0x2658D1ce0939F84EF71878A2f1c4f2ad24391cF3";
    // Call the function.
    let txn = await nftContract.makeAnEpicNFT();
    // Wait for it to be mined.
    await txn.wait()
    console.log("Minted NFT #1")
  
    txn = await nftContract.makeAnEpicNFT();
    // Wait for it to be mined.
    await txn.wait()
    console.log("Minted NFT #2")
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();

// Interact with already deployed contract.
  //const contractAddress = "0x...",
//const myContract = await hre.ethers.getContractAt("MyContract", contractAddress);