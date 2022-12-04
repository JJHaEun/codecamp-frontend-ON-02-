import { UseFormHandleSubmit } from "react-hook-form";

export interface IFormDatas {
  email: string;
  name: string;
  password: string;
}
export interface IButtonPageProps {
  handleSubmit: UseFormHandleSubmit<IFormDatas>;
  onClickCreateUsers: (data: IFormDatas) => void;

  title: string;
}
