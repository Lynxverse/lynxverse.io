export const TERRA_WALLET = "terra1nl9hmntm42sufk0k4hpgzayq9wxy9xhw2uvl5c";
export const BSC_WALLET = "0x2057237aaF18F6f72552BED5733C68433BBA100e";
export const TRON_WALLET = "TCCvRCC9TfQeEhwU3fXJvhaVuAkK1Tp7Gx";

export const SUCCESS_OPTION: any = {
  position: "bottom-right",
  type: "success",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
};

export const ERROR_OPTION: any = {
  position: "bottom-right",
  type: "error",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount)",
  "event Transfer(address indexed from, address indexed to, uint amount)",
];
