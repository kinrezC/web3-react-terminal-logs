import {
  injected,
  portis,
  fortmatic,
  network,
  torus,
  walletconnect
} from "../connectors";

export const connectorTypes = {
  Injected: injected,
  Portis: portis,
  Fortmatic: fortmatic,
  Network: network,
  Torus: torus,
  WalletConnect: walletconnect
};

export const connectorNames = {
  Injected: "metamask",
  Portis: "portis",
  Fortmatic: "fortmatic",
  Network: "infura",
  Torus: "torus",
  WalletConnect: "walletconnect"
};

export const SOCIAL_LINKS = {
  TWITTER: "https://twitter.com/terminaldotco",
  GITHUB: "https://github.com/Terminal-Systems",
  MEDIUM: "https://medium.com/terminaldotco",
  TERMINAL: "https://terminal.co/"
};
