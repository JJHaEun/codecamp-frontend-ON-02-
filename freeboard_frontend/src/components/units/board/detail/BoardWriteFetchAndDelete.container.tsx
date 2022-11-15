import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";

import BoardWriteFetchUI from "./BoardWriteFetchAndDelete.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardWriteFetchAndDelete.queries";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardWriteFetch() {
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
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
  const onClickLike = async () => {
    try {
      await likeBoard({
        variables: {
          boardId: router.query._id,
        },
        refetchQueries: [
          { query: FETCH_BOARD, variables: { boardId: router.query._id } },
        ],
      });
    } catch {}
  };
  const onClickDisLike = async () => {
    try {
      await dislikeBoard({
        variables: {
          boardId: router.query._id,
        },
        refetchQueries: [
          { query: FETCH_BOARD, variables: { boardId: router.query._id } },
        ],
      });
    } catch {}
  };
  const onClickList = () => {
    void router.push(`/boards`);
  };
  const onClickUpdate = () => {
    void router.push(`/boards/${router.query._id}/edit`);
  };
  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: router.query._id,
        },
      });
      alert("삭제가 완료되었습니다.");
      void router.push(`/boards`);
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
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
    />
  );
}
