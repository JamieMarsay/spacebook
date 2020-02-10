import { ReactNode } from "react";

export interface ILink {
  children: ReactNode | string;
  className?: string;
  label: string;
  href: string;
}
