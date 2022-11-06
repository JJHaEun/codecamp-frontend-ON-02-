import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      #받아올값
      seller
      name
      detail
      price
    }
  }
`;
export default function Dynamic05Board() {
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query._id, //찾기위해 이용하는 값
    },
  });

  return (
    <>
      {/* <div>판매자: {data && data.fetchProduct?.seller}</div>
      <div>상품명: {data && data.fetchProduct?.name}</div>
      <div>상품내용: {data && data.fetchProduct?.detail}</div>
      <div>상품가격: {data && data.fetchProduct?.price}</div> */}
      {/* <div>판매자: {data?.fetchProduct?.seller}</div>
      <div>상품명: {data?.fetchProduct?.name}</div>
      <div>상품내용: {data?.fetchProduct?.detail}</div>
      <div>상품가격: {data?.fetchProduct?.price}</div> */}
      <div>판매자: {data ? data.fetchProduct?.seller : "loading..."}</div>
      <div>상품명: {data ? data.fetchProduct?.name : "loading..."}</div>
      <div>상품내용: {data ? data.fetchProduct?.detail : "loading..."}</div>
      <div>상품가격: {data ? data.fetchProduct?.price : "loading..."}</div>
    </>
  );
}
