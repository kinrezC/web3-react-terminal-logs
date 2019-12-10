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
  if (provider.isTorus) {
    return SourceType.Torus;
  } else if (provider.isPortis) {
    return SourceType.Portis;
  } else if (provider.isWalletConnect) {
    return "WalletConnect";
  } else if (provider.isFortmatic) {
    return "Fortmatic";
  } else {
    return SourceType.Web3ProviderEngine;
  }
};

const setWeb3Version = provider => {
  if (provider.isPortis) {
    return Web3Versions.two;
  } else if (provider.isWalletConnect) {
    return Web3Versions.two;
  } else if (provider.isFortmatic) {
    return Web3Versions.two;
  } else {
    return Web3Versions.one;
  }
};

const App = () => {
  const [values, setValues] = useState({
    apiKey: "Z0CsA9B5xAkCjfw0kcKh6g==",
    projectId: "MrBOKJVOnrlAgnRw"
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
