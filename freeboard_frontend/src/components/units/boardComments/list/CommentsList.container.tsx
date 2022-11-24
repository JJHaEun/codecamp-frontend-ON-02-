import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import CommentWritListUI from "./CommentsList.presenter";
import { FETCH_BOARD_COMMENT } from "./CommentsList.queries";

export default function CommentWritList() {
  const router = useRouter();
  // const [currentIndex, setCurrentIndex] = useState(0);

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENT, {
    variables: {
      boardId: String(router.query._id),
    },
  });

  console.log(data?.fetchBoardComments);

  // const [inputs, setInputs] = useState({
  //   // inputs라는 객체 만들어 각각을 넣음
  //   boardCommentId: "",
  //   password: "",

  // });

  // const onClickEdit = () => {
  //   setIsEdit((prev) => !prev);
  // };

  const onLoadMore = async () => {
    if (!data) return;
    await fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments?.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return <CommentWritListUI data={data} onLoadMore={onLoadMore} />;
}
