import { CSSProperties, HTMLProps } from "react";

export interface InputPropsTypes extends HTMLProps<HTMLInputElement> {
  onClear?: () => void;
  itemLabel?: {
    title?: string;
    required?: boolean;
    style?: CSSProperties;
  };
}
