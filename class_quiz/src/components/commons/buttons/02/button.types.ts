import { UseFormHandleSubmit } from "react-hook-form";
import { IFormData } from "../../../units/26/fetchBoard.types";

export interface IButtonPageProps {
  handleSubmit: UseFormHandleSubmit<IFormData>;
  onClickCreate: (data: IFormData) => void;
  title: string;
}
