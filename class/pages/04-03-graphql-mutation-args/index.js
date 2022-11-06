import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    # 그래프큐엘 주석. 변수의 타입적는곳
    createBoard(writer: $writer, title: $title, contents: $contents) {
      # 실제 우리가 전달할 변수 적는곳.
      _id
      number
      message
    }
  }
`;
export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_BOARD);
  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        //variables가 $역할을 해주니 여기에는 $쓰지 않음.원래는 각각 $가 들어감.($writer...등)
        writer: "훈이",
        title: "안녀엉",
        contents: "반가워어",
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);
  };
  return <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>;
}
