import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./sidebar.module.css";
import data from "../../constant/constant";
import { circleOnLens } from "@/utils/transitions";
import useConnection from "@/utils/useConnection";

const Sidebar = () => {
  const { accountData } = useConnection();

  const [profiles, setProfiles] = useState<Array<[string, string]>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await circleOnLens(accountData.address!);

        const profileMap: any = Array.from(response.entries());
        setProfiles(profileMap);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // useEffect(() => {
  //   console.log(profiles.length === 0 ? "Empty" : "Not Empty");
  // }, [profiles]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper1}>
        <div className={styles.txt1}>
          <h4>Your Lens Circle</h4>
        </div>

        {profiles.length === 0 ? (
          <div className={styles.txt2}>
            <h2 style={{
              fontSize: "2vh"
            }}>Your Lens Circle is empty</h2>
          </div>
        ) : (
          profiles.map((profile, index) => (
            <div className={styles.txt2} key={index}>
              <h2>{`${profile[1]}: `}</h2>
              <h2>{` ${profile[0].slice(0, 4)}...${profile[0].slice(-4)}`}</h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar;
