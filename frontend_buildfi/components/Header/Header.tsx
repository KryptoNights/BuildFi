import React, { useState } from "react";
import styles from "./header.module.css";
import useConnection from "@/utils/useConnection";
import { Button, CircularProgress } from "@mui/material";

const Header = () => {
  const { _connectToMetaMask, _disconnectFromMetaMask } = useConnection();
  const { signer, accountData } = useConnection();

  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    setLoading(true);
    await _connectToMetaMask();
    setLoading(false);
    setConnected(true);
  };

  const handleDisconnect = () => {
    _disconnectFromMetaMask();
    setConnected(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer1}>
        <h1 className={styles.txt1}>BuildFI</h1>
        <a href="/components">Components</a>
        <div className="">Looking for Funding? </div>
      </div>

      {loading ? (
        <CircularProgress />
      ) : connected && accountData.address ? (
        <>
          <button
            className="bg-[#03A9F4] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDisconnect}
          >
            🟢{" "}
            {accountData.address && accountData.address.length > 8
              ? `${accountData.address.slice(
                  0,
                  4
                )}...${accountData.address.slice(-4)}`
              : accountData.address}
          </button>
        </>
      ) : (
        <>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleConnect}
          >
            Connect
          </button>
        </>
      )}
    </div>
    // </div>
  );
};

export default Header;
