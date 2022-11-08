import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
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
              password: String(pw),
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
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterEmpty("");
    }
  };
  const onChangePw = (event) => {
    setPw(event.target.value);
    if (event.target.value !== "") {
      setPwEmpty("");
    }
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleEmpty("");
    }
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsEmpty("");
    }
  };

  return (
    <BoardWriteUI
      onClickSignIn={onClickSignIn}
      onChangeWriter={onChangeWriter}
      onChangePw={onChangePw}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      writerEmpty={writerEmpty}
      pwEmpty={pwEmpty}
      titleEmpty={titleEmpty}
      contentsEmpty={contentsEmpty}
    />
  );
}
