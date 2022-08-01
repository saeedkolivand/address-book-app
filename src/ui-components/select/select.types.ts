import { CSSProperties } from "react";

export interface SelectPropsTypes {
  options?: string[];
  buttonStyle?: CSSProperties;
  dropdownStyle?: CSSProperties;
  listHeight?: number;
  onChange?: (value: any) => void;
  open?: boolean;
  id?: string;
  wrapperStyle?: CSSProperties;
  wrapperClassName?: string;
  itemLabel?: {
    title?: string;
    required?: boolean;
    style?: CSSProperties;
  };
  placeholder?: string;
  value?: string;
}
