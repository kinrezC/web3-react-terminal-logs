import React, { useState } from "react";
import { Web3ReactProvider } from "@web3-react/core";
import {
  TerminalHttpProvider,
  SourceType,
  Web3Versions
} from "@terminal-packages/sdk";
import Web3 from "web3";

import MainContent from "./components/main-content/MainContent";

const getSource = provider => {
  switch (provider) {
    case provider.isTorus:
      return SourceType.Torus;
    case provider.isPortis:
      return SourceType.Portis;
    case provider.isWalletConnect:
      return "WalletConnect";
    case provider.isFortmatic:
      return "Fortmatic";
    default:
      return SourceType.Web3ProviderEngine;
  }
};

const setWeb3Version = provider => {
  if (provider.isTorus) {
    return Web3Versions.one;
  } else {
    return Web3Versions.two;
  }
};

const App = () => {
  const [values, setValues] = useState({
    apiKey: "IYFLu2akdq6D4WhIqhZVVw==",
    projectId: "ryAqzgjMRZoJWnxv"
  });

  const getLibrary = provider => {
    let library;
    if (provider._metamask) {
      library = new Web3(window.terminal.ethereum);
    } else {
      library = new Web3(
        new TerminalHttpProvider({
          customHttpProvider: provider,
          apiKey: values.apiKey,
          projectId: values.projectId,
          source: getSource(provider),
          web3Version: setWeb3Version(provider)
        })
      );
    }
    library.pollingInterval = 8000;
    return library;
  };

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MainContent setValues={setValues} values={values} />
    </Web3ReactProvider>
  );
};

export default App;
