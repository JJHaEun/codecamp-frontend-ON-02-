import BoardWriteUI from "./BoardWrite.presenter";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite(props) {
  //자바스크립트 영역
  const router = useRouter();
  const [mycolor, setMycolor] = useState(false);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
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
    router.push(`/09-01-boards/${result.data.createBoard.number}`); //등록되면 상세페이지로 이동
  };
  const onClickUpdate = async () => {
    const myvariables = {
      number: Number(router.query.number),
    };
    if (writer) myvariables.writer = writer;
    if (title) myvariables.title = title;
    if (contents) myvariables.contents = contents;

    //1.수정하기 뮤테이션 날리기
    const result = await updateBoard({
      variables: myvariables,
    });
    //2.상세페이지로 이동하기
    // router.push(`/08-05-boards/${result.data.updateBoard.number}`)
    console.log(result);
    alert(result.data.updateBoard.message);
    router.push(`/09-01-boards/${result.data.updateBoard.number}`); //수정되면 수정한 상세페이지로 이동
  };
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value && title && contents) {
      //마지막에 입력시 색이 변하게 props
      setMycolor(true);
    }
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (writer && event.target.value && contents) {
      setMycolor(true);
    }
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (writer && title && event.target.value) {
      setMycolor(true);
    }
  };

  //html영역(return 아래부분)
  return (
    <>
      <div>qwqqq</div>
      <BoardWriteUI
        mycolor={mycolor}
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isEdit={props.isEdit}
        data={props.data}
      />
    </>
  );
}
