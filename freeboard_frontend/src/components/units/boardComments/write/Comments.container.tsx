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
import { ICommentsWriteProps } from "./Comments.types";

export default function CommentsWrite(props: ICommentsWriteProps) {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  // const [inputs, setInputs] = useState({
  //   writer: "",
  //   password: "",
  // });
  const [value, setValue] = useState(1);
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const onChangeStar = (value: number) => {
    setValue(value);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };
  const onChangePassWord = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  // const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
  //   setInputs({
  //     ...inputs,
  //     [event.target.id]: event.target.value,
  //   });
  // };
  const onClickCommentSubmit = async () => {
    try {
      await createBoardComment({
        variables: {
          boardId: String(router.query._id),
          createBoardCommentInput: {
            writer,
            // contents,
            password,

            contents,
            rating: value,
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
    setWriter("");
    setContents("");
    setPassword("");
  };
  return (
    <CommentsWriteUI
      isEdit={props.isEdit}
      el={props.el}
      onClickCommentSubmit={onClickCommentSubmit}
      // onChangeInput={onChangeInput}
      onChangeWriter={onChangeWriter}
      onChangeComment={onChangeComment}
      onChangePassWord={onChangePassWord}
      onChangeStar={onChangeStar}
      writer={writer}
      password={password}
      contents={contents}
    />
  );
}
