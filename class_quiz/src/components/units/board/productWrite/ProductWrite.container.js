import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_PRODUCT } from "./ProductWrite.queries";

export default function ProductWrite() {
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();

  const [createProduct] = useMutation(CREATE_PRODUCT);
  const onClickButton = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller,
          createProductInput: {
            name,
            detail,
            price: Number(price),
          },
        },
      });
      alert(result.data.createProduct.message);
      router.push(`/05/boards/${result.data.createProduct._id}`);
    } catch (error) {
      alert(error.message);
    }
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
    <ProductWriteUI
      onClickButton={onClickButton}
      onChangeSeller={onChangeSeller}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
    />
  );
}
