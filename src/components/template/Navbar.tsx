import React, {useMemo, useEffect, useState} from 'react'
import { ImAndroid } from "react-icons/im";
import { LCDClient, Coins } from '@terra-money/terra.js';
import { useWallet, useConnectedWallet } from '@terra-money/wallet-provider'

import { IMAGE } from "utils/images";
import { Button } from "components/template/Button";
import { URL } from "utils/url";
import { useStore, ActionKind } from 'store';
import { toast } from 'react-toastify';
import {MdOutlineAccountBalanceWallet, MdArrowCircleDown} from 'react-icons/md'

export function shortenAddress(address: string | undefined) {
  if (address) {
    let prefix = address.slice(0, 5);
    let suffix = address.slice(-5)
    return prefix + "..." + suffix;
  }
  return "";
}

const Navbar = () => {
  const {state, dispatch} = useStore();
  const [bank, setBank] = useState(false);

  let wallet = useWallet()
  let connectedWallet = useConnectedWallet()

  const lcd = useMemo(() => {
    if (!connectedWallet) {
      dispatch({ type: ActionKind.setConnected, payload: false });
      dispatch({ type: ActionKind.setWallet, payload: undefined });
      return undefined;
    }
    dispatch({ type: ActionKind.setConnected, payload: true });
    dispatch({ type: ActionKind.setWallet, payload: connectedWallet });
    
    let lcd =  new LCDClient({
      URL: connectedWallet.network.lcd,
      chainID: connectedWallet.network.chainID,
    })
    dispatch({ type: ActionKind.setLcd, payload: lcd });

    return lcd;
  }, [connectedWallet, dispatch])

  useEffect(() => {
    async function fetchBalance() {
      if (connectedWallet?.walletAddress && lcd) {
        let coins: Coins;
        try {
          [coins,] = await lcd.bank.balance(connectedWallet.walletAddress);
          setBank(true);

          if (coins.get('uusd')) {
            dispatch({type: ActionKind.setUusdBalance, payload: coins.get('uusd')?.amount.toNumber()});
          }
          if (coins.get('uluna')) {
            dispatch({type: ActionKind.setUlunaBalance, payload: coins.get('uluna')?.amount.toNumber()});
          }
        } catch (e) {
          toast("Can't fetch Wallet balance");
          return;
        }
      }
    }

    if (connectedWallet && lcd) {
      fetchBalance()
    }
  }, [connectedWallet, dispatch, lcd])

  function connectTo(to: string) {
    if (to === 'extension') {
      wallet.connect(wallet.availableConnectTypes[0])
    } else if (to === 'mobile') {
      wallet.connect(wallet.availableConnectTypes[1])
    } else if (to === 'disconnect') {
      wallet.disconnect()
      // dispatch({ type: 'setWallet', message: {} })
    }
  }

  return (
    <div className="fixed z-20 w-full bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex w-11/12 justify-between py-5">
        <img src={IMAGE.logo} className="w-[150px] md:w-[200px]" alt="logo" />
        <Button
          link={URL.demo}
          icon={true}
          iconChildren={<ImAndroid />}
          title="Play Demo"
          style={`primary`}
        />
        {!state.connected && 
          <div
            className="flex bg-white rounded-full justify-center items-center cursor-pointer w-48 h-16"
            onClick = {() => {connectTo('extension')}}
          >
            Terra Station
          </div>
        }
        {state.connected && 
          <div
            className="flex bg-white rounded-full justify-center items-center cursor-pointer w-48 h-16"
          >
            {(bank && !state.loading) &&
              <MdOutlineAccountBalanceWallet size={25} color={'#F9D85E'}/>
            }
            {(!bank || state.loading) && 
              <MdArrowCircleDown size={25} color={'#F9D85E'}/>
            }
            <span className="ml-2">
              {shortenAddress(connectedWallet?.walletAddress.toString())}
            </span>
          </div>
        }
      </div>
    </div>
  );
};

export { Navbar };
