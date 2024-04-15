import React, { useState } from "react";
import styles from "./header.module.css";
import useConnection from "@/utils/useConnection";
import { Button, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";

const Header = () => {
  const { _connectToMetaMask, _disconnectFromMetaMask } = useConnection();
  const { signer, accountData } = useConnection();

  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    setLoading(true);
    await _connectToMetaMask();
    setLoading(false);
  };
  const handleDisconnect = () => {
    _disconnectFromMetaMask();
    localStorage.removeItem("walletData");
  };
  const router=useRouter();
  const handleRedirect = () => {
     router.push('./')
  };
  const handleRedirect2 = () => {
     router.push('./kyc')
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer1}>
        <h1 className={styles.txt1} onClick={handleRedirect}>BuildFI</h1>
        <a href="/components">Projects</a>
        <div  className={styles.txt2} onClick={handleRedirect2}>Looking for Funding? </div>
      </div>

      {loading ? (
        <CircularProgress />
      ) :  accountData.address ? (
        <>
          <button
            className="bg-[#03A9F4] hover:bg-blue-700 text-white font-bold py-2 px-8 rounded"
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
