import { Button, ButtonGroup, Divider } from "@mui/material";
import Image from "next/image";
// import data from "../data/service";
import works from "../data/works";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import useSWR from "swr";
import {
  MdWeb,
  MdOutlineAppSettingsAlt,
  MdOutlineMic,
  MdAddBusiness,
} from "react-icons/md";

import { BsTerminalFill } from "react-icons/bs";

export default function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
   const { data, error } = useSWR("/api/services", fetcher);

  if (error) return console.log(error);
  if (!data) return console.log('loading');

  const serviceData = data.service;
  console.log(serviceData);

  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerBox}>
          <Image
            src="/image/banner.webp"
            alt="banner"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.bannerBtnContainer}>
          <Link href="https://wa.me/+919571735742" passHref>
            <Button>Whatsapp</Button>
          </Link>
          <Link href="tel: +919571735742" passHref>
            <Button>Call Us</Button>
          </Link>
        </div>
      </div>

      <div className={styles.serviceContainer}>
        <Divider className={styles.divider}>
          <div className={styles.heading}></div>
          <h2>Our Services</h2>
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
        <Link href="./Services" passHref>
          <Button className={styles.serviceBtn}>Load More</Button>
        </Link>
      </div>

      <div className={styles.aboutContainer}>
        <Divider className={styles.divider}>
          <div className={styles.heading}></div>
          <h2>Why Choose Us</h2>
        </Divider>

        <ol className={styles.aboutBox}>
          <li>
            <h3>
              <div className={styles.aboutLine}>
                <div>01</div>
                <div className={styles.line}></div>
              </div>
              High Quality
            </h3>
            <p></p>
          </li>
          <li>
            <h3>
              <div className={styles.aboutLine}>
                <div>02</div>
                <div className={styles.line}></div>
              </div>
              Best Service
            </h3>
            <p></p>
          </li>
          <li>
            <h3>
              <div className={styles.aboutLine}>
                <div>03</div>
                <div className={styles.line}></div>
              </div>
              High Quality Team
            </h3>
            <p></p>
          </li>
        </ol>
      </div>
      <div className={styles.serviceContainer}>
        <Divider className={styles.divider}>
          <div className={styles.heading}></div>
          <h2>Our Clients</h2>
        </Divider>
        <div className={styles.worksBox}>
          {works.slice(0, 4).map((item, i) => (
            <div key={i} className={styles.work}>
              <Image
                src="/image/banner.webp"
                alt="testimonials"
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
              />
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
