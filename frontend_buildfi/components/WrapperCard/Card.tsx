import React from "react";
import styles from "./cards.module.css";
import BitCoin from "public/bitcoin.webp";
import Image from "next/image";
const Card = ({ item }: { item: any }) => {
  return (
    <div className={styles.wrapperCard}>
      <div className={styles.card}>
        <Image src={BitCoin} alt={'coin'} width={395} height={280}/>
      </div>
      <div className={styles.txt1}>{item.name}</div>
      <div className={styles.txt2}>{item.description}</div>
    </div>
  );
};

export default Card;
