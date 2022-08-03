import React from "react";

export interface ContainerPropsTypes extends React.HTMLProps<HTMLDivElement> {
  loading?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  errorRetryFunction?: () => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
