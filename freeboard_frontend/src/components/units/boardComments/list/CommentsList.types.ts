import {
  IBoardComment,
  IQuery,
} from "../../../../commons/types/generated/types";

export interface ICommentWritListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;

  onLoadMore: () => void;
}

export interface IBoardCommentListItemsProps {
  el: IBoardComment;
}
