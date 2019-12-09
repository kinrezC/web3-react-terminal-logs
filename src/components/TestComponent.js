import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected, portis, fortmatic } from "../connectors";

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

  const getBalance = () => {
    library.eth
      .getBalance("0xCfbA9D7F3D4F9841ce9796117945559f0b4b5868")
      .then(console.log);
  };

  return (
    <div>
      <button onClick={() => activate(injected)}>Activate Injected</button>
      <button onClick={() => activate(portis)}>Activate Portis</button>
      <button onClick={() => activate(fortmatic)}>Activate Fortmatic</button>
      <button onClick={() => getBlock()}>Get Block</button>
      <button onClick={() => getBalance()}>Get Balance</button>
      {currentAccount}
    </div>
  );
};

export default TestComponent;
