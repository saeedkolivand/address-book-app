import React from "react";
import { InputPropsTypes } from "./input.types";
import "./input.style.scss";

const Input: React.FC<InputPropsTypes> = (props) => {
  const { className = "", ...rest } = props;

  return <input {...rest} className={`todo-input ${className}`} />;
};

export default Input;
