import React, { useState } from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { TerminalHttpProvider } from "@terminal-packages/sdk";
import Web3 from "web3";

import MainContent from "./components/main-content/MainContent";

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
          source: "web3-react"
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
