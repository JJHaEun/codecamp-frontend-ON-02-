import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import { IFormCommentData } from "../../productBoardCommentsQuestion/write/ProductCommentsQuestion.types";
import {
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "../list/ProductCommentsAnswerList.queries";
import CommentsAnswerUI from "./ProductCommentsAnswer.presenter";
import { CREATE_USED_ITEM_QUESTION_ANSWER } from "./ProductCommentsAnswer.queries";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { ICommentsAnswerProps } from "./ProductCommentsAnswer.types";
import { FETCH_USED_ITEM_QUESTIONS } from "../../productBoardCommentsQuestion/list/ProductCommentsQustionList.queries";

const schema = yup.object({
  // 검증하기

  contents: yup.string().required("내용을 입력해주세요"),
});
export default function CommentsAnswer(props: ICommentsAnswerProps) {
  const router = useRouter();
  // const [isEdit, setIsEdit] = useState(false);
  const { register, handleSubmit, formState } = useForm<IFormCommentData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USED_ITEM_QUESTION_ANSWER);
  const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USED_ITEM_QUESTION_ANSWER);

  const onClickAnswerSubmit = async (data: IFormCommentData) => {
    if (typeof props.id !== "string") return;

    try {
      const result = await createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId: props.id,
          createUseditemQuestionAnswerInput: {
            contents: data.contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query._id },
          },
        ],
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickEditFinish = async (data: IFormCommentData) => {
    if (!data.contents) {
      Modal.info({ content: "변경사항이 없습니다" });
      return;
    }
    try {
      if (typeof props.id !== "string") return;
      await updateUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: props.id,
          updateUseditemQuestionAnswerInput: {
            contents: data.contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemId: router.query._id },
          },
        ],
      });
      props.setIsEdit?.(false);

      Modal.success({ content: "질문이 성공적으로 수정되었습니다" });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <CommentsAnswerUI
      handleSubmit={handleSubmit}
      onClickAnswerSubmit={onClickAnswerSubmit}
      register={register}
      formState={formState}
      el={props.el}
      onClickEditFinish={onClickEditFinish}
      isEdit={props.isEdit}
      isHaveAnswer={props.isHaveAnswer}
      setIsHaveAnswer={props.setIsHaveAnswer}
    />
  );
}
