import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import CommentWritListUI from "./CommentsList.presenter";
import {
  FETCH_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
} from "./CommentsList.queries";

export default function CommentWritList() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENT, {
    variables: {
      boardId: String(router.query._id),
    },
  });
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [boardCommentId, setBoardCommentId] = useState("");
  const [password, setPassword] = useState("");
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const OnclickDeleteComment = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId,
        },

        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENT,
            variables: { boardId: router.query._id },
          },
        ],
      });
      setIsOpenDelete((prev) => !prev);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onClickOpenDeleteModal = (event: MouseEvent<HTMLButtonElement>) => {
    setBoardCommentId(event.currentTarget.id);
    setIsOpenDelete((prev) => !prev);
  };

  const OnClickCommentsBody = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    alert(event.currentTarget.id + "님이 작성한 글입니다");
  };
  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleCancel = () => {
    if (typeof router.query._id !== "string") return;
    setIsOpenDelete((prev) => !prev);
    void router.push(`/boards/${router.query._id}`);
  };
  return (
    <CommentWritListUI
      data={data}
      isOpenDelete={isOpenDelete}
      handleCancel={handleCancel}
      OnclickDeleteComment={OnclickDeleteComment}
      OnClickCommentsBody={OnClickCommentsBody}
      onClickOpenDeleteModal={onClickOpenDeleteModal}
      onChangeDeletePassword={onChangeDeletePassword}
    />
  );
}
