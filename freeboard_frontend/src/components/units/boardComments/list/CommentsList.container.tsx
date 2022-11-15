import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
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

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const OnclickDeleteComment = async (event: MouseEvent<HTMLButtonElement>) => {
    if (confirm("삭제하시겠습니까?")) {
      alert("삭제를 진행합니다");
    } else {
      return;
    }
    const Password = prompt("비밀번호를 입력하세요.");
    try {
      await deleteBoardComment({
        variables: {
          password: Password,
          boardCommentId: event.currentTarget.id,
        },

        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENT,
            variables: { boardId: router.query._id },
          },
        ],
      });
      alert("삭제되었습니다");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  const OnClickCommentsBody = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    alert(event.currentTarget.id + "님이 작성한 글입니다");
  };

  return (
    <CommentWritListUI
      data={data}
      OnclickDeleteComment={OnclickDeleteComment}
      OnClickCommentsBody={OnClickCommentsBody}
    />
  );
}
