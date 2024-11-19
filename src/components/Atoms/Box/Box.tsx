import React from "react";
import Styles from "./Box.module.scss";

interface BoxProps {
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
  return <div className={Styles.box}>{children}</div>;
};

export default Box;
