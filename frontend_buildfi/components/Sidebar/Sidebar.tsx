import React from "react";
import styles from "./sidebar.module.css";
import data from "../../constant/constant";
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper1}>
        <div className={styles.txt1}>
          <h4>Follow for updates</h4>
        </div>
        <div className={styles.txt2}> Twitter @codewithakki</div>
      </div>
      <div className={styles.wrapper1}>
        <div className={styles.txt1}>
          <h4>All Components</h4>
        </div>

        {data.map((item, index) => (
          <div className={styles.txt2} key={index}>
            {item?.name}{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
