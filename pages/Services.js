import { Button, Dialog, Divider } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "/styles/Home.module.css";
import useSWR from "swr";

const Services = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("/api/services", fetcher);

  if (error) return console.log(error);
  if (!data) return console.log("loading");

  const serviceData = data.service;

  return (
    <>
      <div className={styles.serviceContainer}>
        <Divider className="divider">
          <div className="heading"></div>
          <h1>Our Services</h1>
        </Divider>

        <div className={styles.serviceBox}>
          {serviceData &&
            serviceData.slice(0, 4).map((item, i) => (
              <div key={i} className={styles.service}>
                <item.file className={styles.serviceIcon} />
                {/* <Image
                src={item.file}
                alt="testimonials"
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
              /> */}
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Services;
