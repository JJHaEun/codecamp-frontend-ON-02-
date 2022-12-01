import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

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
  const [basketItem, setBesketItem] = useState([]);
  const saveBasket = (item: any) => () => {
    const basket = JSON.parse(localStorage.getItem("basket") ?? "[]");
    const basketTemp = basket.filter(
      (basketItem: any) => basketItem._id === item._id
    );
    if (basketTemp.length === 1) {
      alert("이미 장바구니에 담긴 상품입니다.");
      return;
    }
    const { _typename, ...newItem } = item;
    basket.push(newItem);

    localStorage.setItem("basket", JSON.stringify(basket));
  };
  useEffect(() => {
    // 로컬스토리지를 찾기 위해 유즈 이펙트를 사용한다
    const baskets = JSON.parse(localStorage.getItem("basket") ?? "[]");
    setBesketItem(baskets);
  }, []);
  return (
    <div>
      {data?.fetchUseditems.map((item: any) => (
        <div key={item._id}>
          <div>{item.name}</div>
          <div>{item.price}</div>
          <button onClick={saveBasket(item)}>장바구니담기</button>
        </div>
      ))}
    </div>
  );
}
