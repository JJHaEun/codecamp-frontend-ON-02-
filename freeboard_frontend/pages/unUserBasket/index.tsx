import { gql, useQuery } from "@apollo/client";
import { Modal } from "antd";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      useditemAddress {
        address
        # addressDetail
        createdAt
      }
      createdAt
    }
  }
`;

export default function UnUserBasketPage() {
  const { data } = useQuery(FETCH_USED_ITEMS);

  const saveBasket = (basket: any) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") ?? "[]");

    const basketTemp = baskets.filter((el) => el._id === basket._id);
    if (basketTemp.length === 1) {
      Modal.info({ content: "이미 장바구니에 담긴 상품입니다." });
      return;
    }

    baskets.push(basket);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };
  // useEffect(() => {
  //   // 로컬스토리지를 찾기 위해 유즈 이펙트를 사용한다
  //   const baskets = JSON.parse(localStorage.getItem("basket") ?? "[]");
  //   setBesketItem(baskets);
  // }, []);
  return (
    <div>
      {data?.fetchUseditems.map((el) => (
        <div key={el._id}>
          <div>{el.name}</div>
          <div>{el.price}</div>
          <button onClick={saveBasket(el)}>장바구니담기</button>
        </div>
      ))}
    </div>
  );
}
