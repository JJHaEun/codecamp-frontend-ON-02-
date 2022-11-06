import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;
export default function Graphql0402() {
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickRt = async () => {
    const result = await createProduct({
      variables: {
        seller: seller,
        createProductInput: {
          name: name,
          detail: detail,
          price: parseInt(price),
        },
      },
    });
    console.log(result);
    alert(result.data.createProduct.message);
  };
  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeDetail = (event) => {
    setDetail(event.target.value);
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  return (
    <>
      판매자: <input type="text" onChange={onChangeSeller} />
      판매물건: <input type="text" onChange={onChangeName} />
      상태: <input type="text" onChange={onChangeDetail} />
      가격: <input type="text" onChange={onChangePrice} />
      <button onClick={onClickRt}> GRAPHQL-API 요청하기</button>
    </>
  );
  //   const CREATE_BOARD = gql`
  //     mutation createBoard($writer: String, $title: String, $contents: String) {
  //       createBoard(writer: $writer, title: $title, contents: $contents) {
  //         _id
  //         number
  //         message
  //       }
  //     }
  //   `;
  //   const [writer, setWriter] = useState("");
  //   const [title, setTitle] = useState("");
  //   const [contents, setContents] = useState("");
  //   const [createBoard] = useMutation(CREATE_BOARD);
  //   const onClickRt = async () => {
  //     const result = await createBoard({
  //       variables: {
  //         writer: writer,
  //         title: title,
  //         contents: contents,
  //       },
  //     });
  //     console.log(result);
  //   };
  //   const onChangeWriter = (event) => {
  //     setWriter(event.target.value);
  //   };
  //   const onChangeTitle = (event) => {
  //     setTitle(event.target.value);
  //   };
  //   const onChangeContents = (event) => {
  //     setContents(event.target.value);
  //   };

  //   return (
  //     <>
  //       작성자: <input type="text" onChange={onChangeWriter} />
  //       제목: <input type="text" onChange={onChangeTitle} />
  //       내용: <input type="text" onChange={onChangeContents} />
  //       <button onClick={onClickRt}> GRAPHQL-API 요청하기</button>
  //     </>
  //   );
}
