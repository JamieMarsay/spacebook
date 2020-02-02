import { ElementType } from "react";

export interface ITypography {
  size?: "xl" | "lg" | "md" | "s" | "xs";
  text: string | number;
  variant?: ElementType;
  capitalise?: boolean;
  className?: string;
  bold?: boolean;
}
