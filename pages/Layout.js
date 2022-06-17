import React from "react";
import Header from "/components/Header";
import AdminHeader from "/components/Admin/Header";
import Footer from "/components/Footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const { asPath } = useRouter();
  const router = useRouter();
  console.log(router);

  return (
    <React.Fragment>
      {asPath.includes("/Admin") ? (
        <React.Fragment>
          <AdminHeader />
          <main>{children}</main>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Header />
          <main>{children}</main>
          <Footer />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Layout;
