import { ReactNode } from "react";

export interface ISidebar {
  children?: ReactNode;
  className?: string;
  subtitle?: string;
  title: string;
}
