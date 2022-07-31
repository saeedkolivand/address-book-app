import React, { forwardRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Button } from "ui-components";
import { ReactComponent as CloseIcon } from "assets/icons/close.svg";
import useMediaQuery from "app/hooks/useMediaQuery";
import { ModalPropsTypes } from "./modal.types";
import "./modal.style.scss";

const Modal: React.FC<ModalPropsTypes> = forwardRef((props, ref) => {
  const {
    title = "",
    className = "",
    bodyClassName = "",
    visible = false,
    cancelButtonClassName = "",
    okButtonStyle,
    cancelButtonStyle,
    okButtonClassName = "",
    footerClassName = "",
    okButtonDisabled = false,
    okText = "OK",
    cancelText = "Cancel",
    onOk,
    onCancel,
    hideClose,
    titleClassName = "",
    backgroundClassName = "",
    children,
    style,
    width = 520,
    closeIcon = <CloseIcon />,
    backgroundStyle,
    hideOkButton = false,
  } = props;

  const modalVisibilityStatus = visible ? "show-modal" : "hide-modal";

  const isMobile = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCancel();
      }
    };
    if (visible) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [visible]);

  return ReactDOM.createPortal(
    <>
      <div
        className={`modal-background absolute-center ${backgroundClassName} ${modalVisibilityStatus}`}
        onClick={onCancel}
        style={{
          ...backgroundStyle,
          top: window.scrollY,
        }}
        ref={ref}
      />

      <div
        className={`modal-wrapper absolute-center ${className} ${modalVisibilityStatus}`}
        aria-label="modal-wrapper"
        style={{
          width,
          top: isMobile ? window.scrollY + 200 : window.scrollY + 100,
          ...style,
        }}
        ref={ref}
      >
        <div className={`modal-wrapper__header flex-center ${titleClassName}`}>
          <div className="modal-wrapper__header--title">{title}</div>
          {!hideClose && (
            <div
              className="modal-wrapper__header--close flex-center"
              onClick={onCancel}
            >
              {closeIcon}
            </div>
          )}
        </div>

        <div className={`modal-wrapper__body ${bodyClassName}`} style={style}>
          {children}
        </div>

        <div className={`modal-wrapper__footer flex-center ${footerClassName}`}>
          <Button
            className={`modal-wrapper__footer--cancel ${cancelButtonClassName}`}
            style={cancelButtonStyle}
            onClick={onCancel}
          >
            {cancelText}
          </Button>
          <Button
            className={`modal-wrapper__footer--ok ${okButtonClassName}`}
            style={{ display: hideOkButton ? "none" : "", ...okButtonStyle }}
            disabled={okButtonDisabled}
            onClick={onOk}
          >
            {okText}
          </Button>
        </div>
      </div>
    </>,
    document.getElementById("modal")!
  );
});

export default Modal;
