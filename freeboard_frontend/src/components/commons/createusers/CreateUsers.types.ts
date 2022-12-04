// import { ChangeEvent } from "react";
import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IFormDatas } from "../buttons/createUserbutton/button.types";

export interface ICreateUsersUIProps {
  // onChangeEmailSubmit: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangeNameSubmit: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangePasswordSubmit: (event: ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegister<IFormDatas>;
  handleSubmit: UseFormHandleSubmit<IFormDatas>;
  formState: FormState<IFormDatas>;
  onClickCreateUsers: (data: IFormDatas) => void;
}
