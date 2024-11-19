import React from "react";
import Header from "../../Organisms/Header/Header";
import Footer from "../../Organisms/Footer/Footer";
import Styles from "./Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={Styles["site-content"]}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
