import React from "react";
import Styles from "./Label.module.scss";

interface LabelProps {
  htmlFor?: string;
  text: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, text }) => {
  return (
    <label htmlFor={htmlFor} className={Styles.label}>
      {text}
    </label>
  );
};

export default Label;
