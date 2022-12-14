import { gql, useMutation } from "@apollo/client";

// import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
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
      _id
      url
    }
  }
`;

export default function ImageUploadPage() {
  // const [imageUrl, setImageUrl] = useState(""); // 미리보기용
  // const [file, setFile] = useState<File>(); // 실제 보낼 파일담기

  const [imageUrls, setImageUrls] = useState(["", "", ""]); // 미리보기용 이미지 3개 이용할거니 배열로!
  const [files, setFiles] = useState<File[]>([]); // 실제 보낼 파일담기(여러개(3개)!!)

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    // createBoard 즉 게시물 등록 전에 uploadfile통해 스토리지에 파일 보내놓고 다운로드 주소를 받아오고 그 주소를 createBoard로 보내기
    // 1. Promise.all 안썼을때 - 하나보내고 기다리고, 하나보내고 기다리고..
    // const resultFile0 = await uploadFile({ variables: { file: files[0] } }); // 파일 업로드하여 그 결과를 resultFile에  담음(스토리지로 보냄)
    // const url0 = resultFile0.data?.uploadFile.url; // 그 결과에서 url을 받아옴.(스토리지url)
    // const resultFile1 = await uploadFile({ variables: { file: files[1] } }); // 파일 업로드하여 그 결과를 resultFile에  담음(스토리지로 보냄)
    // const url1 = resultFile1.data?.uploadFile.url;
    // const resultFile2 = await uploadFile({ variables: { file: files[2] } }); // 파일 업로드하여 그 결과를 resultFile에  담음(스토리지로 보냄)
    // const url2 = resultFile2.data?.uploadFile.url;
    // const resultUrls = [url0, url1, url2]; // 각각의 url을 뽑아서 배열에 들어가는것은 각각의 url [dog1.jpg,dog2.jpg,dog3.jpg]
    //
    //
    //
    // 2. Promise.all 썼을때 -- 한번에보내고 기다림
    // const results = await Promise.all([
    //   uploadFile({ variables: { file: files[0] } }),
    //   uploadFile({ variables: { file: files[1] } }),
    //   uploadFile({ variables: { file: files[2] } }),
    // ]);
    // console.log(results); // 얘는  [resultFile0,resultFile1,resultFile2] . 결과가 url이 아님.map을 사용해 해당의 url을 뽑기
    // const resultUrls = results.map((el) => (el ? el.data?.uploadFile.url : "")); // el이 없으면 빈 문자열로.  [dog1.jpg,dog2.jpg,dog3.jpg]
    //
    //
    //

    // 3. Promise.all을 썼을때(리펙토링) -- [0],[1],[2] 이부분
    const results = await Promise.all(
      // map사용으로 files바꿔끼기
      // files = [File0,File1,File2]
      // files.map(el=>uploadFile({ variables: { file: el } })) //[uploadFile({...:File0}),uploadFile({...:File1}),uploadFile({...:File2})]
      files.map((el) => el && uploadFile({ variables: { file: el } })) // 여기서는 await 붙이지 않기
      // el && 조건으로 el이 있을때만 하기
    );
    console.log(results); // 얘는  [resultFile0,resultFile1,resultFile2] . 결과가 url이 아님.map을 사용해 해당의 url을 뽑기
    const resultUrls = results.map((el) => (el ? el.data?.uploadFile.url : ""));

    const result = await 나의함수({
      variables: {
        // 생성할것
        createBoardInput: {
          writer: "유리",
          title: "안녕하세요",
          contents: "반갑습니다",
          password: "1234",
          images: resultUrls, // [url0,url1,url2]
        },
      },
    });
    console.log(result);
    // alert(result.data.createBoard.message);
  };

  const onChangeFile =
    (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]; //  <input type="file" multiple/> multiple 속성사용시 여러개 드래그로 선택 가능 그중하나. 멀티플 안주면 선택한 사진 하나 의미
      if (!file) return;
      console.log(file);
      // try {
      //   const result = await uploadFile({
      //     variables: {
      //       file, // 벡엔드에 보내기
      //     },
      //   });

      //   console.log(result);
      //   console.log(result.data?.uploadFile.url); // 얘가 이미지 주소
      //   setImageUrl(result.data?.uploadFile.url ?? ""); // 없으면 빈문자열 '||' 쓰니 빨간줄 생겨 '??'로 바꿈 // 스테이트에 저장. 저장되면 리랜더 되면서 이미지가 미리보기 됨==> 느림
      // } catch (error) {
      //   if (error instanceof Error) Modal.error({ content: error.message }); // 만약 error가 Error의 자식이면 (거기포함되면) 에러모달창 띄워주기
      // }

      // 받은 file을 가지고 브라우저자체에서 미리보기 생성

      // 1. 임시 url생성 - (가짜url: 내 브라우저에서만 접근 가능)// 스토리지나 DB에 올리는것 아님 -- 최근에 나온 방식이기에 아직은 적용안되는 브라우저 있음.
      // 적용이 가능한 브라우저인지 체크하여 적용이 가능한 브라우저라면 1번방법을 아니면 2번 방법을 사용.
      // 상황에 따라 사용할것.
      // const result = URL.createObjectURL(file); // file 에 접근할 수 있는 가짜 url을 만들어 주세요
      // console.log(result); // blob이라는 이진으로된 큰 객체에 주소가 만들어짐. 본인 컴퓨터에서만 접근가능 localhost이므로
      // setImageUrl(result);

      // 2. 임시 url생성 - (진짜 url: 다른 브라우저에서도 접근 가능) // 스토리지나 DB에 올리는것 아님 // 주로 사용하는 방식.
      // 둘다 스토리지에 보내지는  않음.
      // 이미지 색 하나하나를 글자로 변환해 만듬. 사이즈 큼
      // 1번 방법 나오기 까지 계속사용했던 방식. 모든 브라우저에서 가능.
      // 이 방법 사용하여 실습
      const fileReader = new FileReader(); // FileReader를 활용
      fileReader.readAsDataURL(file); // 얘를 가지고  file 을 DataURL로 읽을 것임. 누구나 쓸수있는 진짜 주소가 됨.
      // 바로 되지 않고 시간 걸림 로드될때까지 기다려야함.
      fileReader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          // 로드가 끝나면 event가 들어오고 그 이멘트의 타겟의 result가 사진주소.
          console.log(event.target?.result); // 이벤트가 여러군데 들어가기에 즉, 태그에서만 쓰이는게 아니기에 태그에는 id 가 있으나,  아닐경우도 있으니 currentTarget으로썼던 경우 있었음.
          // event.target은 태그만을 가리키지 않기때문!!
          // setImageUrls(event.target?.result); // 사진 선택하면 이미지 미리보기 빠르게 가능. 등록하지 않으면 스토리지에 안날라가니 스토리지에 찌꺼기 쌓이지 않음
          // setFiles(file); // 실제 파일을 저장 // 등록하기를 누를시 state에 담김

          // 임시로 담을때 temp라는 용어 주로 사용
          const tempUrls = [...imageUrls]; // 단 imageUrls라는 원본을 바꿔버리면 setImageUrls에 넣으면 바뀐것 인식을 못함. 스프레드연산자 사용하기!
          tempUrls[index] = event.target?.result; // 미리보기 이미지도 각각의 인덱스 위치에 넣기
          setImageUrls(tempUrls); // 해당 인덱스 위치의 것이 바뀐것을 넣어줌.

          const tempFiles = [...files]; // 원본을 건드리지 않고 스프레드로 복사하여 사용
          tempFiles[index] = file; // file을 files의 해당 인덱스 위치에
          setFiles(tempFiles); // 해당 인덱스 위치의 것이 바뀐것을 넣어줌.
        }
      };
    };
  return (
    <>
      <input
        type="file"
        onChange={onChangeFile(
          0
        )} /*  HOC형태로 적어 onChangeFile의 index라는 매개변수로 보내줌  */
      />

      <input type="file" onChange={onChangeFile(1)} /*  multiple */ />
      <input type="file" onChange={onChangeFile(2)} /*  multiple */ />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}

      {/* /* 화면에 뿌리기 */}
      {/* 브라우저에서 바로 만든 임시 url사용하기에 구글스토리지에서 받아오지 않음 그것을 state에 저장하고 그것을 바로 사용 속도 빠름. 스토리지제 저장되는게 아니라서 찌꺼기 쌓이지 않음  */}
      <img src={imageUrls[0]} />
      {/* 여기가 이미지 미리보기 나오는 부분 */}
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />

      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </>
  );
}
