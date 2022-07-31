import React from "react";
import { FormItemLabelPropsTypes } from "./formItemLabel.types";
import "./formItemLabel.style.scss";

const FormItemLabel: React.FC<FormItemLabelPropsTypes> = (props) => {
  const { className = "", label = "", required = false, style } = props;

  return (
    <div className="flex-center" style={{ justifyContent: "unset" }}>
      <div
        className={`form-item-label ${className} ${required ? "required" : ""}`}
        style={style}
      >
        {label}
      </div>
    </div>
  );
};

export default FormItemLabel;
