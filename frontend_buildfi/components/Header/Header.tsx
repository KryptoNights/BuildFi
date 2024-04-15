import React, { useState } from "react";
import styles from "./header.module.css";
import useConnection from "@/utils/useConnection";
import { Button, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import type { RootState } from "../../src/store/index";

interface HeaderProps {
  onConnect: () => void;
  onDisconnect: () => void;
}

const Header = ({ onConnect, onDisconnect }: HeaderProps) => {
  const walletInfo = useSelector((state: RootState) => state.walletInfo);
  console.log(walletInfo);

  const { signer, accountData } = useConnection();

  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    setLoading(true);
    await onConnect();
    setLoading(false);
    setConnected(true);
  };

  const handleDisconnect = () => {
    onDisconnect();
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
      ) :  walletInfo.address ? (
        <>
          <button
            className="bg-[#03A9F4] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDisconnect}
          >
            🟢{" "}
            {walletInfo.address && walletInfo.address.length > 8
              ? `${walletInfo.address.slice(
                  0,
                  4
                )}...${walletInfo.address.slice(-4)}`
              : walletInfo.address}
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
  );
};

export default Header;
