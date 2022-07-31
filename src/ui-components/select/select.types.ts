import { CSSProperties } from "react";

export type SelectOptionType = {
  label: string;
  value: string;
};

export interface SelectPropsTypes {
  options?: SelectOptionType[];
  buttonStyle?: CSSProperties;
  dropdownStyle?: CSSProperties;
  listHeight?: number;
  onChange?: (arg0: SelectOptionType) => SelectOptionType;
  open?: boolean;
  id?: string;
  wrapperStyle?: CSSProperties;
  wrapperClassName?: string;
  itemLabel?: {
    title?: string;
    required?: boolean;
    style?: CSSProperties;
  };
}
