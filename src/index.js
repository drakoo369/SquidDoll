import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const Web3 = require('web3');
// const HorusCoinAbi = require('../src/abi/HorusCoin.json');

// const init = async () => { 
//   const web3 = new Web3('https://rpc-mainnet.maticvigil.com/');
//   const id = await web3.eth.net.getId();

//   console.log(id);
//   // const deployedNetwork = HorusCoin.networks[id];

//   const contractHorus = new web3.eth.Contract(
//     HorusCoinAbi,
//     '0x943a659b8166101A4649727CC7861c0EC657C2e0'
//   );
// }

// init();

// export const getTotalSupply = () => {
//   return contractHorus.methods.getTotalSupply().call()
// }


