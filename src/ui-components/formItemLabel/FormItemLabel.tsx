import React from "react";
import { FormItemLabelPropsTypes } from "./formItemLabel.types";
import "./formItemLabel.style.scss";

const FormItemLabel: React.FC<FormItemLabelPropsTypes> = (props) => {
  const {
    wrapperClassName = "",
    className = "",
    label = "",
    required = false,
    wrapperStyle,
    style,
  } = props;

  return (
    <div
      className={`form-item-label-wrapper flex-center ${wrapperClassName}`}
      aria-label="form-item-label-wrapper"
      style={wrapperStyle}
    >
      <div
        className={`form-item-label ${className} ${required ? "required" : ""}`}
        aria-label="form-item-label"
        style={style}
      >
        {label}
      </div>
    </div>
  );
};

export default FormItemLabel;
