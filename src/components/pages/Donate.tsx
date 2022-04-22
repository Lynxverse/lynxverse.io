import React, {useState} from 'react'
import {  MsgExecuteContract, WasmAPI, Coin } from '@terra-money/terra.js'
import { BigNumber, ethers } from "ethers";
import { ToastProvider, useToasts } from 'react-toast-notifications';

import { useStore, useWallet, useLCD } from '../../store';
import { estimateSend } from 'utils/Util';
import ethJson from './Donate.json';

declare var window: any;

const Donate = () => {
  const [ustAmount, setUstAmount] = useState('');
  const [ethAmount, setEthAmount] = useState('');

  const { addToast } = useToasts();

  const wallet = useWallet();
  const lcd = useLCD();
  const contract = "terra1w2ye8tvpree6y2svdf026cqcw4gyzsspyl5sea";

  async function donate_ust()
  {
    if(parseFloat(ustAmount) <= 0  || !wallet?.walletAddress)
      return;

    const amount = parseFloat(ustAmount) * 10**6;
    let msg = {
      "donate" : {}
    };

    let donate_msg = new MsgExecuteContract(
      wallet.walletAddress,
      contract,
      msg,
      {uusd: amount}
    );
    await estimateSend(wallet, lcd, [donate_msg], "Success donate", "donate", addToast);
  }

  const ethContract = "0x887fefb9267a0462e17abc32d3964d7629519911";
  async function donate_eth()
  {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const accounts = await provider.send("eth_requestAccounts", []);
    const account = accounts[0];
console.log(account)
    const donateContract = new ethers.Contract(ethContract, ethJson.abi, signer);
    const amount = BigNumber.from(parseFloat(ethAmount) * 10**8);
    // const amount = ethers.utils.parseUnits(ethAmount, "ether");
console.log(amount)
console.log(amount.toString())
    let gas = await donateContract.estimateGas.donate({value: amount});
    gas = gas.mul(12).div(10);
console.log(gas.toString())

    let result = await donateContract.donate({gasLimit:gas, value:amount});
console.log(result);
  }
  return (
    <div className="w-full flex flex-col justify-center items-center pt-[120px]">
      
      <span className="text-2xl md:text-4xl text-white mt-6 justify-center font-sans mb-8">Donate to Lynxverse</span>
      <div className="bg-sky-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="flex flex-col justify-center align-center  w-[240px] md:w-[440px]" >
      <span className="text-lg text-white mt-6 justify-center">Via Terra Station</span>
        <input 
          className="mt-6 appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name " 
          type="text" 
          value={ustAmount} 
          onChange ={(e) => {setUstAmount(e.target.value)}}
          placeholder="0 UST"
        />
        <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => {donate_ust()}}>Donate</button>
      </div>

      <div className="flex flex-col justify-center align-center pt-[50px] w-[240px] md:w-[440px]">
      <span className="text-lg text-white mt-6 justify-center">Via Metamask with Ethereum</span>
        <input 
          className="mt-6 appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" 
          type="text" 
          value={ethAmount} 
          onChange ={(e) => {setEthAmount(e.target.value)}}
          placeholder="0 ETH"
        />
        <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => {donate_eth()}}>Donate</button>
      </div>
      </div>
      <div className="bg-sky-200 border-t-4 border-cyan-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
  <div className="flex">
    <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
    <div>
      <p className="font-bold">Donating to Lynxverse</p>
      <p className="text-sm">Be Advised you are not to be compensated for your donation. <br/>Your donation will be used for advancing charitable
      idea of Lynxverse</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default Donate;