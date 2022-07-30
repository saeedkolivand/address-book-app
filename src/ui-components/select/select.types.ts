import { CSSProperties } from "react";

export type SelectOptionType = {
  label: string;
  value: string;
};

export interface SelectPropsTypes {
  options?: SelectOptionType[];
  dropdownStyle?: CSSProperties;
  listHeight?: number;
  onChange?: (arg0: SelectOptionType) => SelectOptionType;
  open?: boolean;
}
