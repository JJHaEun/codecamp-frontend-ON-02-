import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite(props) {
  const [bt, setBt] = useState(false);
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [pw, setPw] = useState("");

  const [writerEmpty, setWriterEmpty] = useState("");
  const [pwEmpty, setPwEmpty] = useState("");
  const [titleEmpty, setTitleEmpty] = useState("");
  const [contentsEmpty, setContentsEmpty] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const onChangeWriter = (event) => {
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
  const onChangePw = (event) => {
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
  const onChangeTitle = (event) => {
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
  const onChangeContents = (event) => {
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

        alert("게시물이 성공적으로 등록되었습니다.");
        router.push(`/boards/${result.data.createBoard._id}`);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const onClickUpdate = async () => {
    try {
      const result = await updateBoard({
        variables: {
          updateBoardInput: {
            title,
            contents,
          },
          boardId: router.query._id,
          password: pw,
        },
      });

      alert("게시물이 수정되었습니다");
      router.push(`/boards`);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
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
    />
  );
}
