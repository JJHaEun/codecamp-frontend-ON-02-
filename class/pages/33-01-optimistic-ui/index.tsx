import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;
const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: "639996f31182750028ecfcf5" },
    }
  );
  const onClickLike = () => {
    void likeBoard({
      variables: { boardId: "639996f31182750028ecfcf5" },
      //   refetchQueries: [ // 좋지 않은 방법인 리페치 법
      //     {
      //       query: FETCH_BOARD,
      //       variables: { boardId: "639996f31182750028ecfcf5" },
      //     },
      //   ],

      // DB수정될때까지 기다리는 방법 + 옴티미스틱 적용
      // 얘 자체가 data
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1, // 현제값 +1을 데이터 요청하고 바로 넣음. 일단 먼저 업데이트되게.(속임수) 숫자면(있으면 앞에꺼 없으면 0 +1)
      },
      update(cache, { data }) {
        // 그다음 요청보낸것 받아와 최종 마지막값으로 덮어쓰기
        // 캐시 직접수정하기 //
        // data에는 해당하는 response있음 즉, 여기서는 좋아요만 받음 data.likeBoard면 해당 데이터 받을 수 있음
        // chache.modify는 기존에 있는 값을 변경하는겅
        cache.writeQuery({
          // writeQuery는 기존에 없덩것도 변경해 추가 할 수 있다.
          query: FETCH_BOARD,
          variables: { boardId: "639996f31182750028ecfcf5" }, // 이 결과를 찾아서
          data: {
            // 여기의 data.fetchBoard의 data를 의미하는데 이것을 수정. 기존의 _id,_typename은 유지해주어야함
            fetchBoard: {
              _id: "639996f31182750028ecfcf5",
              _typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
  };
  return (
    <>
      <div>현재 카운트(좋아요): {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>좋아요 올리기!!</button>
      {/* 미리 올려옿고 글로벌 스테이트 바로 수정 */}
    </>
  );
}
