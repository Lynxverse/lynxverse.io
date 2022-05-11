import React, { useMemo, useEffect, useState } from 'react'
import { ImAndroid, ImCoinDollar } from "react-icons/im";
import { LCDClient, Coins } from '@terra-money/terra.js';
import { useWallet, useConnectedWallet } from '@terra-money/wallet-provider'
import { BigNumber, ethers } from "ethers";

import menuButton from '../../assets/images/menuButton.svg';
import { IMAGE } from "utils/images";
import { Button } from "components/template/Button";
import { URL } from "utils/url";
import { useStore, ActionKind } from 'store';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import { errorOption, successOption } from 'utils/Util';
import { MdOutlineAccountBalanceWallet, MdArrowCircleDown } from 'react-icons/md';

declare var window: any;

export function shortenAddress(address: string | undefined) {
  if (address) {
    let prefix = address.slice(0, 5);
    let suffix = address.slice(-5)
    return prefix + "..." + suffix;
  }
  return "";
}
const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { state, dispatch } = useStore();
  const [bank, setBank] = useState(false);
  const [bankMetamask, setBankMetamask] = useState(false);
  const [addressMetamask, setAddressMetamask] = useState('');
  const [displayMenu, setDisplayMenu] = useState("hidden");
  const { addToast } = useToasts();

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

    let lcd = new LCDClient({
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
            dispatch({ type: ActionKind.setUusdBalance, payload: coins.get('uusd')?.amount.toNumber() });
          }
          if (coins.get('uluna')) {
            dispatch({ type: ActionKind.setUlunaBalance, payload: coins.get('uluna')?.amount.toNumber() });
          }
        } catch (e) {
          return;
        }
      }
    }

    if (connectedWallet && lcd) {
      fetchBalance()
    }
  }, [connectedWallet, dispatch, lcd])

  function connectTo(to: string) {
console.log(wallet)
    if (to === 'extension') {
      wallet.connect(wallet.availableConnectTypes[1])
    } else if (to === 'mobile') {
      wallet.connect(wallet.availableConnectTypes[2])
    } else if (to === 'disconnect') {
      wallet.disconnect()
      // dispatch({ type: 'setWallet', message: {} })
    }
  }

  useEffect(() => {
    window.ethereum?.on('chainChanged', async (chainId: string) => {
      if (chainId == '0x61') {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const account = accounts[0];

        let balance = await provider.getBalance(account);

        dispatch({ type: ActionKind.setEthBalance, payload: balance });
        dispatch({ type: ActionKind.setMetamaskConnected, payload: true });
        setBankMetamask(true);
      }
      else {
        addToast("Please switch to BSC testnet", errorOption);
      }
    });
    if (!window.ethereum) {
      addToast("Please install metamask first", errorOption);
    }
  }, [])

  async function connectToMetamask() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    const account = accounts[0];

    const { chainId } = await provider.getNetwork()
    if (chainId != 97) {
      window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [{
          chainId: "0x61",
          rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
          chainName: "BSC Testnet",
          nativeCurrency: {
            name: "BNB",
            symbol: "BNB",
            decimals: 18
          },
          blockExplorerUrls: ["https://testnet.bscscan.com"]
        }]
      });
    }
    else {
      let balance = await provider.getBalance(account);

      dispatch({ type: ActionKind.setEthBalance, payload: balance });
      dispatch({ type: ActionKind.setMetamaskConnected, payload: true });
      setBankMetamask(true);
    }
    setAddressMetamask(account);
  }
  return (
    <div className={"fixed z-20 w-full bg-black/70 backdrop-blur-md h-32" + (navbarOpen ? " h" : "0")}>
      <div className="mx-auto flex w-11/12 justify-between py-5">
        <a href='/'><img src={IMAGE.logo} className="w-[150px] md:w-[200px] h-8 md:h-10" alt="logo" /></a>
        <div className=" flex w-11/12 place-content-end">
          <div className="demo-button px-2">
            <Button
              link={URL.demo}
              icon={true}
              iconChildren={<ImAndroid />}
              title="Play Demo"
              style={`primary`}
            />
          </div>
          <div className="block rounded-full bg-[#0084FF] sm:hidden" >
            <button className="flex items-center px-1.5 py-1.5 border rounded-full  text-white border-white hover:text-white hover:border-white"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <ImCoinDollar />
            </button>
          </div>
          <div className={"flex-col sm:flex-row absolute sm:relative bottom-8 sm:bottom-0 left-50 sm:left-0 rounded-full bg-[#0084FF] justify-center items-center cursor-pointer w-fit h-8 md:h-10 sm:flex md:text-base" +
            (navbarOpen ? " flex" : " hidden")
          }

            id="example-navbar-danger">
            <div className="flex rounded-full bg-[#0084FF] space-x-2 text-stone-200 justify-center items-center cursor-pointer w-32 md:w-36 h-8 md:h-10 text-sm md:text-base">
              <div className='connect-wallet md:text-base pl-1'><ImCoinDollar /></div>
              Connect Wallet
            </div>
            <div className="flex bg-white rounded-full justify-center place-items-end cursor-pointer w-48 h-8 md:h-10">
              {!state.connected &&
                <div
                  className="relative bg-white  hover:bg-sky-300  rounded-l-full justify-center items-center cursor-pointer w-40 h-8 md:h-10 text-sm md:text-base"
                  onMouseEnter={() => setDisplayMenu("block")}
                  onMouseLeave={() => setDisplayMenu('hidden')}
                >
                  <div className="flex h-full  justify-center items-center whitespace-nowrap px-4">
                    Terra
                  </div>
                  <div
                    className={`absolute ${displayMenu} text-white rounded-lg bg-yellow-900 flex flex-col cursor-pointer right-0`}
                  >
                    <div
                      className="hover:bg-white hover:text-black rounded-lg px-4 py-2 flex items-baseline"
                      onClick={() => connectTo('extension')}
                    >
                      <span className="whitespace-nowrap">Terra Station(Browser)</span>&nbsp;&nbsp;
                      {state.connected &&
                        <div className="text-[9px]">
                          {shortenAddress(connectedWallet?.walletAddress)}
                        </div>
                      }
                    </div>
                    <div
                      className="hover:bg-white hover:text-black rounded-lg px-4 py-2 flex items-baseline"
                      onClick={() => connectTo('mobile')}
                    >
                      <span className="whitespace-nowrap">Terra Station(QR CODE)</span>&nbsp;&nbsp;
                      {state.connected &&
                        <div className="text-[9px]">
                          {shortenAddress(connectedWallet?.walletAddress)}
                        </div>
                      }
                    </div>
                  </div>
                </div>
              }
              {state.connected &&
                <div
                  className="flex bg-white hover:bg-sky-300 rounded-l-full justify-center items-center cursor-pointer w-40 h-8 md:h-10 text-sm md:text-base"
                  onClick={() => connectTo('disconnect')}
                >
                  {(bank && !state.loading) &&
                    <MdOutlineAccountBalanceWallet size={25} color={'#F9D85E'} />
                  }
                  {(!bank || state.loading) &&
                    <MdArrowCircleDown size={25} color={'#F9D85E'} />
                  }
                  <span className="ml-2">
                    {shortenAddress(connectedWallet?.walletAddress.toString())}
                  </span>
                </div>
              }
              <div className="flex bg-black/70 justify-center place-items-end cursor-pointer min-w-[1px] h-8 md:h-10"></div>

              {!bankMetamask &&
                <div
                  className="flex bg-white hover:bg-sky-300 rounded-r-full justify-center items-center cursor-pointer w-32 h-8 md:h-10 text-sm md:text-base px-4"
                  onClick={() => { connectToMetamask() }}
                >
                  Metamask
                </div>
              }
              {bankMetamask &&
                <div
                  className="flex bg-white  hover:bg-sky-300 rounded-r-full justify-center items-center cursor-pointer w-40 h-8 md:h-10 text-sm md:text-base"
                >
                  <MdOutlineAccountBalanceWallet size={25} color={'#F9D85E'} />
                  <span className="ml-2">
                    {shortenAddress(addressMetamask.toString())}
                  </span>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
