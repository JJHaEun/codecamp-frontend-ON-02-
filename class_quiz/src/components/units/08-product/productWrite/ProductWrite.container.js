import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./ProductWrite.queries";

export default function ProductWrite(props) {
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();
  const [bt, setBt] = useState(false);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);

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
      router.push(`/08/product/${result.data.createProduct._id}`);
    } catch (error) {
      alert(error.message);
    }
  };
  console.log(router.query._id);
  const onClickUpdate = async () => {
    //1.수정하기 뮤테이션 날리기
    const result = await updateProduct({
      variables: {
        // number: Number(router.query.number),
        productId: router.query._id,
        updateProductInput: { name, detail, price: Number(price) },
      },
    });

    //2.상세페이지로 이동하기
    // router.push(`/08-05-boards/${result.data.updateBoard.number}`)
    console.log(result);
    alert(result.data.updateProduct.message);
    router.push(`/08/product/${result.data.updateProduct._id}`); //수정되면 수정한 상세페이지로 이동
  };
  const onChangeSeller = (event) => {
    setSeller(event.target.value);
    if (event.target.value && name && detail && price) {
      setBt(true);
    } else {
      setBt(false);
    }
  };
  const onChangeName = (event) => {
    setName(event.target.value);
    if (seller && event.target.value && detail && price) {
      setBt(true);
    }
  };
  const onChangeDetail = (event) => {
    setDetail(event.target.value);
    if (seller && name && event.target.value && price) {
      setBt(true);
    } else {
      setBt(false);
    }
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value);
    if (seller && name && detail && event.target.value) {
      setBt(true);
    } else {
      setBt(false);
    }
  };

  return (
    <ProductWriteUI
      onClickButton={onClickButton}
      onClickUpdate={onClickUpdate}
      onChangeSeller={onChangeSeller}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      bt={bt}
      isEdit={props.isEdit}
    />
  );
}
