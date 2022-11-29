import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IPageFetchBoardsUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  keyword: string;
}
export interface IPageNationOrProps {
  onClickNextPage: () => void;
  onClickPrevPage: () => void;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  startPage: number;
  lastPage: number;
  visitPage: number;
}
export interface IPageProps {
  isActive: boolean;
}
