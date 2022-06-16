import { Button, Dialog, Divider } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "/styles/Home.module.css";
import data from "/data/service";

const Services = () => {
  return (
    <>
      <div className={styles.serviceContainer} style={{ margin: 0 }}>
        <Divider>
          <h1>Our Services</h1>
        </Divider>

        <div className={styles.serviceBox}>
          {data.map((item, i) => (
            <>
              <div className={styles.service}>
                <item.image className={styles.serviceIcon} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
