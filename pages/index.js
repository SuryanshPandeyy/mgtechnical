import { Button, ButtonGroup, Divider } from "@mui/material";
import Image from "next/image";
import data from "../data/service";
import works from "../data/works";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
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
          {data.slice(0, 4).map((item, i) => (
            <div key={i} className={styles.service}>
              <item.image className={styles.serviceIcon} />
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
          <h2>Recent Work</h2>
        </Divider>
        <div className={styles.worksBox}>
          {works.slice(0, 4).map((item, i) => (
            <div key={i} className={styles.work}>
              <item.image className={styles.workIcon} />
              <h3>{item.title}</h3>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
