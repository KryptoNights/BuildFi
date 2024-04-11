import React, { useEffect } from "react";
import styles from "./layout.module.css";
import useDetectDevice from "../../customhook/useDetectDevice";
import Header from "../Header/Header";

interface LayoutProps {
  children: React.ReactNode;

}

const Layout: React.FC<LayoutProps> = ({
  children,

}) => {

    const res=useDetectDevice();


  return (
    <>
      <div className={styles.container} >
        <Header/>
         <div className={styles.subContainer}>{children}</div>

      </div>
    </>
  );
};

export default Layout;