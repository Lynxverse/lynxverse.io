
import { MsgExecuteContract, WasmAPI, Coin, LCDClient, Fee } from '@terra-money/terra.js'
import { ConnectedWallet } from '@terra-money/wallet-provider'
import { toast } from 'react-toastify';

import { AppContextInterface, ActionKind } from '../contexts/store'
import { ERROR_OPTION, SUCCESS_OPTION } from 'config/constants';

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
      toast(e.message, ERROR_OPTION);
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
      toast(e.message, ERROR_OPTION);
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
        toast(message, SUCCESS_OPTION);
        return e.result.txhash;
      } else {
        toast(e.result.raw_log, ERROR_OPTION);
        console.log(e.result.raw_log);
        return undefined;
      }
    })
    .catch((e) => {
      toast(e.message, ERROR_OPTION);
      console.log(e.message);
      return undefined;
    })
}

export function checkNetwork(wallet: ConnectedWallet | undefined, state: AppContextInterface) {
  //----------verify connection--------------------------------
  if (wallet === undefined) {
    toast("Please connect wallet first!", ERROR_OPTION);
    console.log("Please connect wallet first!");
    return false;
  }
  else {
    toast.dismiss();
  }

  if (state.net == 'mainnet' && wallet.network.name == 'testnet') {
    toast("Please switch to mainnet!", ERROR_OPTION);
    return false;
  }
  if (state.net == 'testnet' && wallet.network.name == 'mainnet') {
    toast("Please switch to Testnet!", ERROR_OPTION);
    return false;
  }
  return true;
}

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