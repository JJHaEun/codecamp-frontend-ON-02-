import { useMutation, useQuery } from "@apollo/client";
// import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
// import { success } from "../../board/alert/Alert";
import CommentWritListUI from "./CommentsList.presenter";
import {
  FETCH_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
  // UPDATE_BOARD_COMMENT,
} from "./CommentsList.queries";

export default function CommentWritList() {
  const router = useRouter();
  // const [isEdit, setIsEdit] = useState(false);

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENT, {
    variables: {
      boardId: String(router.query._id),
    },
  });
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [boardCommentId, setBoardCommentId] = useState("");
  const [password, setPassword] = useState("");
  // const [contents, setContents] = useState("");
  // const [value, setValue] = useState(1);

  // const onClickEdit = () => {
  //   setIsEdit((prev) => !prev);
  // };
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);
  // const [updateBoardComment] = useMutation<
  //   Pick<IMutation, "updateBoardComment">,
  //   IMutationUpdateBoardCommentArgs
  // >(UPDATE_BOARD_COMMENT);
  const OnclickDeleteComment = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId,
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
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onClickcheckPermissionDeleteModal = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    setBoardCommentId(event.currentTarget.id);
    setIsOpenDelete((prev) => !prev);
  };

  const OnClickCommentsBody = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    alert(event.currentTarget.id + "님이 작성한 글입니다");
  };
  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleCancel = () => {
    if (typeof router.query._id !== "string") return;
    setIsOpenDelete((prev) => !prev);
    void router.push(`/boards/${router.query._id}`);
  };

  // const onClickEditFinish = async () => {
  //   if (!contents) {
  //     if (confirm("수정하시겠습니까?")) {
  //       alert("변경사항이 없습니다");
  //       return;
  //     } else {
  //       void router.push(`/boards`);
  //       return;
  //     }
  //   }
  //   try {
  //     await updateBoardComment({
  //       variables: {
  //         boardCommentId: String(router.query._id),
  //         password,
  //         updateBoardCommentInput: {
  //           contents,
  //           rating: value,
  //         },
  //       },
  //     });
  //     success();
  //   } catch (error) {
  //     if (error instanceof Error) Modal.error({ content: error.message });
  //   }
  // };
  const onLoadMore = () => {
    if (data === undefined) return;
    void fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments?.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return {
            fetchBoards: [...prev.fetchBoardComments],
          };
        }
        return {
          fetchBoards: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <CommentWritListUI
      data={data}
      isOpenDelete={isOpenDelete}
      handleCancel={handleCancel}
      OnclickDeleteComment={OnclickDeleteComment}
      OnClickCommentsBody={OnClickCommentsBody}
      onClickcheckPermissionDeleteModal={onClickcheckPermissionDeleteModal}
      onChangeDeletePassword={onChangeDeletePassword}
      // onClickEdit={onClickEdit}
      onLoadMore={onLoadMore}
    />
  );
}
