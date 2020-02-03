import React, { FunctionComponent } from "react";
import { IIcon } from "./IIcon";
import clsx from "clsx";
import "./Icon.scss";

const Icon: FunctionComponent<IIcon> = ({ src, className, size }) => (
  <div
    className={clsx("icon__container", {
      [`${className}`]: className,
      [`icon--${size}`]: size
    })}
  >
    <img className="icon" src={src} />
  </div>
);

export default Icon;
