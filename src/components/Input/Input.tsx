import React, { FunctionComponent } from "react";
import { IInput } from "./IInput";
import "./Input.scss";
import clsx from "clsx";

export const Input: FunctionComponent<IInput> = ({
  placeholder,
  className,
  onChange
}) => (
  <input
    className={clsx("input", {
      [`${className}`]: className
    })}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export const TextArea: FunctionComponent<IInput> = ({
  placeholder,
  className,
  onChange
}) => (
  <textarea
    className={clsx("input input__area", {
      [`${className}`]: className
    })}
    placeholder={placeholder}
    onChange={onChange}
  />
);
