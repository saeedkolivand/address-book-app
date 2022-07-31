import { CSSProperties, ReactNode } from "react";

export interface ModalPropsTypes {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
  title: ReactNode;
  hideClose?: boolean;
  className?: string;
  backgroundClassName?: string;
  titleClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  okText?: string;
  cancelText?: string;
  okButtonClassName?: string;
  cancelButtonClassName?: string;
  okButtonDisabled?: boolean;
  okButtonStyle?: CSSProperties;
  cancelButtonStyle?: CSSProperties;
  children?: ReactNode;
  style?: CSSProperties;
  width?: number | string;
  closeIcon?: ReactNode;
}
