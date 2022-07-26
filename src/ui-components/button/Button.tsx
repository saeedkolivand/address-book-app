import React from "react";
import { ButtonPropsTypes } from "./button.types";
import "./button.style.scss";

const Button: React.FC<ButtonPropsTypes> = (props) => {
  const { className = "", type = "button", ...rest } = props;

  return (
    <button
      type={type}
      className={`button-wrapper flex-center ${className}`}
      aria-label="button-wrapper"
      {...rest}
    />
  );
};

export default Button;
