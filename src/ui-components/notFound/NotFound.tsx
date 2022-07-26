import React from "react";
import { NotFoundPropsTypes } from "./notFound.types";
import "./notFound.style.scss";

const NotFound: React.FC<NotFoundPropsTypes> = (props) => {
  const { className = "" } = props;

  return (
    <div
      className={`not-found-wrapper absolute-center ${className}`}
      aria-label="not-found-wrapper"
    >
      Page Not Found :(
    </div>
  );
};

export default NotFound;
