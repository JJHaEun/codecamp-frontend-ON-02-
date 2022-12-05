import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent, RefObject } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

export interface ISearchProps {
  onChangeKeyword: (value: string) => void;
  refetch: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
}

export interface ISearchUIProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  searchRef: RefObject<HTMLInputElement>;
}
