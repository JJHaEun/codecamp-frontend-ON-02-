import { Dispatch, MouseEvent, SetStateAction } from "react";
import {
  IQuery,
  IUseditemQuestionAnswer,
} from "../../../../commons/types/generated/types";

export interface ICommentsAnswerListItemsUIProps {
  onClickEdit: () => void;
  isEdit: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  isOpenDelete: boolean;
  OnclickDeleteComment: (event: MouseEvent<HTMLElement>) => void;
  onClickcheckPermissionDeleteModal: (
    event: MouseEvent<HTMLButtonElement>
  ) => void;
  handleCancel: () => void;
  el: IUseditemQuestionAnswer;
}
export interface ICommentsAnswerListUIProps {
  onLoadMore: () => void;
  data?: Pick<IQuery, "fetchUseditemQuestionAnswers">;
}
export interface ICommentsAnswerListItems {
  el: IUseditemQuestionAnswer;
}
