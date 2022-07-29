import React from "react";
import { ImagePropsTypes } from "./image.types";

const Image: React.FC<ImagePropsTypes> = (props) => {
  const { alt = "", ...rest } = props;

  return <img {...rest} alt={alt} />;
};

export default Image;
