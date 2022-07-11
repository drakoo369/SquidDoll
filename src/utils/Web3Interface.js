import Web3 from 'web3';
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal"; 
import Authereum from "authereum";
// import HorusCoinABI from '../abi/HorusCoin.json';
// import HorusCoinMumbaiABI from '../abi/HorusCoinMumbai.json';
import SDollABI from '../abi/SDoll.json';

let web3Modal;
let selectedAccount;
// let horusContract;
let sDollContract;
let isInitialized = false;
let isContractSetted = false;

let provider;
// let decimals = 1*10**18;
let newWeb3;
let contractAddress = '0x42C47abe5e304e886717c852536047D46ACb17Cf';
let burnAddress = '0x000000000000000000000000000000000000dEaD';

function init() {

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          // 80001: "https://matic-mumbai.chainstacklabs.com",
          // 80001: "https://rpc-mumbai.maticvigil.com",
          // 137: "https://polygon-rpc.com",
          // 137: 'link del segundo RPC (mainnet polygon)'
          56: "https://bsc-dataseed.binance.org/",
          56: "https://bsc-dataseed1.defibit.io/",
          56: "https://bsc-dataseed1.ninicoin.io/",
          56: "https://bsc-dataseed2.defibit.io/",
          56: "https://bsc-dataseed1.binance.org/",
          56: "https://bsc-dataseed2.binance.org/"
        },
        // chainId: 80001
      },
    },
    authereum: {
      package: Authereum,
      options: {
        rpc: {
          // 80001: "https://matic-mumbai.chainstacklabs.com",
          // 80001: "https://rpc-mumbai.maticvigil.com",
          // 137: "https://polygon-rpc.com",
          // 137: 'link del segundo RPC (mainnet polygon)'
          56: "https://bsc-dataseed.binance.org/",
          56: "https://bsc-dataseed1.defibit.io/",
          56: "https://bsc-dataseed1.ninicoin.io/",
          56: "https://bsc-dataseed2.defibit.io/",
          56: "https://bsc-dataseed1.binance.org/",
          56: "https://bsc-dataseed2.binance.org/"
        },
      }
    }
  };

  web3Modal = new Web3Modal({
    // network:"testnet",
    // network: "mainnet",
    cacheProvider: true,
    providerOptions,
    // disableInjectedProvider : true
  });
  
};

async function fetchAccountData() {

  newWeb3 = new Web3(provider);

  console.log("Web3 instance is", newWeb3);

  const chainId = await newWeb3.eth.getChainId();

  const accounts = await newWeb3.eth.getAccounts();

  console.log("Got accounts", accounts);
  selectedAccount = accounts[0];

  // horusContract = new newWeb3.eth.Contract(
  // // HorusAbiPart,
  // HorusCoinMumbaiABI,
  // '0xF5D5Ad0ef7E755A7AE4FcedE839F7755Cd20EF19'
  // );

  sDollContract = new newWeb3.eth.Contract(
    SDollABI,
    contractAddress
  ); 

  isInitialized = true;
  isContractSetted = true;

};

async function refreshAccountData() {
  await fetchAccountData(provider);
};

export async function onConnect() {
  
  try {
    provider = await web3Modal.connect();
  } catch(e) {
    console.log("Could not connect to the wallet", e);
    return;
  }

  provider.on("accountsChanged", (selectedAccount) => {
    fetchAccountData();
    console.log("Account changed to", selectedAccount);
  });
  
  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
    console.log("ChainId changed to", chainId);
  });

  await refreshAccountData();
};

export const getTotalSupply = async () => {
	// if (!isInitialized) {
	// 	await fetchAccountData();
	// }

	return sDollContract.methods
		.balanceOf(contractAddress)
		.call()
		.then((supply) => {
			return Web3.utils.fromWei(supply);
		});
};

export const getOwner = async () => {
  // if(!isInitialized) {
  //   await fetchAccountData();
  // }

  return sDollContract.methods
    .owner()
    .call()
};

export const getOngoingGame = async () => {

  return sDollContract.methods
  .ongoingGame()
  .call()
};

export const getRewardAmount = async () => {
  return sDollContract.methods
  .rewardAmount()
  .call()
  .then((amount) => {
    return Web3.utils.fromWei(amount);
  });
};

export const getRegistrationOpen = async () => {
  if(!isInitialized) {
    await refreshAccountData();
  }

  if(isContractSetted) {
    return sDollContract.methods
    .registrationOpen()
    .call()
  } else {
    console.log("Connect Wallet for watch registration status")
  }
};
  

export const getMinBalance = async () => {
  return sDollContract.methods
  .minBalance()
  .call()
  .then((amount) => {
    return Web3.utils.fromWei(amount);
  });
};

export const getEndBlock = async () => {
  return sDollContract.methods
  .endBlock()
  .call()
};

export const getBurned = async () => {
  return sDollContract.methods
  .balanceOf(burnAddress)
  .call()
  .then((balance) => {
    return Web3.utils.fromWei(balance);
  });
};

export const participateGame = async () => {
  if(!isInitialized) {
    await fetchAccountData();
  }
  
  return sDollContract.methods
  .playerEntry()
  .send( { from: selectedAccount } )
};

export const isParticipating = async () => {
  if(!isInitialized) {
    await fetchAccountData();
  }

  return sDollContract.methods
  .isAlreadyParticipatingMap(selectedAccount)
  .call()
};

// export const getBalance = async () => {
//   if(!isInitialized) {
//     await init();
//   }

//   return horusContract.methods
//   .balanceOf(selectedAccount)
//   .call()
//   .then((balance) => {
//     return Web3.utils.fromWei(balance);
//   });
// };

// export const getAllowance = async () => {
//   if(!isInitialized) {
//     await init();
//   }

//   return horusContract.methods
//   .allowance(selectedAccount, '0x1F36bA8d5e7eA24F1bB090C0d1C21615ad95be0F')
//   .call()
//   .then((allowanced) => {
//     return Web3.utils.fromWei(allowanced);
//   });
// };

// export const mintToken = async () => {
//   if(!isInitialized) {
//     await init();
//   }
//   const amount = Web3.utils.toBN("1000000000000000000000000");
//   return horusContract.methods
//   .mint(amount)
//   .send( {from: selectedAccount} )
//   // .then((minted) => {
//   //   return Web3.utils.toBN(minted);
//   // });
// };

// export const transferToken = async () => {
//   if(!isInitialized) {
//     await init();
//   }
//   const amount1 = Web3.utils.toBN("30000000000000000000");
//   return horusContract.methods
//   .transfer('0x1F36bA8d5e7eA24F1bB090C0d1C21615ad95be0F', amount1)
//   .send( {from: selectedAccount } )
// };

export const selectedAccountFunction = async () => {
  
  return selectedAccount;
}

window.addEventListener('load', async () => {
  init();
});