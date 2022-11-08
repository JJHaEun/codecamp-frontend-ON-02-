import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
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
