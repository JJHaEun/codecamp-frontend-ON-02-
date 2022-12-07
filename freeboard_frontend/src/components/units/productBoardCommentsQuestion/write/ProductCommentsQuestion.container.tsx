import CommentsQuestionUI from "./ProductCommentsQuestion.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IFormCommentData } from "./ProductCommentsQuestion.types";
import { useMutation } from "@apollo/client";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./ProductCommentsQuestion.queries";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";

export default function CommentsQuestion() {
  const { register, handleSubmit, formState } = useForm<IFormCommentData>();

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);

  return (
    <>
      <CommentsQuestionUI />
    </>
  );
}
