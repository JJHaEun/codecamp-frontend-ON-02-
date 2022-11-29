import { useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
} from "../../src/components/units/20-search/20-search.queris";
import PageNationOr from "../../src/components/commons/pagenation-20/pegenation";
import PageFetchBoardsUI from "../../src/components/units/20-search/20-search.presenter";
import _ from "lodash";

export default function PageFetchBoards() {
  const [startPage, setStartPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [visitPage, setVisitPage] = useState(1);

  const { data: dataBoardCount, refetch: refetchBoardsCount } =
    useQuery(FETCH_BOARDS_COUNT);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const lastPage = dataBoardCount
    ? Math.ceil(dataBoardCount.fetchBoardsCount / 10)
    : 0;

  const onClickPage = async (event: MouseEvent<HTMLSpanElement>) => {
    setVisitPage(Number(event.currentTarget.id));
    await refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    setVisitPage((prev) => prev - 10);
    void refetch({ page: startPage - 10 });
  };
  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10);
      setVisitPage((prev) => prev + 10);
      void refetch({ page: startPage + 10 });
    }
  };
  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
    void refetchBoardsCount({ search: value });
    setKeyword(value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return (
    <>
      <PageFetchBoardsUI
        data={data}
        onChangeSearch={onChangeSearch}
        keyword={keyword}
      />
      <PageNationOr
        onClickNextPage={onClickNextPage}
        onClickPrevPage={onClickPrevPage}
        onClickPage={onClickPage}
        startPage={startPage}
        lastPage={lastPage}
        visitPage={visitPage}
      />
    </>
  );
}
