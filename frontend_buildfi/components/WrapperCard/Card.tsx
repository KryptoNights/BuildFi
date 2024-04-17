import React from "react";
import styles from "./cards.module.css";
import BitCoin from "public/bitcoin.webp";
import Image from "next/image";

const Card = ({
  item,
  key,
  handleClick,
}: {
  item: any;
  key: number;
  handleClick: any;
}) => {
  const handleClickWrapper = () => {
    handleClick(item.id);
  };

  return (
    <div className={styles.wrapperCard} onClick={handleClickWrapper}>
      <div className={styles.card}>
        <Image src={BitCoin} alt={"coin"} width={395} height={280} />
      </div>
      <div className={styles.txt1}>{item.name}</div>
      <div className={styles.txt2}>{item.description}</div>
    </div>
  );
};

export default Card;
