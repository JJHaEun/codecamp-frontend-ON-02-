import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface ISearchProps {
  onChangeKeyword: (value: string) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: any;
}

export interface ISearchUIProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
