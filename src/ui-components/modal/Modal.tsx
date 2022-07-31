import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Button, Divider } from "ui-components";
import { ReactComponent as CloseIcon } from "assets/icons/close.svg";
import { ModalPropsTypes } from "./modal.types";
import "./modal.style.scss";

const Modal: React.FC<ModalPropsTypes> = (props) => {
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
    width,
    closeIcon = <CloseIcon />,
  } = props;

  const modalVisibilityStatus = visible ? "show-modal" : "hide-modal";

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
      />

      <div
        className={`modal-wrapper absolute-center ${className} ${modalVisibilityStatus}`}
        aria-label="modal-wrapper"
      >
        <div className={`modal-wrapper__header flex-center ${titleClassName}`}>
          <div className="modal-wrapper__header--title">{title}</div>
          {!hideClose && (
            <div className="modal-wrapper__header--close" onClick={onCancel}>
              {closeIcon}
            </div>
          )}
        </div>

        <Divider />

        <div
          className={`modal-wrapper__body ${bodyClassName}`}
          style={{
            width,
            ...style,
          }}
        >
          {children}
        </div>

        <Divider />

        <div className={`modal-wrapper__footer ${footerClassName}`}>
          <Button
            className={`modal-wrapper__footer--cancel ${cancelButtonClassName}`}
            style={cancelButtonStyle}
            onClick={onCancel}
          >
            {cancelText}
          </Button>
          <Button
            className={`modal-wrapper__footer--ok ${okButtonClassName}`}
            style={okButtonStyle}
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
};

export default Modal;
