import { UseFormRegisterReturn } from "react-hook-form";

export interface ILogInInputsProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
}
