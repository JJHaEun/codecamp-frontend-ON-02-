import { useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
} from "../../src/components/units/11-fetch/11-fetch.queris";
import PageFetchBoardsUI from "../../src/components/units/11-fetch/11-fetch.presenter";
import PageNationOr from "../../src/components/commons/pagenation/pegenation";
export default function PageFetchBoards() {
  const [startPage, setStartPage] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const { data: dataBoardCount } = useQuery(FETCH_BOARDS_COUNT);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const lastPage = dataBoardCount
    ? Math.ceil(dataBoardCount.fetchBoardsCount / 10)
    : 0;

  const onClickPage = async (event: MouseEvent<HTMLSpanElement>) => {
    await refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = (event: MouseEvent<HTMLButtonElement>) => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    void refetch({ page: startPage - 10 });
    setIsActive((prev) => !prev);
  };
  const onClickNextPage = (event: MouseEvent<HTMLButtonElement>) => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10);
      void refetch({ page: startPage + 10 });
      setIsActive((prev) => !prev);
    }
  };
  return (
    <>
      <PageFetchBoardsUI data={data} />
      <PageNationOr
        onClickNextPage={onClickNextPage}
        onClickPrevPage={onClickPrevPage}
        onClickPage={onClickPage}
        startPage={startPage}
        lastPage={lastPage}
        isActive={isActive}
      />
    </>
  );
}
