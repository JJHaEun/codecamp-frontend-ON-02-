import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommentWritListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  isOpenDelete: boolean;
  handleCancel: () => void;
  OnclickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void;
  OnClickCommentsBody: (event: MouseEvent<HTMLDivElement>) => void;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickOpenDeleteModal: (event: MouseEvent<HTMLButtonElement>) => void;
}
