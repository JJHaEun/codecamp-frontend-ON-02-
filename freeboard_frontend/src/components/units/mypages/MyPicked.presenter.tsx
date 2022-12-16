import InfiniteScroll from "react-infinite-scroller";
import { IIPikedPageUIProps } from "./Mypage.types";
import MyPickedMain from "./MyPicked.main";
import {
  ReturnToMyPage,
  MyList,
  MyPageScroll,
  MyPageMyPick,
} from "./Mypage.styles";
export default function IPikedPageUI(props: IIPikedPageUIProps) {
  return (
    <MyPageMyPick>
      <MyList>나의 픽!</MyList>
      <MyPageScroll>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchUseditemsIPicked.map((el) => (
            <MyPickedMain
              key={el._id}
              el={el}
              onClickProductDetail={props.onClickProductDetail}
            />
          ))}
        </InfiniteScroll>
      </MyPageScroll>
      <ReturnToMyPage onClick={props.onClickMyPageMain}>
        목록으로
      </ReturnToMyPage>
    </MyPageMyPick>
  );
}
