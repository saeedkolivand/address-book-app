import React from "react";
import "./notFound.style.scss";
import { Link } from "react-router-dom";
import { HomePathNames } from "pages/home/home.route";
import Button from "../button/Button";
import { NotFoundPropsTypes } from "./notFound.types";

const NotFound: React.FC<NotFoundPropsTypes> = (props) => {
  const { className = "" } = props;

  return (
    <div
      className={`not-found-wrapper absolute-center flex-center ${className}`}
      aria-label="not-found-wrapper"
    >
      Page Not Found :(
      <Link to={HomePathNames.root} className="not-found-wrapper__back-button">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
