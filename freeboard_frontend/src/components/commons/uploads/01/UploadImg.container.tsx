import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef } from "react";
import { UPLOAD_FILE } from "./UploadImg.queries";
import Upload01UI from "./UploadImg.presenter";
import { IUpload01Props } from "./UploadImg.types";
import { checkValidationFile } from "./UploadImg.validation";

export default function Uploads01(props: IUpload01Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickImg = () => {
    fileRef.current?.click();
  };
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationFile(event.target.files?.[0]);
    if (!file) return;
    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result);
      console.log(result.data?.uploadFile.url); // 얘가 이미지 주소
      //   if (typeof result.data?.uploadFile.url !== "string") return;
      props.onChangeImgUrls(result.data?.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message }); // 만약 error가 Error의 자식이면 (거기포함되면) 에러모달창 띄워주기
    }
  };
  return (
    <Upload01UI
      fileRef={fileRef}
      onClickImg={onClickImg}
      onChangeFile={onChangeFile}
      imageUrl={props.imageUrl}
      defaultFileUrl={props.defaultFileUrl}
    />
  );
}
