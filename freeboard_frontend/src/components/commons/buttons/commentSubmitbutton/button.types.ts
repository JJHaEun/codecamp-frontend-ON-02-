import { UseFormHandleSubmit } from "react-hook-form";
import { IFormCommentData } from "../../../units/productBoardCommentsQuestion/write/ProductCommentsQuestion.types";

export interface IButtonPageProps {
  handleSubmit: UseFormHandleSubmit<IFormCommentData>;
  onClickCommentSubmit: (data: IFormCommentData) => void;
  title: string;
}
