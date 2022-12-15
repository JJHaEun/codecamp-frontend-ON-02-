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
import { Modal } from "antd";
import { useState } from "react";
import { FETCH_BOARDS } from "../list/BoardList.queries";

export default function BoardWriteFetch() {
  const router = useRouter();

  const [isOpenDelete, setIsOpenDelete] = useState(false);

  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query._id),
      },
    }
  );

  const onClickLike = async () => {
    await likeBoard({
      variables: {
        boardId: router.query._id,
      },
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
      },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query._id } },
      ],
    });
  };
  const onClickDisLike = async () => {
    await dislikeBoard({
      variables: {
        boardId: router.query._id,
      },
      optimisticResponse: {
        dislikeBoard: (data?.fetchBoard.dislikeCount ?? 0) + 1,
      },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query._id } },
      ],
    });
  };
  const onClickList = () => {
    void router.push(`/boards`);
  };
  const onClickUpdate = () => {
    if (typeof router.query._id !== "string") return;
    void router.push(`/boards/${router.query._id}/edit`);
  };
  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: router.query._id,
        },
        refetchQueries: [
          { query: FETCH_BOARDS, variables: { boardId: router.query._id } },
        ],
      });

      Modal.success({ content: "삭제가 완료되었습니다" });
      void router.push(`/boards`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickcheckPermissionDeleteModal = () => {
    setIsOpenDelete((prev) => !prev);
  };

  const handleCancel = () => {
    if (typeof router.query._id !== "string") return;
    setIsOpenDelete((prev) => !prev);
    void router.push(`/boards/${router.query._id}`);
  };

  return (
    <>
      <BoardWriteFetchUI
        data={data}
        onClickList={onClickList}
        onClickUpdate={onClickUpdate}
        onClickDelete={onClickDelete}
        onClickLike={onClickLike}
        onClickDisLike={onClickDisLike}
        onClickcheckPermissionDeleteModal={onClickcheckPermissionDeleteModal}
        handleCancel={handleCancel}
        isOpenDelete={isOpenDelete}
      />
    </>
  );
}
