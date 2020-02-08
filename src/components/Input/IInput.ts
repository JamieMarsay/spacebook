import { ChangeEvent, Ref } from "react";

export interface IInput {
  onChange: (e: ChangeEvent<any>) => void;
  placeholder: string;
  className?: string;
  error?: boolean;
  value?: string;
  ref?: Ref<any>;
}
