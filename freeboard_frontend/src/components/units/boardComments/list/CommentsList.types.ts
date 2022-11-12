import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommentWritListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  OnclickDeleteComment: (event: any) => void;
}
