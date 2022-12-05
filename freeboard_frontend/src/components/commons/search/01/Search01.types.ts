import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent, RefObject } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export interface ISearchProps {
  onChangeKeyword: (value: string) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
}

export interface ISearchUIProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  searchRef: RefObject<HTMLInputElement>;
}
