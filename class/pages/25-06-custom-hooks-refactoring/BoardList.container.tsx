import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
// import { useRouter } from "next/router";

import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { useState } from "react";
import { useMoveToPage } from "../../src/components/commons/hooks/useMoToPage";
import { useSearch } from "../../src/components/commons/hooks/useSearch";

export default function BoardList() {
  const { onClickMoveToPage } = useMoveToPage();
  const { keyword, onChangeKeyword } = useSearch();
  // const [keyword, setKeyword] = useState("");
  // const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  // const onClickMoveNew = () => {
  //   void router.push("/boards/new");
  // };

  // const onClickMoveDetail = (event: MouseEvent<HTMLDivElement>) => {
  //   void router.push(`/boards/${event.currentTarget.id}`);
  // };
  // const onChangeKeyword = (value: string) => {
  //   setKeyword(value);
  // };
  return (
    <BoardListUI
      data={data}
      // onClickMoveNew={onClickMoveNew}
      // onClickMoveDetail={onClickMoveDetail}
      onClickMoveToPage={onClickMoveToPage}
      refetch={refetch}
      countBoards={dataBoardsCount?.fetchBoardsCount}
      onChangeKeyword={onChangeKeyword}
      refetchBoardsCount={refetchBoardsCount}
      keyword={keyword}
    />
  );
}
