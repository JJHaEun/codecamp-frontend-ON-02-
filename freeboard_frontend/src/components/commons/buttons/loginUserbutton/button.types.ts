import { UseFormHandleSubmit } from "react-hook-form";
import { ILogInFormData } from "../../login/01/Login.types";

export interface IButtonPageProps {
  handleSubmit: UseFormHandleSubmit<ILogInFormData>;
  onClickLogIn: (data: ILogInFormData) => void;
  title: string;
}
