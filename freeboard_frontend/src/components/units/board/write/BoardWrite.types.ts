import { ChangeEvent } from "react";

export interface IBoardWriteUIProps {
  onClickSignIn: () => void;
  onClickUpdate: () => void;
  onChangeWriter?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePw?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  writerEmpty?: string;
  pwEmpty?: string;
  titleEmpty?: string;
  contentsEmpty?: string;
  bt: boolean;
  isEdit: boolean;
  //   data?: Pick<IQuery, "fetchBoard">;
  data: any;
}
export interface IBtProps {
  changes: boolean;
}
