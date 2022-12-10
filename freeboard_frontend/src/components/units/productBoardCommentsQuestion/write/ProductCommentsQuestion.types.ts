import { Dispatch, SetStateAction } from "react";
import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IUseditemQuestion } from "../../../../commons/types/generated/types";

export interface ICommentsQuestionProps {
  isEdit: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el: IUseditemQuestion;
}
export interface IFormCommentData {
  contents: string;
}
export interface ICommentsQuestionUIProps {
  handleSubmit: UseFormHandleSubmit<IFormCommentData>;
  formState: FormState<IFormCommentData>;
  register: UseFormRegister<IFormCommentData>;
  onClickCommentSubmit: (data: IFormCommentData) => void;
  el: IUseditemQuestion;
  onClickEditFinish: (data: IFormCommentData) => void;
  isEdit: boolean;
}
