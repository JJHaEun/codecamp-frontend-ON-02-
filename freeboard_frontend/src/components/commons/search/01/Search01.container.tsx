import _ from "lodash";
import { ChangeEvent, useEffect, useRef } from "react";
import Search01UI from "./Search01.presenter";
import { ISearchProps } from "./Search01.types";

export default function Search01(props: ISearchProps) {
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  const getDebounce = _.debounce((value: string) => {
    void props.refetch({ search: value, page: 1 });
    void props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
  }, 500);
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return <Search01UI onChangeSearch={onChangeSearch} searchRef={searchRef} />;
}
