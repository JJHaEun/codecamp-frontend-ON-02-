import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import { checkValidationFile } from "../../../commons/libraries/validationFile";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../commons/types/generated/types";
import CreateBoardAndImgPageUI from "./CreateBoard.presenter";
import { CREATE_BOARD, UPLOAD_FILE } from "./CreateBoard.query";

export default function CreateBoardAndImgPage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const [createBoard] = useMutation(CREATE_BOARD);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          title,
          contents,
          password,
          images: [imageUrl],
        },
      },
    });
    console.log(result);
    alert("등록성공!");
  };
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    const isVaild = checkValidationFile(file);
    if (!isVaild) return;

    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result);
      console.log(result.data?.uploadFile.url); // 얘가 이미지 주소
      setImageUrl(result.data?.uploadFile.url ?? "");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message }); // 만약 error가 Error의 자식이면 (거기포함되면) 에러모달창 띄워주기
    }
  };

  const onClickImg = () => {
    fileRef.current?.click();
  };
  return (
    <CreateBoardAndImgPageUI
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangePassword={onChangePassword}
      onChangeFile={onChangeFile}
      onClickImg={onClickImg}
      fileRef={fileRef}
      imageUrl={imageUrl}
    />
  );
}
