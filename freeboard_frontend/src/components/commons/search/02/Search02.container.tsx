import _ from "lodash";
import { ChangeEvent, useEffect, useRef } from "react";
import Search02UI from "./Search02.presenter";
import { ISearchProps } from "./Search02.types";

export default function Search02(props: ISearchProps) {
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  const getDebounce = _.debounce((value: string) => {
    void props.refetch({ search: value, page: 1 });

    props.onChangeKeyword(value);
  }, 200);
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return <Search02UI onChangeSearch={onChangeSearch} searchRef={searchRef} />;
}
