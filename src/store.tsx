import React, { createContext, useContext, useReducer } from 'react'
import { ConnectedWallet } from '@terra-money/wallet-provider'
import { LCDClient } from '@terra-money/terra.js'
import { BigNumber, ethers } from "ethers";

interface Action {
  type: ActionKind;
  payload: any;
}

export interface AppContextInterface {
  loading: boolean,
  net: "mainnet" | "testnet",
  connected: Boolean,
  metamaskConnected: Boolean,
  lcd: LCDClient,
  wallet: ConnectedWallet | undefined,
  uusdBalance: number,
  ulunaBalance: number,
  ethBalance: number,

}

const initialState: AppContextInterface = {
  loading: false,
  net: "testnet",
  connected: false,
  metamaskConnected: false,
  lcd: new LCDClient({ //
    URL: 'https://lcd.terra.dev',
    chainID: 'columbus-5',
    gasPrices: { uusd: 0.45 },
  }),
  wallet: undefined,
  uusdBalance: 0,
  ulunaBalance: 0,
  ethBalance: 0,
}

export enum ActionKind{
  setLoading,
  setNet,
  setPoolAddr,
  setLcd,
  setConnected,
  setMetamaskConnected,
  setWallet,
  setUusdBalance,
  setUlunaBalance,
  setEthBalance
}

const StoreContext = createContext<{ state: AppContextInterface; dispatch: React.Dispatch<any>; }>
({
  state: initialState,
  dispatch: () => null
});

export const reducer = (state: AppContextInterface,  action: Action ) => {
  switch (action.type) {
    case ActionKind.setLoading:
      return { ...state, loading: action.payload}
    case ActionKind.setNet:
      return { ...state, net: action.payload}
    case ActionKind.setConnected:
      return { ...state, connected: action.payload }
    case ActionKind.setMetamaskConnected:
      return { ...state, metamaskConnected: action.payload }
    case ActionKind.setLcd:
      return { ...state, lcd: action.payload }
    case ActionKind.setWallet:
      return { ...state, wallet: action.payload }
    case ActionKind.setUusdBalance:
      return { ...state, uusdBalance: action.payload }
    case ActionKind.setUlunaBalance:
      return { ...state, ulunaBalance: action.payload }
    case ActionKind.setEthBalance:
      return { ...state, ethBalance: action.payload }
    default:
      return state
  }
}

export const StoreProvider: React.FC = ({ children}) => 
{
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)
export const useWallet = () => {
  const {state, dispatch} = useStore();
  return state.wallet;
}
export const useLCD = () => {
  const {state, dispatch} = useStore();
  return state.lcd;
}

export const useTerraAPIURL = () => {
  const {state, dispatch} = useStore();

  let baseURL: string;
  if(state.net == 'mainnet')
    baseURL =  "https://api.terra.dev";
  else
    baseURL = "https://bombay-api.terra.dev";

  return baseURL;
}

export const useNetworkName = () => {
  const {state, dispatch} = useStore();
  return state.net;
}


export function floor(amount: number){
  return Math.floor(amount * 100) /100;
}

export function floorNormalize(amount: number){
  return Math.floor(amount/10**4)/100;
}

export const useUSTBalance = () => {
  const {state, dispatch} = useStore();
  let balance = state.uusdBalance;
  return floorNormalize(balance);
}

export const useLUNABalance = () => {
  const {state, dispatch} = useStore();
  let balance = state.ulunaBalance;
  return floorNormalize(balance);
}

export const useEthBalance = () => {
  const {state, dispatch} = useStore();
  let balance = floor(parseFloat(ethers.utils.formatEther(state.ethBalance)));
  return balance;
}
