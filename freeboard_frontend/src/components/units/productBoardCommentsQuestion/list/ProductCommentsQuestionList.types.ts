import { Dispatch, MouseEvent, SetStateAction } from "react";
import {
  IQuery,
  IUseditemQuestion,
} from "../../../../commons/types/generated/types";

export interface ICommentsListItemsUIProps {
  isOpenDelete: boolean;
  isEdit: boolean;
  // isHaveAnswer: boolean;
  OnclickDeleteComment: (event: MouseEvent<HTMLElement>) => void;
  onClickcheckPermissionDeleteModal: (
    event: MouseEvent<HTMLButtonElement>
  ) => void;
  handleCancel: () => void;
  el: IUseditemQuestion;
  onClickEdit: () => void;
  // onClickAnswer: () => void;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  // setIsHaveAnswer: Dispatch<SetStateAction<boolean>>;
}
export interface ICommentsListUIProps {
  onLoadMore: () => void;
  data?: Pick<IQuery, "fetchUseditemQuestions">;
}
export interface ICommentsListItemsProps {
  el: IUseditemQuestion;
}
