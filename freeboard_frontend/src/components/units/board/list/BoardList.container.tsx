import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";
import React from "react";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  const onClickMoveNew = () => {
    router.push("/boards/new");
  };

  const onClickMoveDetail = (event: any) => {
    router.push(`/boards/${event.target.id}`);
  };
  return (
    <BoardListUI
      data={data}
      onClickMoveNew={onClickMoveNew}
      onClickMoveDetail={onClickMoveDetail}
    />
  );
}
