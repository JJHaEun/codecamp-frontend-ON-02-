import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductWriteFetchUI from "./ProductWriteFetch.presenter";
import { FETCH_PRODUCT } from "./ProductWriteFetch.queries";

export default function ProductWriteFetch() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query._id, //찾기위해 이용하는 값
    },
  });

  return <ProductWriteFetchUI />;
}
