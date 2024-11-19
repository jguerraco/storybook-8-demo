import React from "react";
import Styles from "./Input.module.scss";

interface InputProps {
  id: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ id, type, value, onChange }) => {
  return (
    <input
      id={id}
      className={Styles.input}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
