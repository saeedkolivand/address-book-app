import ReactDOM from "react-dom";
import React, { useEffect } from "react";
import { ErrorPropsTypes } from "./error.types";
import "./error.style.scss";

const Error: React.FC<ErrorPropsTypes> = (props) => {
  const {
    hasError,
    callbackFunction,
    errorMessage = "Error while submitting todo!",
  } = props;

  const errorStatus = hasError ? "show-error" : "hide-error";

  useEffect(() => {
    if (hasError) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [hasError]);

  return ReactDOM.createPortal(
    <>
      <div className={`error-background absolute-center ${errorStatus}`} />
      <div
        className={`error-wrapper absolute-center ${errorStatus}`}
        aria-label="error-wrapper"
      >
        <div className="error-wrapper--message-text">{errorMessage}</div>
        <button
          className="error-wrapper--retry-button"
          type="button"
          onClick={callbackFunction}
        >
          Retry
        </button>
      </div>
    </>,
    document.getElementById("error-modal")!
  );
};

export default Error;
