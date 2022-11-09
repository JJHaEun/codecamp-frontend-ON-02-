import { useQuery } from "@apollo/client";
import { FETCH_PRODUCT } from "./ProductsDetail.queries";
import FetchProductsUI from "./ProductsDetail.presenter";
import { useRouter } from "next/router";

export default function FetchProduct() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query._id, //찾기위해 이용하는 값
    },
  });
  const onClickMoveEdit = () => {
    router.push(`/08/product/${router.query._id}/edit`);
  };
  return <FetchProductsUI data={data} onClickMoveEdit={onClickMoveEdit} />;
}
