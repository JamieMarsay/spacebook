import { ReactNode } from "react";

export interface IHeader {
  children?: ReactNode;
  subtitle?: string;
  title: string;
}
