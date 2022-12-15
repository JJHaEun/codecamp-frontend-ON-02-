import { useApolloClient, useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import {
  FETCH_BOARD,
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
} from "./BoardList.queries";
import { useRouter } from "next/router";

import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent, useState } from "react";
// import { useMoveToPage } from "../../../commons/hooks/useMoToPage";
import _ from "lodash";
export default function BoardList() {
  // const { onClickMoveToPage } = useMoveToPage();
  // const { keyword, onChangeKeyword } = useSearch();
  const client = useApolloClient();
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickMoveNew = () => {
    void router.push("/boards/new");
  };

  const onClickMoveDetail = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };
  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  const getDebounce = _.debounce((value) => {
    void refetch({ page: 1 });
  }, 1000);
  // onMouseOver ==> 마우스 올라갔을때
  const preFetchBoard = async (event: MouseEvent<HTMLDivElement>) => {
    // el._id즉 각 게시물의 아이디를 boardId로 받아 그대로 사용!
    const result = await client.query({
      query: FETCH_BOARD, // 패치가 이루어지고 아폴로 캐시(글로벌스테이트)에 저장됨. 페이지 열자마자 한번에 보여줄 수 있음. 받아오고 리랜더링하고 등의 과정빠져 또 요청안감
      variables: { boardId: event?.currentTarget.id },
    });
    getDebounce(result);
    // useQuery
    // useLazyQuery => useQuery와는 달리 내가 원할때 요청 가능하나, 변수에 담지못하고 data에 받아짐 그부분은 useQuery와 동일
    // useApolloClient =>내가 원하는 시점에 요청가능. 버튼클릭시 라던가.. axios와 동일한 방식으로 사용가능.(변수에 담아..)
  };
  return (
    <BoardListUI
      data={data}
      onClickMoveNew={onClickMoveNew}
      onClickMoveDetail={onClickMoveDetail}
      refetch={refetch}
      countBoards={dataBoardsCount?.fetchBoardsCount}
      onChangeKeyword={onChangeKeyword}
      refetchBoardsCount={refetchBoardsCount}
      keyword={keyword}
      preFetchBoard={preFetchBoard}
    />
  );
}
