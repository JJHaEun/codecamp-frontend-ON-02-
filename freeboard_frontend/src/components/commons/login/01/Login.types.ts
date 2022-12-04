// import { ChangeEvent } from "react";
import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ILogInPageUIProps {
  // onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogIn: (data: ILogInFormData) => void;
  register: UseFormRegister<ILogInFormData>;
  handleSubmit: UseFormHandleSubmit<ILogInFormData>;
  formState: FormState<ILogInFormData>;
}
export interface ILogInFormData {
  email: string;
  password: string;
}
