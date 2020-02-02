import React, { FunctionComponent } from "react";
import { ITypography } from "./ITypography";
import "./Typography.scss";
import clsx from "clsx";

const Typography: FunctionComponent<ITypography> = ({
  variant = "p",
  capitalise,
  className,
  text,
  bold
}) => {
  const Tag = variant;

  return (
    <Tag
      className={clsx({
        "text--capitalise": capitalise,
        [`${className}`]: className,
        "text--bold": bold
      })}
    >
      {text}
    </Tag>
  );
};

export default Typography;
