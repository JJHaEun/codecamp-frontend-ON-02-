import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";

import BoardWriteFetchUI from "./BoardWriteFetchAndDelete.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardWriteFetchAndDelete.queries";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardWriteFetch() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query._id),
      },
    }
  );

  const onClickList = () => {
    router.push(`/boards`);
  };
  const onClickUpdate = () => {
    router.push(`/boards/${router.query._id}/edit`);
  };
  const onClickDelete = async () => {
    try {
      const result = await deleteBoard({
        variables: {
          boardId: router.query._id,
        },
      });
      alert("삭제가 완료되었습니다.");
      router.push(`/boards`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <BoardWriteFetchUI
      data={data}
      onClickList={onClickList}
      onClickUpdate={onClickUpdate}
      onClickDelete={onClickDelete}
    />
  );
}
