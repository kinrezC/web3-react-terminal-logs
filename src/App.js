import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { TerminalHttpProvider } from "@terminal-packages/sdk";
import Web3 from "web3";

import TestComponent from "./components/TestComponent";

const getLibrary = provider => {
  const library = new Web3(
    new TerminalHttpProvider({
      customHttpProvider: provider,
      apiKey: "IYFLu2akdq6D4WhIqhZVVw==",
      projectId: "ryAqzgjMRZoJWnxv",
      source: "MetaMask"
    })
  );
  console.log(library);
  library.pollingInterval = 8000;
  return library;
};

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <TestComponent />
    </Web3ReactProvider>
  );
};

export default App;
