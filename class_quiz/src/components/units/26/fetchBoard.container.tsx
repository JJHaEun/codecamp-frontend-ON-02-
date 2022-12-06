import { useMutation, useQuery } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";
import FetchBoardPageUI from "./fetchBoard.presenter";
import { CREATE_BOARD, DELETE_BOARD, FETCH_BOARDS } from "./fetchBoard.queries";
import { useForm } from "react-hook-form";
import { IFormData } from "./fetchBoard.types";

export default function FetchBoardPage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { register, handleSubmit } = useForm<IFormData>();

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickCreate = async (data: IFormData) => {
    await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          title: data.title,
          contents: data.contents,
          password: data.password,
        },
      },
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARDS,
      //     },
      //   ],
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };
  const onClickDelete = (event: MouseEvent<HTMLButtonElement>) => {
    void deleteBoard({
      variables: {
        boardId: event.currentTarget.id,
      },
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARDS,
      //     },
      //   ],
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const deletedId = data.deleteBoard;
              const filteredPrev = prev.filter(
                (el: any) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };
  return (
    <FetchBoardPageUI
      onClickCreate={onClickCreate}
      onClickDelete={onClickDelete}
      data={data}
      register={register}
      handleSubmit={handleSubmit}
    />
  );
}
