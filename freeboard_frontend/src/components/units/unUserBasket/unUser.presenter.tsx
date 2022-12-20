import { ShoppingCartOutlined } from "@ant-design/icons";
import * as S from "./unUser.styles";
import InfiniteScroll from "react-infinite-scroller";
import { IUnUserBasketPageUIProps } from "./unUser.types";

export default function UnUserBasketPageUI(props: IUnUserBasketPageUIProps) {
  return (
    <S.All>
      <S.Scroll>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchUseditems.map((el: any) => (
            <S.BorderLine key={el._id}>
              <S.ClicksDetail onClick={props.onClickProductDetail}>
                {el.name}
              </S.ClicksDetail>
              <div>{el.price} ₩</div>
              <S.ClickBasket onClick={props.onClickBasket(el)}>
                <ShoppingCartOutlined />
                담기
              </S.ClickBasket>
            </S.BorderLine>
          ))}
        </InfiniteScroll>
      </S.Scroll>
    </S.All>
  );
}
