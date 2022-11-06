import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    # 그래프큐엘 주석. 변수의 타입적는곳
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      # 실제 우리가 전달할 변수 적는곳.
      _id
      number
      message
    }
  }
`;
export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_PRODUCT);
  const onClickSubmit = async () => {
    //const writer = "qqq"// // 이함수에 있으면 현제스코프 적용
    const result = await 나의함수({
      variables: {
        //variables가 $역할을 해주니 여기에는 $쓰지 않음.원래는 각각 $가 들어감.($writer...등)
        seller: "훈이",
        createProductInput: {
          name: "mouse",
          detail: "good",
          price: 2000,
        },
      },
    });
    console.log(result);
    alert(result.data.createProduct.message);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>;
}
