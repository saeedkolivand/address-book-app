import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { LoadingPropsTypes } from "./loading.types";
import "./loading.style.scss";

const Loading: React.FC<LoadingPropsTypes> = (props) => {
  const { loading = false } = props;

  const loadingStatus = loading ? "show-loading" : "hide-loading";

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [loading]);

  return ReactDOM.createPortal(
    <>
      <div className={`loading-background absolute-center ${loadingStatus}`} />
      <div
        className={`loading-wrapper absolute-center ${loadingStatus}`}
        aria-label="loading-wrapper"
      >
        <div className="loading-wrapper--loading-body flex-center absolute-center">
          <div className="loading-wrapper--loading-body__spinner" />
        </div>
      </div>
    </>,
    document.getElementById("loading")!
  );
};

export default Loading;
