import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { success } from "../alert/Alert";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, FETCH_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardWrite.types";

import { Modal } from "antd";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  // 빈페이지로보내기
  // if(typeof router.query._id !== "string"){
  //   router.push("/")
  //   return<></>   //boardId부분을 sting 처리 할수도 있고, 아니면 string이 아닐때 빈패이지로 잠시 보내는 방법도 있음
  // }
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query._id), // sting처리
      },
    }
  );
  const [bt, setBt] = useState(false);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [pw, setPw] = useState("");

  const [writerEmpty, setWriterEmpty] = useState("");
  const [pwEmpty, setPwEmpty] = useState("");
  const [titleEmpty, setTitleEmpty] = useState("");
  const [contentsEmpty, setContentsEmpty] = useState("");

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);

    if (event.target.value !== "") {
      setWriterEmpty("");
    }
    if (event.target.value && pw && title && contents) {
      setBt(true);
    } else {
      setBt(false);
    }
  };
  const onChangePw = (event: ChangeEvent<HTMLInputElement>) => {
    setPw(event.target.value);

    if (event.target.value !== "") {
      setPwEmpty("");
    }
    if (writer && event.target.value && title && contents) {
      setBt(true);
    } else {
      setBt(false);
    }
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);

    if (event.target.value !== "") {
      setTitleEmpty("");
    }
    if (writer && pw && event.target.value && contents) {
      setBt(true);
    } else {
      setBt(false);
    }
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);

    if (event.target.value !== "") {
      setContentsEmpty("");
    }
    if (writer && pw && title && event.target.value) {
      setBt(true);
    } else {
      setBt(false);
    }
  };

  const onClickSignIn = async () => {
    try {
      if (!writer) {
        setWriterEmpty("작성자를 입력해 주세요");
      }
      if (!pw) {
        setPwEmpty("비밀번호를 입력해 주세요");
      }
      if (!title) {
        setTitleEmpty("제목을 입력해 주세요");
      }
      if (!contents) {
        setContentsEmpty("내용을 입력해 주세요");
      }
      if (writer && pw && title && contents) {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              password: pw,
              writer,
              title,
              contents,
            },
          },
        });

        success();
        void router.push(`/boards/${result.data?.createBoard._id ?? ""}`);
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickUpdate = async () => {
    if (!title && !contents) {
      if (confirm("수정하시겠습니까?")) {
        alert("변경사항이 없습니다");
        return;
      } else {
        void router.push(`/boards`);
        return;
      }
    }
    const updateBoardInput: IUpdateBoardInput = {};
    if (writer) updateBoardInput.writer = writer;
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    try {
      await updateBoard({
        variables: {
          boardId: String(router.query._id),
          password: pw,
          updateBoardInput,
        },
      });

      alert("게시물이 수정되었습니다");
      success();
      void router.push(`/boards`);
    } catch (error) {
      // if (error instanceof Error) alert(error.message);
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <BoardWriteUI
        onClickSignIn={onClickSignIn}
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangePw={onChangePw}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        writerEmpty={writerEmpty}
        pwEmpty={pwEmpty}
        titleEmpty={titleEmpty}
        contentsEmpty={contentsEmpty}
        bt={bt}
        isEdit={props.isEdit}
        data={data}
      />
    </>
  );
}
