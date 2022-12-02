import { UseFormHandleSubmit } from "react-hook-form";

export interface IFormDatas {
  writer: string;
  password: string;
  title: string;
  contents: string;
}
export interface IButtonPageProps {
  handleSubmit: UseFormHandleSubmit<IFormDatas>;
  onClickSubmit: (data: IFormDatas) => void;
  title: string;
}
