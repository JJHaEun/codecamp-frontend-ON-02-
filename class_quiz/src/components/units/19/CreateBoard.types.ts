import { ChangeEvent, RefObject } from "react";

export interface ICreateBoardAndImgPageUIProps {
  onClickSubmit: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickImg: () => void;
  fileRef: RefObject<HTMLInputElement>;
  imageUrl: String;
}
