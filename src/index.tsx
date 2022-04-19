import React from "react";
import ReactDOM from "react-dom";
import "./css/tailwind.css";
import "aos/dist/aos.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StoreProvider } from './store'
import { ToastContainer, toast } from 'react-toastify';
import {
  NetworkInfo,
  WalletProvider,
  WalletStatus,
  getChainOptions,
} from '@terra-money/wallet-provider';

getChainOptions().then((chainOptions) => {
ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <WalletProvider {...chainOptions}>
        <App />
        <ToastContainer/>
      </WalletProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
