import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      _id
      url
    }
  }
`;

export default function ImageUploadPage32day() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrls, setImageUrls] = useState(["", "", ""]); // 미리보기용 이미지 3개 이용할거니 배열로!
  const [files, setFiles] = useState<File[]>([]); // 실제 보낼 파일담기(여러개(3개)!!)
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [createBoard] = useMutation(CREATE_BOARD);
  const fileRef1 = useRef<HTMLInputElement>(null);
  const fileRef2 = useRef<HTMLInputElement>(null);
  const fileRef3 = useRef<HTMLInputElement>(null);

  const onClickSubmit = async () => {
    const results = await Promise.all(
      files.map((el) => el && uploadFile({ variables: { file: el } })) // 여기서는 await 붙이지 않기
      // el && 조건으로 el이 있을때만 하기
    );
    console.log(results); // 얘는  [resultFile0,resultFile1,resultFile2] . 결과가 url이 아님.map을 사용해 해당의 url을 뽑기
    const resultUrls = results.map((el) => (el ? el.data?.uploadFile.url : ""));
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          title,
          contents,
          password,
          images: resultUrls, // DB에 저장됨.잔짜 url을 넣으면 다른 브라우저에서도 접근 가능하나 사진이 글자로 변환된것이기에 용량 큼.따라서 스토리지에 저장해 다운로드 받을 주소만 DB에 저장.
        },
      },
    });
    console.log(result);
  };

  const onChangeFile =
    (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;
      console.log(file);

      const fileReader = new FileReader(); // FileReader를 활용
      fileReader.readAsDataURL(file); // 얘를 가지고  file 을 DataURL로 읽을 것임. 누구나 쓸수있는 진짜 주소가 됨.
      // 바로 되지 않고 시간 걸림 로드될때까지 기다려야함.
      fileReader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          // 로드가 끝나면 event가 들어오고 그 이멘트의 타겟의 result가 사진주소.
          console.log(event.target?.result);

          const tempUrls = [...imageUrls];
          tempUrls[index] = event.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };
    };
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onClickImg = () => {
    fileRef1.current?.click();
  };

  const onClickImg2 = () => {
    fileRef2.current?.click();
  };
  const onClickImg3 = () => {
    fileRef3.current?.click();
  };

  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter} />
      비밀번호: <input type="password" onChange={onChangePassword} />
      제목: <input type="text" onChange={onChangeTitle} />
      내용: <input type="text" onChange={onChangeContents} />
      이미지 등록:
      {imageUrls[0] ? (
        <img
          onClick={onClickImg}
          src={imageUrls[0]}
          style={{ width: "120px", height: "120px" }}
        />
      ) : (
        <button
          onClick={onClickImg}
          style={{ width: "120px", height: "120px" }}
        >
          +
        </button>
      )}
      {imageUrls[1] ? (
        <img
          onClick={onClickImg2}
          src={imageUrls[1]}
          style={{ width: "120px", height: "120px" }}
        />
      ) : (
        <button
          onClick={onClickImg2}
          style={{ width: "120px", height: "120px" }}
        >
          +
        </button>
      )}
      {imageUrls[2] ? (
        <img
          onClick={onClickImg3}
          src={imageUrls[2]}
          style={{ width: "120px", height: "120px" }}
        />
      ) : (
        <button
          onClick={onClickImg3}
          style={{ width: "120px", height: "120px" }}
        >
          +
        </button>
      )}
      <input
        type="file"
        onChange={onChangeFile(0)}
        ref={fileRef1}
        style={{ display: "none" }}
        accept="image/jpeg,image/png,image/jpg"
      />
      <input
        type="file"
        onChange={onChangeFile(1)}
        style={{ display: "none" }}
        ref={fileRef2}
        accept="image/jpeg,image/png,image/jpg"
      />
      <input
        type="file"
        onChange={onChangeFile(2)}
        style={{ display: "none" }}
        ref={fileRef3}
        accept="image/jpeg,image/png,image/jpg"
      />
      <button onClick={onClickSubmit}>저장하기</button>
    </>
  );
}
