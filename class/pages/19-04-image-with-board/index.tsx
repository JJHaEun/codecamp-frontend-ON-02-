import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import { checkValidationFile } from "../../src/commons/libraries/vaildationFile";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    # 그래프큐엘 주석. 변수의 타입적는곳
    createBoard(createBoardInput: $createBoardInput) {
      # 실제 우리가 전달할 변수 적는곳.
      _id # 생성되면id만 받아옴.
    }
  }
`;
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
export default function GraphqlMutationPage() {
  const [imageUrl, setImageUrl] = useState("");

  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [password, setPassword] = useState("");
  const [나의함수] = useMutation(CREATE_BOARD);
  const onClickSubmit = async () => {
    // const writer = "qqq"// // 이함수에 있으면 현제스코프 적용
    const result = await 나의함수({
      variables: {
        // 생성할것
        createBoardInput: {
          writer,
          title,
          contents,
          password,
          images: [imageUrl], // image담은것을 배열에
        },
      },
    });
    console.log(result);
    // alert(result.data.createBoard.message);
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
    const file = event.target.files?.[0]; //  <input type="file" multiple/> multiple 속성사용시 여러개 드래그로 선택 가능
    // 이미지 검증
    const isVaild = checkValidationFile(file);
    if (!isVaild) return;
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
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      비밀번호: <input type="text" onChange={onChangePassword} />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
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
        accept="image/jpeg,image/png,image/jpg"
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
      {/* /* 화면에 뿌리기 */}
      <button onClick={onClickSubmit}>
        GRAPHQL-API(동기) 요청하기(게시글 둥록하기)
      </button>
    </>
  );
}
