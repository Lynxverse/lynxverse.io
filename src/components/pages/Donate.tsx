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
    <div className="w-full flex flex-col justify-center items-center pt-[100px]">
      <div className="flex flex-col justify-center align-center pt-[100px] w-[200px]">
        <span className="text-lg text-white mt-6">Input the UST Amount</span>
        <input 
          className="mt-6" 
          type="text" 
          value={ustAmount} 
          onChange ={(e) => {setUstAmount(e.target.value)}}
        />
        <button className="bg-slate-200 mt-6" onClick={() => {donate_ust()}}>Donate</button>
      </div>

      <div className="flex flex-col justify-center align-center pt-[100px] w-[200px]">
        <span className="text-lg text-white mt-6">Input the ETH Amount</span>
        <input 
          className="mt-6" 
          type="text" 
          value={ethAmount} 
          onChange ={(e) => {setEthAmount(e.target.value)}}
        />
        <button className="bg-slate-200 mt-6" onClick={() => {donate_eth()}}>Donate</button>
      </div>
    </div>
  )
}

export default Donate;