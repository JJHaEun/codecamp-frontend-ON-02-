import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  // onClickMoveNew: () => void;
  // onClickMoveDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMoveToPage: (path: string) => void;
  onChangeKeyword: (value: string) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: any;
  countBoards?: number;
  keyword: string;
}
export interface ITextTokenProps {
  isMatch: boolean;
}
