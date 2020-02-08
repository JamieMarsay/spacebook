import React, { FunctionComponent, forwardRef } from "react";
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

export const TextArea: FunctionComponent<IInput> = forwardRef(
  ({ className, placeholder, onChange, value, error }, ref) => (
    <textarea
      className={clsx("input input__area", {
        [`${className}`]: className,
        "input--error": error
      })}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      ref={ref}
    />
  )
);
