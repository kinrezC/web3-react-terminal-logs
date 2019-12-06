import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../connectors";

const TestComponent = () => {
  const context = useWeb3React();

  const { library, account, activate } = context;

  const [currentAccount, setCurrentAccount] = useState("None");

  useEffect(() => {
    if (account) {
      setCurrentAccount(account);
    }
  }, [account]);

  const getBlock = () => {
    library.eth.getBlockNumber().then(console.log);
  };

  return (
    <div>
      <button onClick={() => activate(injected)}>Activate</button>
      <button onClick={() => getBlock()}>Get Block</button>
      {currentAccount}
    </div>
  );
};

export default TestComponent;
