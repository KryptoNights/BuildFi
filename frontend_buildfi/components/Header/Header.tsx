import React, { useState } from "react";
import styles from "./header.module.css";
import useConnection from "@/utils/useConnection";
import { Button, CircularProgress } from "@mui/material";

interface HeaderProps {
  props: any;
}

const Header: React.FC<HeaderProps> = ({ props }: HeaderProps) => {
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
        <div>Components</div>
        <div>Looking for Funding? </div>
      </div>

      {loading ? ( // Display CircularProgress while loading
        <CircularProgress />
      ) : connected && accountData.address ? (
        <>
          <button
            className="bg bg-red-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
