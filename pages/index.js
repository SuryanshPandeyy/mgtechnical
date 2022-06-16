import { Button, ButtonGroup, Divider } from "@mui/material";
import Image from "next/image";
import data from "../data/service";
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
              High Quality Products
            </h3>
            <p>
              lorem kjfj ahfesjfin hargjf jakrkjwrh mklhiowerhowr iqwowrh oiwqrh
              jj oaiwhr kwrh wjwrh
            </p>
          </li>
          <li>
            <h3>
              <div className={styles.aboutLine}>
                <div>02</div>
                <div className={styles.line}></div>
              </div>
              High Quality Products
            </h3>
            <p>
              lorem kjfj ahfesjfin hargjf jakrkjwrh mklhiowerhowr iqwowrh oiwqrh
              jj oaiwhr kwrh wjwrh
            </p>
          </li>
          <li>
            <h3>
              <div className={styles.aboutLine}>
                <div>03</div>
                <div className={styles.line}></div>
              </div>
              High Quality Products
            </h3>
            <p>
              lorem kjfj ahfesjfin hargjf jakrkjwrh mklhiowerhowr iqwowrh oiwqrh
              jj oaiwhr kwrh wjwrh
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
