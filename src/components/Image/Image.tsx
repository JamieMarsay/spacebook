import React, { FunctionComponent } from "react";
import { IImage } from "./IImage";
import clsx from "clsx";
import "./Image.scss";

const Image: FunctionComponent<IImage> = ({ src, profile }) => (
  <div
    className={clsx("pos--rel", {
      "image--profile": profile
    })}
  >
    <img className="image" src={src} />
  </div>
);

export default Image;
