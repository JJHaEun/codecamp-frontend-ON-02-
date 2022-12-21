import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./ProductCommentsQuestionList.queries";
import { ICommentsListItemsProps } from "./ProductCommentsQuestionList.types";
import CommentsListItemsUI from "./ProductCommentsQuestionListItems.presenter";

export default function CommentsListItems(props: ICommentsListItemsProps) {
  const router = useRouter();
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  // const [isHaveAnswer, setIsHaveAnswer] = useState(false);
  const [useditemQuestionId, setUsedItemQusetionId] = useState("");
  const [deleteUsedItemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USED_ITEM_QUESTION);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  // const onClickAnswer = () => {
  //   if (!localStorage.getItem("accessToken")) {
  //     Modal.info({ content: "권한이 없습니다" });
  //     void router.push("/login");
  //     return;
  //   }
  //   setIsHaveAnswer(true);
  // };
  const OnclickDeleteComment = async (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) return;
    try {
      await deleteUsedItemQuestion({
        variables: {
          //  ...inputs
          useditemQuestionId,
        },

        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query._id },
          },
        ],
      });
      setIsOpenDelete((prev) => !prev);

      Modal.success({ content: "삭제되었습니다" });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickcheckPermissionDeleteModal = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    setUsedItemQusetionId(event.currentTarget.id);
    setIsOpenDelete((prev) => !prev);
  };

  const handleCancel = () => {
    if (typeof router.query._id !== "string") return;
    setIsOpenDelete((prev) => !prev);
    void router.push(`/market/${router.query._id}`);
  };

  return (
    <CommentsListItemsUI
      isOpenDelete={isOpenDelete}
      isEdit={isEdit}
      // isHaveAnswer={isHaveAnswer}
      OnclickDeleteComment={OnclickDeleteComment}
      onClickcheckPermissionDeleteModal={onClickcheckPermissionDeleteModal}
      handleCancel={handleCancel}
      onClickEdit={onClickEdit}
      // onClickAnswer={onClickAnswer}
      setIsEdit={setIsEdit}
      // setIsHaveAnswer={setIsHaveAnswer}
      el={props.el}
    />
  );
}
