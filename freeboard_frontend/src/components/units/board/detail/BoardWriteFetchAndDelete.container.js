import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import BoardWriteFetchUI from "./BoardWriteFetchAndDelete.presenter";
import { FETCH_BOARD } from "./BoardWriteFetchAndDelete.queries";
export default function BoardWriteFetch() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query._id,
    },
  });

  const onClickList = () => {
    router.push(`/boards`);
  };
  const onClickUpdate = () => {
    router.push(`/boards/${router.query._id}/edit`);
  };
  return (
    <BoardWriteFetchUI
      data={data}
      onClickList={onClickList}
      onClickUpdate={onClickUpdate}
    />
  );
}
