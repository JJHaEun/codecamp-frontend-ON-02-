import { useQuery, gql } from "@apollo/client";
import {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

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

type IBaskets = Array<Pick<IBoard, "contents" | "title" | "_id" | "writer">>;

export default function StaticRoutedPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  // 인자 el이 basket에 들어감
  const onClickBasket = (basket: IBoard) => () => {
    console.log(basket);

    // 1. 기존 장바구니 가져오기// 누적담기
    const baskets: IBaskets = JSON.parse(
      // 로컬스토리지에서 가져온건 문자열이기에 배열로 바꾸기
      localStorage.getItem("baskets") ?? "[]" // 없으면 빈배열 따라서 직접 배열 안만들어줘도 됨
    );

    // 2. 이미 담겼는지 확인하기 // 각각의 기존에 담겨있던객체의 아이디를 뽑아오고,지금 클릭한 아이디를 비교
    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length === 1) {
      // 이미 하나가 있음
      alert("이미 담으신 물품입니다!!!");
      return; // 더 못담게 return
    }

    // 3. 해당 장바구니에 담기
    baskets.push(basket);
    localStorage.setItem("baskets", JSON.stringify(baskets)); // 문자열로 들어가야하니 stringify붙여야함
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <button onClick={onClickBasket(el)}>장바구니담기</button>
        </div>
      ))}
    </>
  );
}
