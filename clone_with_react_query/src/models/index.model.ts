import { Dispatch } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any;

export interface ModalProps {
  open: boolean;
  setOpen: Dispatch<boolean>;
}
