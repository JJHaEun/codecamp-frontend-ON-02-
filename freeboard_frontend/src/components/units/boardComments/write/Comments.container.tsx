import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IUpdateBoardCommentInput,
} from "../../../../commons/types/generated/types";
import { success } from "../../board/alert/Alert";
import {
  FETCH_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "../list/CommentsList.queries";
import CommentsWriteUI from "./Comments.presenter";
import { CREATE_BOARD_COMMENT } from "./Comments.queries";
import { ICommentsWriteProps } from "./Comments.types";

export default function CommentsWrite(props: ICommentsWriteProps) {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [value, setValue] = useState(0);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);
  // const [inputs, setInputs] = useState({
  //   writer: "",
  //   password: "",
  // });

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
    setValue(0);
  };

  const onClickEditFinish = async () => {
    if (!contents && !value) {
      alert("수정사항 없음");
      if (typeof router.query._id !== "string") return;
      void router.push(`/boards/${router.query._id}`);
    }
    if (!password) {
      alert("비밀번호를 확인해주세요");
      return;
    }
    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (contents) updateBoardCommentInput.contents = contents;
      if (value !== props.el?.rating) updateBoardCommentInput.rating = value;
      if (typeof props.el?._id !== "string") return;
      await updateBoardComment({
        variables: {
          boardCommentId: props.el?._id,
          password,
          updateBoardCommentInput,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENT,
            variables: { boardId: router.query._id },
          },
        ],
      });
      props.setIsEdit?.(false);
      success();
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
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
      value={value}
      setValue={setValue}
      onClickEditFinish={onClickEditFinish}
    />
  );
}
