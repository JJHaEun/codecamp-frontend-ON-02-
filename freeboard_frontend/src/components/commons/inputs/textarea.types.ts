import { UseFormRegisterReturn } from "react-hook-form";

export interface ITextareaProps {
  register: UseFormRegisterReturn;
  value: UseFormRegisterReturn<"contents">;
}
