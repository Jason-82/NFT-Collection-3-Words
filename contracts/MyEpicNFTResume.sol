pragma solidity 0.8.1;


import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

// We need to import the helper functions from the contract that we copy/pasted.
import { Base64 } from "./libraries/Base64.sol";

contract MyEpicNFTResume is ERC721URIStorage {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  mapping(uint256 => string) private myTokenURIs;

  //mapping(string => uint256) private

  
  
  constructor() ERC721 ("Jason_NFT_1.0", "Resume") {
    console.log("This is my NFT contract. Woah!");
    myTokenURIs[0] = "https://jsonkeeper.com/b/YJ16";
    
    console.log(address(this));
    console.log("Leaving constructor");
  }


  function makeAnEpicNFT(address recipient) public {
    console.log("HELLELELEO");
    uint256 newItemId = _tokenIds.current();
    console.log("Hello");

    _safeMint(recipient, newItemId);
    
    // Update your URI!!!
    _setTokenURI(newItemId, myTokenURIs[newItemId]);
  
    _tokenIds.increment();
    console.log(myTokenURIs[newItemId]);
    console.log("An NFT w/ ID %s has been minted to %s", newItemId, recipient);
  }

  function getTotalTokenIds() public view returns(uint256) {
    return _tokenIds.current();
  }
}