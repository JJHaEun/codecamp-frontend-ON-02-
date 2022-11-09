import { useMutation, useQuery } from "@apollo/client";
import { DELETE_PRODUCT, FETCH_PRODUCTS } from "./FetchDeleteProduct.queries";
import FetchProductsUI from "./FetchDeleteProducts.presenter";

export default function FetchProducts() {
  const { data } = useQuery(FETCH_PRODUCTS);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const onClickDelete = async (event) => {
    await deleteProduct({
      variables: {
        productId: event.target.id,
      },
      refetchQueries: [{ query: FETCH_PRODUCTS }],
    });
  };
  return <FetchProductsUI data={data} onClickDelete={onClickDelete} />;
}
