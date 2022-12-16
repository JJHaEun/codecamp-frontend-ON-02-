import InfiniteScroll from "react-infinite-scroller";
import {
  MyList,
  MyPageISold,
  MyPageScroll,
  ReturnToMyPage,
} from "./Mypage.styles";
import { IMyPointListUIProps } from "./Mypage.types";
import MyPointListMain from "./MyPointList.main";
export default function MyPointListUI(props: IMyPointListUIProps) {
  return (
    <MyPageISold>
      <MyList>내 포인트 내역</MyList>
      <MyPageScroll>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchPointTransactions.map((el) => (
            <MyPointListMain key={el._id} el={el} />
          ))}
        </InfiniteScroll>
      </MyPageScroll>
      <ReturnToMyPage onClick={props.onClickMyPageMain}>
        목록으로
      </ReturnToMyPage>
    </MyPageISold>
  );
}
