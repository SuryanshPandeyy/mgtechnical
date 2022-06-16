import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "/styles/Home.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "/public/icon/logo.jpg";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const router = useRouter();

  const Pages = [
    { title: "Home", url: "/" },
    {
      title: "Our Services",
      url: "/Services",
    },
    { title: "About", url: "/About" },
    { title: "Contact", url: "/Contact" },
  ];

  useEffect(() => {
    if (menu) {
      setMenu(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  return (
    <React.Fragment>
      <div className={styles.header}>
        <div className={styles.topHeader}>
          <Link href="/">
            <a className={styles.logo}>
              <div className={styles.logo}>
                <Image
                  src={logo}
                  alt="logo"
                  width="70"
                  height="70"
                  objectFit="contain"
                  loader={({ src, width }) => `${src}/?${width}`}
                />
              </div>
            </a>
          </Link>
          <nav className={styles.navigation}>
            {Pages.map((item, i) => (
              <Link key={i} href={item.url}>
                <a className={styles.link}>
                  <div>{item.title}</div>
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt="play_store"
                      width={20}
                      height={20}
                    />
                  )}
                </a>
              </Link>
            ))}
          </nav>
          <div className={styles.mobileNav}>
            <IconButton style={styles.iconButton} onClick={() => setMenu(true)}>
              <AiOutlineMenu
                size="30"
                color="#000"
                className={styles.menuIcon}
              />
            </IconButton>
          </div>
        </div>

        <div
          className={styles.menu}
          style={
            menu
              ? {
                  right: 0,
                }
              : { right: "-100%" }
          }
        >
          <div className={styles.close}>
            <IconButton
              style={styles.iconButton}
              onClick={() => setMenu(false)}
            >
              <AiOutlineClose
                size="40"
                className={styles.menuIcon}
                style={{ color: "#000" }}
              />
            </IconButton>
          </div>
          <div className={styles.menuList}>
            {Pages.map((item, i) => (
              <Link key={i} href={item.url}>
                <a className={styles.link}>{item.title}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
