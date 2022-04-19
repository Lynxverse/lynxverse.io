import React, {useState} from 'react'
import {  MsgExecuteContract, WasmAPI, Coin } from '@terra-money/terra.js'
import { useStore, useWallet, useLCD } from '../../store';
import { estimateSend } from 'utils/Util';

import { ToastProvider, useToasts } from 'react-toast-notifications';

const Donate = () => {
  const [ustAmount, setUstAmount] = useState('');
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
        <input className="mt-6" type="text"></input>
        <button className="bg-slate-200 mt-6">Donate</button>
      </div>
    </div>
  )
}

export default Donate;