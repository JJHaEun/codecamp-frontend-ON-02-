import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

// prettier-ignore
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) { # 그래프큐엘 주석. 변수의 타입적는곳
    createBoard(writer: $writer, title: $title, contents: $contents) { # 실제 우리가 전달할 변수 적는곳.
      _id
      number
      message
    }
  }
`;
export default function GraphqlMutationPage() {
  const [inputs, setInputs] = useState({
    // inputs라는 객체 만들어 각각을 넣음
    writer: "",
    title: "",
    contents: "",
  });

  const [나의함수] = useMutation(CREATE_BOARD);
  const onClickSubmit = async () => {
    // const writer = "qqq"// // 이함수에 있으면 현제스코프 적용
    const result = await 나의함수({
      variables: {
        // variables가 $역할을 해주니 여기에는 $쓰지 않음.원래는 각각 $가 들어감.($writer...등)
        // writer: inputs.writer,
        // title: inputs.title,
        // contents: inputs.contents,
        ...inputs, // 위와 동일
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);
  };
  // 하나의 함수로 통일!!
  const onChangeInputs = (event) => {
    setInputs({
      // writer: inputs.writer, // 어차피 맨 아래 겹치는 것이 덮어쓰기때문에 상관없음.(리펙토링 위함))
      // title: inputs.title, // 기존값 넣어주기(유지)즉 inputs의 title라는 키사용
      // contents: inputs.contents,
      ...inputs, // 위의 세줄과 같음
      [event.target.id]: event.target.value, // 여기에 대괄호에 각각의 아이디가 들어가 키가 되게됨.
    });
  };
  // const onChangeTitle = (event) => {
  //   setInputs({
  //     // writer: inputs.writer, // 기존값 유지
  //     // title: inputs.title,
  //     // contents: inputs.contents, // 기존값 유지
  //     ...inputs, // 위의 세줄과 같음
  //     [event.target.id]: event.target.value, // title 변경 --> 여기만 다른 모양이되었음.
  //   });
  // };
  // const onChangeContents = (event) => {
  //   setInputs({
  //     // writer: inputs.writer, // 기존값 유지
  //     // title: inputs.title, // 기존값유지
  //     // contents: inputs.contents,
  //     ...inputs, // 위의 세줄과 같음
  //     [event.target.id]: event.target.value, // contents 변경 --> 여기만 다른 모양이되었음. id에 넣어주기.그럼 event.target.id사용가능. 변수로 받아와 사용so, 대괄호로 묶기
  //   });
  // };

  return (
    <>
      작성자: <input id="writer" type="text" onChange={onChangeInputs} />
      <br />
      제목: <input id="title" type="text" onChange={onChangeInputs} />
      <br />
      내용: <input id="contents" type="text" onChange={onChangeInputs} />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  );
}
