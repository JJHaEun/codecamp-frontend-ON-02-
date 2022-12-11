import { Dispatch, SetStateAction } from "react";
import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IUseditemQuestionAnswer } from "../../../../commons/types/generated/types";
import { IFormCommentData } from "../../productBoardCommentsQuestion/write/ProductCommentsQuestion.types";

export interface ICommentsAnswerUIProps {
  handleSubmit: UseFormHandleSubmit<IFormCommentData>;
  formState: FormState<IFormCommentData>;
  register: UseFormRegister<IFormCommentData>;
  onClickAnswerSubmit: (data: IFormCommentData) => void;
  onClickEditFinish: (data: IFormCommentData) => void;
  isEdit: boolean;
  el: IUseditemQuestionAnswer;
  isHaveAnswer: boolean;
  setIsHaveAnswer?: Dispatch<SetStateAction<boolean>>;
}

export interface ICommentsAnswerProps {
  el: IUseditemQuestionAnswer;
  isEdit: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  id?: string;
  //   onClickAnswer: () => void;
  isHaveAnswer: boolean;
  setIsHaveAnswer?: Dispatch<SetStateAction<boolean>>;
}
