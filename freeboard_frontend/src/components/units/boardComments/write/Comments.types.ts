import { ChangeEvent } from "react";

export interface ICommentsWriteUIProps {
  onClickCommentSubmit: () => void;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  // onChangePassWord: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeStar: (value: number) => void;
}
