import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommentWritListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  isOpenDelete: boolean;
  handleCancel: () => void;
  OnclickDeleteComment: (event: MouseEvent<HTMLElement>) => void;

  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickEditFinish: () => void;
  onClickcheckPermissionDeleteModal: (
    event: MouseEvent<HTMLButtonElement>
  ) => void;
  onClickEdit: () => void;
  isEdit: boolean;
  onLoadMore: () => void;
}
