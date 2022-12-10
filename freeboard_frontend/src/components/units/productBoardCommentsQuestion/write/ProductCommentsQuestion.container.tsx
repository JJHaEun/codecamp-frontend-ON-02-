import CommentsQuestionUI from "./ProductCommentsQuestion.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  ICommentsQuestionProps,
  IFormCommentData,
} from "./ProductCommentsQuestion.types";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM_QUESTION } from "./ProductCommentsQuestion.queries";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  FETCH_USED_ITEM_QUESTIONS,
  UPDATE_USED_ITEM_QUESTION,
} from "../list/ProductCommentsQustionList.queries";
const schema = yup.object({
  // 검증하기

  contents: yup.string().required("내용을 입력해주세요"),
});
export default function CommentsQuestion(props: ICommentsQuestionProps) {
  const router = useRouter();
  // const [isEdit, setIsEdit] = useState(false);
  const { register, handleSubmit, formState } = useForm<IFormCommentData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);

  const onClickCommentSubmit = async (data: IFormCommentData) => {
    console.log(router.query._id);
    try {
      const result = await createUseditemQuestion({
        variables: {
          useditemId: String(router.query._id),
          createUseditemQuestionInput: {
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
      if (typeof router.query._id !== "string") return;
      await updateUseditemQuestion({
        variables: {
          useditemQuestionId: props.el._id,
          updateUseditemQuestionInput: {
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
      props.setIsEdit?.(false);

      Modal.success({ content: "질문이 성공적으로 수정되었습니다" });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <>
      <CommentsQuestionUI
        handleSubmit={handleSubmit}
        onClickCommentSubmit={onClickCommentSubmit}
        register={register}
        formState={formState}
        el={props.el}
        onClickEditFinish={onClickEditFinish}
        isEdit={props.isEdit}

        // isEdit={isEdit}
      />
    </>
  );
}
