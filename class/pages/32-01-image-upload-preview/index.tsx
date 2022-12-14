// import { useMutation } from "@apollo/client";
// import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
// import {
//   IMutation,
//   IMutationUploadFileArgs,
// } from "../../src/commons/types/generated/types";

// const UPLOAD_FILE = gql`
//   mutation uploadFile($file: Upload!) {
//     uploadFile(file: $file) {
//       url
//     }
//   }
// `;

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");
  //   const [uploadFile] = useMutation<
  //     Pick<IMutation, "uploadFile">,
  //     IMutationUploadFileArgs
  //   >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
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
    const result = URL.createObjectURL(file); // file 에 접근할 수 있는 가짜 url을 만들어 주세요
    console.log(result); // blob이라는 이진으로된 큰 객체에 주소가 만들어짐. 본인 컴퓨터에서만 접근가능 localhost이므로
    setImageUrl(result);

    // 2. 임시 url생성 - (진짜 url: 다른 브라우저에서도 접근 가능) // 스토리지나 DB에 올리는것 아님 // 주로 사용하는 방식.
    // 둘다 스토리지에 보내지는  않음.
    // 이미지 색 하나하나를 글자로 변환해 만듬. 사이즈 큼
    // 1.번 방법 나오기 까지 계속사용했던 방식. 모든 브라우저에서 가능.

    const fileReader = new FileReader(); // FileReader를 활용
    fileReader.readAsDataURL(file); // 얘를 가지고  file 을 DataURL로 읽을 것임. 누구나 쓸수있는 진짜 주소가 됨.
    // 바로 되지 않고 시간 걸림 로드될때까지 기다려야함.
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        // 로드가 끝나면 event가 들어오고 그 이멘트의 타겟의 result가 사진주소.
        console.log(event.target?.result); // 이벤트가 여러군데 들어가기에 특, 태그에서만 쓰이는게 아니기에 태그에는 id 가 있으나,  아닐경우도 있으니 currentTarget으로썼던 경우 있었음.
        setImageUrl(event.target?.result);
      }
    };
  };
  return (
    <>
      <input type="file" onChange={onChangeFile} /*  multiple */ />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}

      {/* /* 화면에 뿌리기 */}
      {/* 브라우저에서 바로 만든 임시 url사용하기에 구글스토리지에서 받아오지 않음 그것을 state에 저장하고 그것을 바로 사용 속도 빠름. 스토리지제 저장되는게 아니라서 찌꺼기 쌓이지 않음  */}
      <img src={imageUrl} />
    </>
  );
}
