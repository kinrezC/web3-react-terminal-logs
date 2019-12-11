import { SourceType, Web3Versions } from "@terminal-packages/sdk";

import {
  injected,
  portis,
  fortmatic,
  network,
  torus,
  walletconnect
} from "./connectors";

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

export const setWeb3Version = provider => {
  const mapProviderToWeb3Version = {
    [provider.isPortis]: Web3Versions.two,
    [provider.isWalletConnect]: Web3Versions.two,
    [provider.isFortmatic]: Web3Versions.two
  };

  return mapProviderToWeb3Version[provider] || Web3Versions.one;
};

export const setSource = provider => {
  const mapProviderToSource = {
    [provider.isTorus]: SourceType.Torus,
    [provider.isPortis]: SourceType.Portis,
    [provider.isWalletConnect]: "Wallet-Connect",
    [provider.isFortmatic]: "Fortmatic"
  };

  return mapProviderToSource[provider] || SourceType.Web3ProviderEngine;
};

export const SOCIAL_LINKS = {
  TWITTER: "https://twitter.com/terminaldotco",
  GITHUB: "https://github.com/Terminal-Systems",
  MEDIUM: "https://medium.com/terminaldotco",
  TERMINAL: "https://terminal.co/"
};
