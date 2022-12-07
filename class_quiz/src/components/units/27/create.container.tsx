import { gql, useMutation } from "@apollo/client";
import dynamic from "next/dynamic";
// import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../commons/types/generated/types";

import CreatePageUI from "./create.presenter";
import { IFormDataType } from "./create.types";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function CreatePage() {
  const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
      createBoard(createBoardInput: $createBoardInput) {
        _id
      }
    }
  `;
  const router = useRouter();

  const { register, handleSubmit, setValue, trigger } =
    useForm<IFormDataType>();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const onClickSubmit = async (data: IFormDataType) => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          title: data.title,
          password: data.password,
          contents: data.contents,
        },
      },
    });
    if (typeof result.data?.createBoard._id !== "string") return; // string이 아닐경우 뭔가 잘못된것. 중단하거나 알수 없는 애러라는 메세지 띄우기

    void router.push(`/27/editor/detail/${result.data?.createBoard._id}`);
  };

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br/></p>" ? "" : value);
    void trigger("contents");
  };
  return (
    <CreatePageUI
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      onChangeContents={onChangeContents}
      ReactQuill={ReactQuill}
    />
  );
}
