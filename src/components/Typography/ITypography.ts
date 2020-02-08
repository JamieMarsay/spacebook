import { ElementType } from "react";

export interface ITypography {
  size?: "xs" | "s" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  text: string | number;
  variant?: ElementType;
  capitalise?: boolean;
  className?: string;
  bold?: boolean;
}
