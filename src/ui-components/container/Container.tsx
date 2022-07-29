import React from "react";
import { Loading, Error } from "ui-components";
import { ContainerPropsTypes } from "./container.types";
import "./container.style.scss";

const Container: React.FC<ContainerPropsTypes> = (props) => {
  const {
    children,
    loading = false,
    hasError = false,
    errorMessage,
    errorRetryFunction,
    className = "",
    style,
    onClick,
  } = props;

  return (
    <section
      className={`container-wrapper ${className}`}
      onClick={onClick}
      style={style}
    >
      <Loading loading={loading} />

      <Error
        callbackFunction={errorRetryFunction}
        hasError={hasError}
        errorMessage={errorMessage}
      />

      {children}
    </section>
  );
};

export default Container;
