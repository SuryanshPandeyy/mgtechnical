import React from "react";
import styles from "../styles/Home.module.css";
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* <div className={styles.logo}>Logo</div> */}
      <div className={styles.footerMenu}>
        <div className={styles.footerDetail}>
          <h2 className={styles.heading}>MG Technicals</h2>
          <div>
            MG Technicals is a Rajatshan based IT Company, offering 360° IT
            solutions and Working as a Creative agency and doing some different
            type of innovations. Mohit gaur is Founder and CEO of MG Technicals,
            MG Technicals is serving in Whole india with successful customer
            History of Many national corporations since 2017
          </div>
        </div>
        <div className={styles.footerList}>
          <h2 className={styles.heading}>General</h2>
          <ul className={styles.list}>
            <li>
              <Link href="/Home">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/Contact">
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/About">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerList}>
          <h2 className={styles.heading}>About Us</h2>
          <ul className={styles.list}>
            <li>
              <Link href="/Privacy_Policy">
                <a>Privacy Policy</a>
              </Link>
            </li>
            <li>Terms of Services</li>
          </ul>
        </div>
      </div>
      <div className={styles.social}>
        <h2>Social</h2>
        <ul>
          <li>
            <Link href="/">
              <a>
                <BsFacebook size={30} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <BsInstagram size={30} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <BsYoutube size={30} />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
