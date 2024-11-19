import React from "react";
import Styles from "./Box.module.css";

interface BoxProps {
  children: React.ReactNode;
  variant?: "default" | "flex" | "grid";
}

const Box: React.FC<BoxProps> = ({ children, variant = "default" }) => {
  return <div className={`${Styles.box} ${Styles[variant]}`}>{children}</div>;
};

export default Box;
