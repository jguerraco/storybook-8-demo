import React from "react";
import Header from "@/components/Organisms/Header/Header";
import Footer from "@/components/Organisms/Footer/Footer";
import Styles from "./Layout.module.scss";

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
