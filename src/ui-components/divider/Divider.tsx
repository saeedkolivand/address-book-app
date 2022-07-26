import React from "react";
import { DividerPropsTypes } from "./divider.types";
import "./divider.style.scss";

const Divider: React.FC<DividerPropsTypes> = (props) => {
  const { className = "", ...rest } = props;
  return <div className={`divider ${className}`} {...rest} />;
};

export default Divider;
