import { CSSProperties } from "react";

export interface FormItemLabelPropsTypes {
  wrapperClassName?: string;
  className?: string;
  required?: boolean;
  label: string;
  wrapperStyle?: CSSProperties;
  style?: CSSProperties;
}
