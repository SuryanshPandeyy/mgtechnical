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
                <Image
                  src={item.image}
                  alt="service1"
                  width={100}
                  height={100}
                  className={styles.serviceImg}
                />
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
