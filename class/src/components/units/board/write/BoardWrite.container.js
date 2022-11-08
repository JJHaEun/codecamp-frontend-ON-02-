import BoardWriteUI from "./BoardWrite.presenter";

import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
  //자바스크립트 영역
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(CREATE_BOARD);
  const onClickSubmit = async () => {
    //const writer = "qqq"// // 이함수에 있으면 현제스코프 적용
    const result = await 나의함수({
      variables: {
        //variables가 $역할을 해주니 여기에는 $쓰지 않음.원래는 각각 $가 들어감.($writer...등)
        writer: writer, //이름같아도 다른것이기에 문제되지 않음. 이 함수에 없으면 스코프체인으로 위에서 찾음
        title, //키와 value같으면 키만입력가능
        contents,
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  //html영역(return 아래부분)
  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
    />
  );
}
