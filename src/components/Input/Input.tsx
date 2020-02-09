import React, { FunctionComponent, forwardRef } from "react";
import { IInput } from "./IInput";
import "./Input.scss";
import clsx from "clsx";

export const Input: FunctionComponent<IInput> = forwardRef(
  ({ className, placeholder, onChange, value, error }, ref) => (
    <input
      className={clsx("input", {
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
