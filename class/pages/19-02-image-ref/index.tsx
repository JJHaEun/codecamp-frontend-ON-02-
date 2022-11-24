import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; //  <input type="file" multiple/> multiple 속성사용시 여러개 드래그로 선택 가능
    try {
      const result = await uploadFile({ variables: { file } });

      console.log(result);
      console.log(result.data?.uploadFile.url); // 얘가 이미지 주소
      setImageUrl(result.data?.uploadFile.url ?? ""); // 없으면 빈문자열 '||' 쓰니 빨간줄 생겨 '??'로 바꿈
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message }); // 만약 error가 Error의 자식이면 (거기포함되면) 에러모달창 띄워주기
    }
  };

  const onClickImg = () => {
    fileRef.current?.click();
  };
  return (
    <>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
        onClick={onClickImg}
      >
        이미지선택
      </div>
      <input
        style={{ display: "none" }} /* 숨김처리 */
        type="file"
        onChange={onChangeFile} /*  multiple */
        ref={fileRef}
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
      {/* /* 화면에 뿌리기 */}
    </>
  );
}
