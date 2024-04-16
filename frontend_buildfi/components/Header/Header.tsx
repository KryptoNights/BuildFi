import React, { useState } from "react";
import styles from "./header.module.css";
import useConnection from "@/utils/useConnection";
import { Button, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../src/store/index";

interface HeaderProps {
  onConnect: () => void;
  onDisconnect: () => void;
}
import { useRouter } from "next/router";
import { resetWalletInfo } from "@/store/slice/walletinfo";

const Header = ({ onConnect, onDisconnect }: HeaderProps) => {
  const walletInfo = useSelector((state: RootState) => state.walletInfo);
  console.log(walletInfo);
  const dispatch = useDispatch();

  const { signer, accountData } = useConnection();

  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    setLoading(true);
    await onConnect();
    setLoading(false);
  };
  const handleDisconnect = () => {
    onDisconnect();
    dispatch(resetWalletInfo());
    localStorage.removeItem("walletData");
  };

  const router = useRouter();
  const handleRedirect = () => {
    router.push("./");
  };
  const handleRedirect2 = () => {
    router.push("./kyc");
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer1}>
        <h1 className="text-[24px]/[0px] cursor-pointer" onClick={handleRedirect}>
          BuildFI
        </h1>
        <a href="/projects">Projects</a>
        <a href="/kyc" className="text-[16px]/[0px] cursor-pointer" onClick={handleRedirect2} >
          Looking for Funding?{" "}
        </a>
      </div>

      {loading ? (
        <CircularProgress />
      ) : walletInfo.address ? (
        <>
          <button
            className="bg-[#03A9F4] hover:bg-blue-700 text-white font-bold py-2 px-8 rounded"
            onClick={handleDisconnect}
          >
            🟢{" "}
            {walletInfo.address && walletInfo.address.length > 8
              ? `${walletInfo.address.slice(0, 4)}...${walletInfo.address.slice(
                  -4
                )}`
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
