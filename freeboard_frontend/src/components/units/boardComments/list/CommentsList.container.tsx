import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import { success } from "../../board/alert/Alert";
import CommentWritListUI from "./CommentsList.presenter";
import {
  FETCH_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./CommentsList.queries";

export default function CommentWritList() {
  const router = useRouter();
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENT, {
    variables: {
      boardId: String(router.query._id),
    },
  });
  console.log(data?.fetchBoardComments);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [boardCommentId, setBoardCommentId] = useState("");
  const [password, setPassword] = useState("");
  // const [inputs, setInputs] = useState({
  //   // inputs라는 객체 만들어 각각을 넣음
  //   boardCommentId: "",
  //   password: "",

  // });
  const [contents, setContents] = useState("");
  const [value, setValue] = useState(1);

  // const onClickEdit = () => {
  //   setIsEdit((prev) => !prev);
  // };
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const OnclickDeleteComment = async (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) return;
    try {
      await deleteBoardComment({
        variables: {
          //  ...inputs
          boardCommentId,
          password,
        },

        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENT,
            variables: { boardId: router.query._id },
          },
        ],
      });
      setIsOpenDelete((prev) => !prev);
      // 삭제완료 창  띄면 좋을것.
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickcheckPermissionDeleteModal = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    setBoardCommentId(event.currentTarget.id);
    setIsOpenDelete((prev) => !prev);
  };

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleCancel = () => {
    if (typeof router.query._id !== "string") return;
    setIsOpenDelete((prev) => !prev);
    void router.push(`/boards/${router.query._id}`);
  };

  const onClickEditFinish = async () => {
    if (!contents) {
      if (typeof router.query._id !== "string") return;
      if (confirm("수정하시겠습니까?")) {
        alert("수정완료");
        void router.push(`/boards/${router.query._id}`);
      } else {
        alert("변경사항이 없습니다");
      }
    }
  };
  const onClickEdit = async (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) return;
    setIsEdit((prev) => !prev);
    try {
      await updateBoardComment({
        variables: {
          boardCommentId: String(router.query._id),
          password,
          updateBoardCommentInput: {
            contents,
            rating: value,
          },
        },
      });
      success();
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

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

  return (
    <CommentWritListUI
      onClickEditFinish={onClickEditFinish}
      isEdit={isEdit}
      data={data}
      isOpenDelete={isOpenDelete}
      handleCancel={handleCancel}
      OnclickDeleteComment={OnclickDeleteComment}
      onClickcheckPermissionDeleteModal={onClickcheckPermissionDeleteModal}
      onChangeDeletePassword={onChangeDeletePassword}
      onClickEdit={onClickEdit}
      onLoadMore={onLoadMore}
    />
  );
}
