import { UseFormRegisterReturn } from "react-hook-form";

export interface IInputsProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
}
