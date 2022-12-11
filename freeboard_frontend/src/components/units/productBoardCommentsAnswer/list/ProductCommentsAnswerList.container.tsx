import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../commons/types/generated/types";
import CommentsAnswerListUI from "./ProductCommentsAnswerList.presenter";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./ProductCommentsAnswerList.queries";

export default function CommentsAnswerList() {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: String(router.query._id),
    },
  });

  const onLoadMore = async () => {
    if (!data) return;
    await fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestionAnswers?.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditemQuestionAnswers === undefined) {
          return {
            fetchUseditemQuestionAnswers: [
              ...prev.fetchUseditemQuestionAnswers,
            ],
          };
        }
        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
    console.log(data?.fetchUseditemQuestionAnswers);
  };

  return <CommentsAnswerListUI onLoadMore={onLoadMore} data={data} />;
}
