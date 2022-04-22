import React, { useState } from 'react'
import { MsgExecuteContract, WasmAPI, Coin } from '@terra-money/terra.js'
import { BigNumber, ethers } from "ethers";
import { ToastProvider, useToasts } from 'react-toast-notifications';

import { useStore, useWallet, useLCD, useEthBalance, useUSTBalance } from '../../store';
import { estimateSend, checkNetwork, errorOption } from 'utils/Util';
import ethJson from './Donate.json';

declare var window: any;

const Donate = () => {
  const [ustAmount, setUstAmount] = useState('');
  const [ethAmount, setEthAmount] = useState('');

  const { state, dispatch } = useStore();
  const { addToast } = useToasts();

  const wallet = useWallet();
  const lcd = useLCD();
  const contract = "terra1w2ye8tvpree6y2svdf026cqcw4gyzsspyl5sea";
  const ethContract = "0x686c626E48bfC5DC98a30a9992897766fed4Abd3";
  const ethBalance = useEthBalance();
  const ustBalance = useUSTBalance();
console.log(ethBalance)
  async function donate_ust() {
    if (checkNetwork(wallet, state, addToast) == false)
      return;

    if(!wallet?.walletAddress)
      return;

    if(!(parseFloat(ustAmount) > 0)){
      addToast("Invalid input", errorOption);
      return;
    }

    const amount = parseFloat(ustAmount) * 10 ** 6;
    let msg = {
      "donate": {}
    };

    let donate_msg = new MsgExecuteContract(
      wallet.walletAddress,
      contract,
      msg,
      { uusd: amount }
    );
    await estimateSend(wallet, lcd, [donate_msg], "Success donate", "donate", addToast);
  }

  async function donate_eth() {
    if(!(parseFloat(ethAmount) > 0)){
      addToast("Invalid input", errorOption);
      return;
    }

    if(!state.metamaskConnected){
      addToast("Please connect metamask first", errorOption);
      return
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const { chainId } = await provider.getNetwork()
    if(chainId != 97){
      addToast("Invalid network, please switch to BSC Testnet", errorOption);
      return
    }

    // const amount = BigNumber.from(parseFloat(ethAmount) * 10 ** 8);
    const amount = ethers.utils.parseUnits(ethAmount, "ether");
console.log(amount.toString())
    if(amount.gt(state.ethBalance)){
      addToast("Not sufficient balance", errorOption);
      return;
    }

    const signer = provider.getSigner();
    const donateContract = new ethers.Contract(ethContract, ethJson.abi, signer);
    
    let gas = await donateContract.estimateGas.donate({ value: amount });
    gas = gas.mul(12).div(10);

    let result = await donateContract.donate({ gasLimit: gas, value: amount });
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
          onChange={(e) => { setUstAmount(e.target.value) }}
        />
        <span className='text-white self-end'>Max:{ustBalance}</span>
        <button className="bg-slate-200 mt-6 rounded-lg hover:bg-slate-400  active:bg-slate-600" onClick={() => { donate_ust() }}>Donate</button>
      </div>

      <div className="flex flex-col justify-center align-center pt-[100px] w-[200px]">
        <span className="text-lg text-white mt-6">Input the ETH Amount</span>
        <input
          className="mt-6"
          type="text"
          value={ethAmount}
          onChange={(e) => { setEthAmount(e.target.value) }}
        />
        <span className='text-white self-end'>Max:{ethBalance.toString()}</span>
        <button className="bg-slate-200 mt-6 rounded-lg hover:bg-slate-400 active:bg-slate-600" onClick={() => { donate_eth() }}>Donate</button>
      </div>
    </div>
  )
}

export default Donate;