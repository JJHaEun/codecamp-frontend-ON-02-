import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";

import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickMoveNew = () => {
    router.push("/boards/new");
  };

  const onClickMoveDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };
  return (
    <BoardListUI
      data={data}
      onClickMoveNew={onClickMoveNew}
      onClickMoveDetail={onClickMoveDetail}
    />
  );
}
