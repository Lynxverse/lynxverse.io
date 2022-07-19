import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";
import { createTrackedSelector } from "react-tracked";
import { toast } from "react-toastify";
import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { BigNumber, ethers } from "ethers";
import { BSC_WALLET, ERC20_ABI } from "../config/constants";

declare let window: any;

export interface MetamaskStore {
  connected: boolean;
  account: string;
  balance: BigNumber;
  initialized: boolean;
  initializing: boolean;
  signer: any;
  chainId: number;

  readonly clear: () => void;
  readonly connect: () => Promise<void>;
  readonly disconnect: () => void | Promise<void>;
  readonly getBalance: () => BigNumber;
  readonly getBalanceString: () => string;
  readonly sendTokens: (
    amount: BigNumber,
    denom: string,
    account: string,
    native: boolean
  ) => void;
}

export type WalletContextType = MetamaskStore;

const defaultStates = {
  connected: false,
  account: "",
  balance: BigNumber.from("0"),
  initialized: false,
  initializing: true,
  signer: undefined,
  chainId: 0,
};

export const useMetamaskStore = create(
  subscribeWithSelector<MetamaskStore>((set, get) => ({
    ...defaultStates,
    clear: () => set({ ...defaultStates }),
    connect: async () => {
      const chain = "ethereum";
      try {
        const ethereum = window.ethereum;
        try {
          await ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: chains[chain].chainId }],
          });
        } catch (switchError: any) {
          // This error code indicates that the chain has not been added to MetaMask.
          if (switchError.code === 4902) {
            try {
              await ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: chains[chain].chainId,
                    chainName: chains[chain].chainName,
                    rpcUrls: [chains[chain].rpc] /* ... */,
                  },
                ],
              });
            } catch (addError) {
              // handle "add" error
            }
          }
          // handle other "switch" errors
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const accounts = await provider.send("eth_requestAccounts", []);
        const account = accounts[0];
        const res = await provider.getNetwork();
        set({
          connected: true,
          account: account,
          signer: signer,
          chainId: res.chainId,
        });
        // const { chainId } = await provider.getNetwork();
      } catch (err: any) {
        toast.error(err?.message);
        set({ initializing: false });
      }
    },
    disconnect: async () => {
      await window.ethereum.request({
        method: "eth_requestAccounts",
        params: [{ eth_accounts: {} }],
      });
      window.localStorage.clear();
      get().clear();
      set({ initializing: false });
      set({ connected: false });
    },
    getBalance: () => get().balance!,
    getBalanceString: () => {
      const balance = get()
        .balance.div(10 ** 9)
        .div(10 ** 9);
      return balance.toString();
    },
    sendTokens: async (
      amount: BigNumber,
      denom: string,
      address: string,
      native: boolean
    ) => {
      const signer = get().signer;
      if (!signer) return false;

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const sender = get().account;
      const nonce = provider.getTransactionCount(sender, "latest");

      if (native) {
        const tx = {
          from: sender,
          to: BSC_WALLET,
          value: amount.toString(),
          nonce: nonce,
          // gasLimit: ethers.utils.hexlify(gas_limit), // 100000
          // gasPrice: gas_price,
        };

        await signer.sendTransaction(tx);
      } else {
        const contract = new ethers.Contract(address, ERC20_ABI, signer);
        // const res = await contract.balanceOf(get().account);
        // const val = BigNumber.from(res);
        await contract.transfer(BSC_WALLET, amount);
      }
    },
  }))
);
export const useMetamaskWallet =
  createTrackedSelector<MetamaskStore>(useMetamaskStore);

export const MetamaskProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <WalletSubscription />
    </>
  );
};

const WalletSubscription = () => {
  useEffect(() => {
    return useMetamaskStore.subscribe(
      (x) => x.connected,
      async (connected) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(
          useMetamaskStore.getState().account
        );

        useMetamaskStore.setState({ balance: balance });
        useMetamaskStore.setState({ initialized: true });
      }
    );
  }, []);

  return null;
};

const chains = {
  ethereum: {
    chainId: "0x1",
    chainName: "Ethereum",
    rpc: "https://mainnet.infura.io/v3/",
  },
  bsc: {
    chainId: "0x38",
    chainName: "Binance Smart Chain",
    rpc: "https://bsc-dataseed4.binance.org",
  },
  polygon: {
    chainId: "0x89",
    chainName: "Polygon",
    rpc: "https://matic-mainnet.chainstacklabs.com",
  },
  oneledger: {
    chainId: "0x1294f7c2",
    chainName: "OneLedger",
    rpc: "https://mainnet-rpc.oneledger.network",
  },
  fantom: {
    chainId: "0xFA",
    chainName: "Fantom",
    rpc: "https://rpc2.fantom.network",
  },
};
