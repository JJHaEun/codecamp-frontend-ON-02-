import { MouseEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IPageFetchBoardsUIProps {
  data?: Pick<IQuery, "fetchBoards">;
}
export interface IPageNationOrProps {
  onClickNextPage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPrevPage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  startPage: number;
  lastPage: number;
  isActive: boolean;
}
export interface IButtonProps {
  isActive: boolean;
}
