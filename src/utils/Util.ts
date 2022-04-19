
import { MsgExecuteContract, WasmAPI, Coin, LCDClient, Fee } from '@terra-money/terra.js'
import { ConnectedWallet } from '@terra-money/wallet-provider'
import { AddToast } from 'react-toast-notifications';

import { AppContextInterface, ActionKind } from '../store'

export const successOption: any = {
  position: "top-right",
  type: "success",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const errorOption: any = {
position: "top-right",
type: "error",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
};

export function shortenAddress(address: string | undefined) {
  if (address) {
    let prefix = address.slice(0, 5);
    let suffix = address.slice(-5)
    return prefix + "..." + suffix;
  }
  return "";
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function estimateSend(
  wallet: ConnectedWallet,
  lcd: LCDClient,
  msgs: MsgExecuteContract[],
  message: string,
  memo: string,
  addToast: AddToast
) {
  console.log(msgs);
  const obj = new Fee(10_000, { uusd: 4500 })

  let accountInfo: any | undefined = undefined;

  await lcd.auth.accountInfo(
    wallet.walletAddress
  )
    .then((e) => {
      accountInfo = e;
    })
    .catch((e) => {
      addToast(e.message, { appearance: 'error' });
      console.log(e.message);
    })

  if (!accountInfo)
    return undefined;

  let txOptions =
  {
    msgs: msgs,
    memo: memo,
    gasPrices: obj.gasPrices(),
    gasAdjustment: 1.7,
  };

  let rawFee: any | undefined = undefined;
  await lcd.tx.estimateFee(
    [
      {
        sequenceNumber: accountInfo.getSequenceNumber(),
        publicKey: accountInfo.getPublicKey(),
      },
    ],
    txOptions
  )
    .then((e) => {
      rawFee = e;
    })
    .catch((e) => {
      addToast(e.message, { appearance: 'error' });
      console.log(e.message);
    })

  if (!rawFee)
    return undefined;

  return await wallet
    .post({
      msgs: msgs,
      memo: memo,
      fee: rawFee,
      gasPrices: obj.gasPrices(),
      gasAdjustment: 1.7,
    })
    .then(async (e) => {
      if (e.success) {
        addToast(message, { appearance: 'success' });
        return e.result.txhash;
      } else {
        addToast(e.result.raw_log, { appearance: 'error' });
        console.log(e.result.raw_log);
        return undefined;
      }
    })
    .catch((e) => {
      addToast(e.message, { appearance: 'error' });
      console.log(e.message);
      return undefined;
    })
}

// export function checkNetwork(wallet: ConnectedWallet | undefined, state: AppContextInterface) {
//   //----------verify connection--------------------------------
//   if (wallet === undefined) {
//     AddToast("Please connect wallet first!", errorOption);
//     console.log("Please connect wallet first!");
//     return false;
//   }
//   else {
//     AddToast.dismiss();
//   }

//   if (state.net == 'mainnet' && wallet.network.name == 'testnet') {
//     AddToast("Please switch to mainnet!", errorOption);
//     return false;
//   }
//   if (state.net == 'testnet' && wallet.network.name == 'mainnet') {
//     AddToast("Please switch to Testnet!", errorOption);
//     return false;
//   }
//   return true;
// }

export function floorNormalize(amount: number){
  return Math.floor(amount/10**4)/100;
}

export function floor(amount: number){
  return Math.floor(amount * 100) /100;
}

export function getDateString(time: number)
{
  const month=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let datetime = new Date(time * 1000)
  return (month[datetime.getMonth()] + "   " + datetime.getDate() + " , " + datetime.getFullYear());
}