import React, { FunctionComponent } from "react";
import { IInput } from "./IInput";
import "./Input.scss";
import clsx from "clsx";

export const Input: FunctionComponent<IInput> = ({
  placeholder,
  className,
  onChange,
  error,
  value
}) => (
  <input
    className={clsx("input", {
      [`${className}`]: className,
      "input--error": error
    })}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  />
);

export const TextArea: FunctionComponent<IInput> = ({
  placeholder,
  className,
  onChange,
  error,
  value
}) => (
  <textarea
    className={clsx("input input__area", {
      [`${className}`]: className,
      "input--error": error
    })}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  />
);
