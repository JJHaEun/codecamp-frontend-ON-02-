import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommentWritListUI from "./CommentsList.presenter";
import {
  FETCH_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
} from "./CommentsList.queries";

export default function CommentWritList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENT, {
    variables: {
      boardId: router.query._id,
    },
  });
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const OnclickDeleteComment = async (event: any) => {
    console.log(event.target.id);
    if (confirm("삭제하시겠습니까?")) {
    } else {
      return;
    }
    const Password = prompt("비밀번호를 입력하세요.");
    try {
      await deleteBoardComment({
        variables: {
          password: Password,
          boardCommentId: event.target.id,
        },

        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENT,
            variables: { boardId: router.query._id },
          },
        ],
      });
      alert("삭제되었습니다");
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <CommentWritListUI
      data={data}
      OnclickDeleteComment={OnclickDeleteComment}
    />
  );
}
