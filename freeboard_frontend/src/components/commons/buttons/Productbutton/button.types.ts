import { UseFormHandleSubmit } from "react-hook-form";
import { IFormData } from "../../../units/productBoard/write/ProductWrite.types";

export interface IProductButtonProps {
  handleSubmit: UseFormHandleSubmit<IFormData>;
  onClick: (data: IFormData) => void;
  isActive: boolean;
  title: string;
}
