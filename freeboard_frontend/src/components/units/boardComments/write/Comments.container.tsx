import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARD_COMMENT } from "../list/CommentsList.queries";
import CommentsWriteUI from "./Comments.presenter";
import { CREATE_BOARD_COMMENT } from "./Comments.queries";

export default function CommentsWrite() {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };
  const onChangePassWord = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickCommentSubmit = async () => {
    try {
      const result = await createBoardComment({
        variables: {
          boardId: String(router.query._id),
          createBoardCommentInput: {
            writer,
            contents,
            password,
            rating: 0,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENT,
            variables: { boardId: router.query._id },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  return (
    <CommentsWriteUI
      onClickCommentSubmit={onClickCommentSubmit}
      onChangeWriter={onChangeWriter}
      onChangeComment={onChangeComment}
      onChangePassWord={onChangePassWord}
    />
  );
}
