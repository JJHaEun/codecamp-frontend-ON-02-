import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface ICommentsWriteProps {
  isEdit: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el: IBoardComment;
}

export interface ICommentsWriteUIProps {
  onClickCommentSubmit: () => void;
  // onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangePassWord: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeStar: (value: number) => void;
  isEdit: boolean;
  writer: string;
  password: string;
  value: number;
  el: IBoardComment;
  contents: string;
  // onClickEdit: () => void;
  setValue: Dispatch<SetStateAction<number>>;
  onClickEditFinish: () => void;
}

export interface IUpdateBoardCommentInput {
  contents?: string;
  rating?: number;
}
