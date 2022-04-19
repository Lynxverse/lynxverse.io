import React, {useMemo, useEffect} from 'react'
import { IMAGE } from "utils/images";
import { Button } from "components/template/Button";
import { URL } from "utils/url";
import { ImAndroid } from "react-icons/im";

import { LCDClient, Coins } from '@terra-money/terra.js';
import { useWallet, useConnectedWallet } from '@terra-money/wallet-provider'

const Navbar = () => {

  let wallet = useWallet()
  let connectedWallet = useConnectedWallet()

  const lcd = useMemo(() => {
    if (!connectedWallet) {
      return undefined;
    }
    
    let lcd =  new LCDClient({
      URL: connectedWallet.network.lcd,
      chainID: connectedWallet.network.chainID,
    })

    return lcd;
  }, [connectedWallet])

  useEffect(() => {
    async function fetchBalance() {
      if (connectedWallet?.walletAddress && lcd) {
        let coins: Coins;
        try {
          [coins,] = await lcd.bank.balance(connectedWallet.walletAddress);

          console.log(coins)
        } catch (e) {
          return;
        }
      }
    }

    if (connectedWallet && lcd) {
      console.log(connectedWallet.walletAddress)
      fetchBalance()
    }
  }, [connectedWallet, lcd])

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
        <div
          className="bg-white"
          onClick = {() => {connectTo('extension')}}
        >
          Terra Station
        </div>
      </div>
    </div>
  );
};

export { Navbar };
