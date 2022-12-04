import { UseFormHandleSubmit } from "react-hook-form";
import { IFormData } from "../../../units/productBoard/write/ProductWrite.types";

export interface IPostSearchButtonProps {
  handleSubmit: UseFormHandleSubmit<IFormData>;
  onClickAddress: (data: IFormData) => void;
  title: string;
}
