// import { ComponentType } from "react";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
// import ReactQuill from "react-quill";

export interface IFormDataType {
  writer: string;
  title: string;
  contents: string;
  password: string;
}
export interface ICreateUIProps {
  register: UseFormRegister<IFormDataType>;
  handleSubmit: UseFormHandleSubmit<IFormDataType>;
  onClickSubmit: (data: IFormDataType) => void;
  onChangeContents: (value: string) => void;
  // ReactQuill: ComponentType<ReactQuill.ReactQuillProps>;
}
