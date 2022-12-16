import InfiniteScroll from "react-infinite-scroller";
import ISoldMain from "./ISoldProduct.main";
import { IISoldUIProps } from "./Mypage.types";
import {
  MyList,
  MyPageISold,
  MyPageScroll,
  ReturnToMyPage,
} from "./Mypage.styles";
export default function ISoldProductsUI(props: IISoldUIProps) {
  return (
    <MyPageISold>
      <MyList>내 판매내역</MyList>
      <MyPageScroll>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchUseditemsISold.map((el) => (
            <ISoldMain key={el._id} el={el} />
          ))}
        </InfiniteScroll>
      </MyPageScroll>
      <ReturnToMyPage onClick={props.onClickMyPageMain}>
        목록으로
      </ReturnToMyPage>
    </MyPageISold>
  );
}
