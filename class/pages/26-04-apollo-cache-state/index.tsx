import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

// gql query
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;
// fetchBoards

export default function PageNation() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickDelete = (boardId: string) => () => {
    void deleteBoard({
      variables: {
        boardId, // 이 받아온 아이디로 캐시를 직접수정하자
      },
      // refetchQueries:[{query:FETCH_BOARDS}]
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const deletedId = data.deleteBoard; // 삭제된 아이디
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              ); // 삭제된 아이디랑 다른것들만 남김// el._id가 안되므로 readField를 사용해 꺼내오기
              return [...filteredPrev]; // 삭제된 ID를 제외한 나머지만 리턴
            },
          },
        });
      },
    });
  };

  const onClickCreate = () => {
    void createBoard({
      variables: {
        createBoardInput: {
          writer: "유리",
          password: "1234",
          title: "제목입니다",
          contents: "내용입니다",
        },
      },
      // refetchQueries:[{query:FETCH_BOARDS}]
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <>
      {data?.fetchBoards?.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <button onClick={onClickDelete(el._id)}> 삭제하기</button>
        </div>
      ))}
      <button onClick={onClickCreate}>등록하기</button>
    </>
  );
}
