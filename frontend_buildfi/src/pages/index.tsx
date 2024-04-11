import Head from "next/head";
import React from "react";
import styles from '../styles/Home.module.css'
import useDetectDevice from "../../customhook/useDetectDevice";
import { useRouter } from "next/router";
export default function Home() {
  const res = useDetectDevice();
  const router=useRouter();
  
  return (
    <>
      <div className={styles.page}>
        <div className={styles.main}>
          <h1>Navigate to Route :localhost:300/components</h1>
        </div>
      </div>
    </>
  );
}
