import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

// prettier-ignore
export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput:CreateBoardInput!) { # 그래프큐엘 주석. 변수의 타입적는곳
    createBoard(createBoardInput:$createBoardInput) {# 실제 우리가 전달할 변수 적는곳.
      _id
      writer
      title
      contents

    }
  }
`;
export default function GraphqlMutationPage() {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(CREATE_BOARD);
  const onClickSubmit = async () => {
    // const writer = "qqq"// // 이함수에 있으면 현제스코프 적용
    const result = await 나의함수({
      variables: {
        createBoardInput: {
          // variables가 $역할을 해주니 여기에는 $쓰지 않음.원래는 각각 $가 들어감.($writer...등)
          writer: writer, // 이름같아도 다른것이기에 문재되지 않음. 이 함수에 없으면 스코프체인으로 위에서 찾음
          title: title,
          contents: contents,
          password: "1234",
        },
      },
    });
    console.log(result);
    // alert(result.data.createBoard.message);
    router.push(`/boards/${result.data.createBoard._id}`); // 생성한 게시글로 이동
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };
  return (
    <>
      작성자:
      <input role="input-writer" type="text" onChange={onChangeWriter} />
      <br />
      제목: <input role="input-title" type="text" onChange={onChangeTitle} />
      <br />
      내용:
      <input role="input-contents" type="text" onChange={onChangeContents} />
      <br />
      <button role="submit-button" onClick={onClickSubmit}>
        GRAPHQL-API(동기) 요청하기
      </button>
    </>
  );
}
