import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { TerminalHttpProvider } from "@terminal-packages/sdk";
import Web3 from "web3";
import { injected } from "./connectors";

import TestComponent from "./components/TestComponent";

const getLibrary = () => {
  const library = new Web3(
    new TerminalHttpProvider({
      customHttpProvider: injected,
      apiKey: "IYFLu2akdq6D4WhIqhZVVw==",
      projectId: "ryAqzgjMRZoJWnxv",
      source: "MetaMask"
    })
  );
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
