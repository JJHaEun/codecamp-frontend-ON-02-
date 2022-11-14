import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommentWritListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  OnclickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void;
  OnClickCommentsBody: (event: MouseEvent<HTMLDivElement>) => void;
}
