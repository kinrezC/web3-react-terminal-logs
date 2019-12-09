import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import {
  Fab,
  TextField,
  Grid,
  ButtonBase,
  Typography
} from "@material-ui/core";
import { Web3ReactProvider } from "@web3-react/core";
import { TerminalHttpProvider } from "@terminal-packages/sdk";
import Web3 from "web3";

import Twitter from "../../assets/Twitter";
import Medium from "../../assets/Medium";
import Github from "../../assets/Github";
import Hex from "../../assets/Hex";

import { connectorTypes, SOCIAL_LINKS } from "../constants";

import useStyles from "./styles";

const getLibrary = provider => {
  console.log(provider);
  const library = new Web3(
    new TerminalHttpProvider({
      customHttpProvider: provider,
      apiKey: "IYFLu2akdq6D4WhIqhZVVw==",
      projectId: "ryAqzgjMRZoJWnxv",
      source: "MetaMask"
    })
  );
  library.pollingInterval = 8000;
  return library;
};

const MainContent = ({ values, setValues }) => {
  const context = useWeb3React();
  const classes = useStyles();
  const [activeConnector, setActiveConnector] = useState();

  const { library, account, activate, connector, chainId } = context;

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className={classes.root}>
        <div className={classes.appContainer}>
          <div className={classes.contentContainer}>
            <Typography className={classes.title}>
              Web3-React Logging Sandbox
            </Typography>
            <div className={classes.connectorInfoContainer}>
              <Typography className={classes.info}>
                ChainId: {chainId || "None"}
              </Typography>
              <Typography className={classes.info}>
                Account: {account || "None"}
              </Typography>
            </div>
            <div className={classes.optionsContainer}>
              {Object.keys(connectorTypes).map(con => {
                const current = connectorTypes[con];
                const disabled = current === connector;

                return (
                  <Grid item sm={4}>
                    <Fab
                      key={con}
                      onClick={() => {
                        setActiveConnector(current);
                        activate(connectorTypes[con]);
                      }}
                      disabled={disabled}
                      className={classes.optionButton}
                    >
                      <div className={classes.optionButton}>{con}</div>
                    </Fab>
                  </Grid>
                );
              })}
            </div>
            <div className={classes.inputsContainer}>
              <div className={classes.input}>
                <TextField
                  label="apiKey"
                  onChange={handleChange("apiKey")}
                  value={values.apiKey}
                  style={{
                    width: 250
                  }}
                />
              </div>
              <div className={classes.input}>
                <TextField
                  label="projectId"
                  onChange={handleChange("projectId")}
                  value={values.projectId}
                  style={{
                    width: 250
                  }}
                />
              </div>
            </div>
            <div className={classes.socialWrapper}>
              <div className={classes.githubIcon}>
                <ButtonBase
                  onClick={() => window.open(SOCIAL_LINKS["GITHUB"], "_blank")}
                >
                  <Github style={{ height: 35, width: 35 }} />
                </ButtonBase>
              </div>
              <div className={classes.twitterIcon}>
                <ButtonBase
                  onClick={() => window.open(SOCIAL_LINKS["TWITTER"], "_blank")}
                >
                  <Twitter style={{ height: 35, width: 35 }} />
                </ButtonBase>
              </div>
              <div className={classes.mediumIcon}>
                <ButtonBase
                  onClick={() => window.open(SOCIAL_LINKS["MEDIUM"], "_blank")}
                >
                  <Medium style={{ height: 35, width: 35 }} />
                </ButtonBase>
              </div>
              <div className={classes.terminalIcon}>
                <ButtonBase
                  onClick={() =>
                    window.open(SOCIAL_LINKS["TERMINAL"], "_blank")
                  }
                >
                  <Hex style={{ height: 35, width: 35 }} />
                </ButtonBase>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Web3ReactProvider>
  );
};

export default MainContent;