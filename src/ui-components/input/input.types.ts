import React from "react";

export interface InputPropsTypes extends React.HTMLProps<HTMLInputElement> {
  onClear?: () => void;
}
