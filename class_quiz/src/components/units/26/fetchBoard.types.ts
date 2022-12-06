import { MouseEvent } from "react";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { IQuery } from "../../../commons/types/generated/types";

export interface IFormData {
  writer: string;
  title: string;
  contents: string;
  password: string;
}
export interface IFetchBoardPageUIProps {
  data: Pick<IQuery, "fetchBoards"> | undefined;
  onClickCreate: (data: IFormData) => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  register: UseFormRegister<IFormData>;
  handleSubmit: UseFormHandleSubmit<IFormData>;
}
