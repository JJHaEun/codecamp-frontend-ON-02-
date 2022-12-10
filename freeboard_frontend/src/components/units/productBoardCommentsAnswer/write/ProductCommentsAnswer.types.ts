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
  onClickCommentSubmit: (data: IFormCommentData) => void;
  onClickEditFinish: (data: IFormCommentData) => void;
  isEdit: boolean;
  el: IUseditemQuestionAnswer;
}

export interface ICommentsAnswerProps {
  el: IUseditemQuestionAnswer;
  isEdit: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  //   onClickAnswer: () => void;
  isHaveAnswer: boolean;
  setIsHaveAnswer?: Dispatch<SetStateAction<boolean>>;
}
