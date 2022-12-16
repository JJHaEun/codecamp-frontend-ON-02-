import Head from "next/head";

import { IMypageUIProps } from "./Mypage.types";
import * as S from "./Mypage.styles";
import { ShoppingCartOutlined, ShoppingOutlined } from "@ant-design/icons";

export default function MypageUI(props: IMypageUIProps) {
  return (
    <>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <S.MyPage>
        <div>
          <S.PointIcon />:
          <S.MyPoint>
            {" "}
            {props.data?.fetchUserLoggedIn.userPoint?.amount ?? 0} P
          </S.MyPoint>
        </div>
        <div>
          <input
            type="radio"
            value="100"
            name="가격"
            onChange={props.onChangeRadio}
          />
          <S.ChargePoint>100원</S.ChargePoint>
          <input
            type="radio"
            value="500"
            name="가격"
            onChange={props.onChangeRadio}
          />
          <S.ChargePoint>500원</S.ChargePoint>
          <input
            type="radio"
            value="1000"
            name="가격"
            onChange={props.onChangeRadio}
          />
          <S.ChargePoint>1000원</S.ChargePoint>
          <input
            type="radio"
            value="5000"
            name="가격"
            onChange={props.onChangeRadio}
          />
          <S.ChargePoint>5000원</S.ChargePoint>
          <input
            type="radio"
            value="10000"
            name="가격"
            onChange={props.onChangeRadio}
          />
          <S.ChargePoint>10000원</S.ChargePoint>
          <input
            type="radio"
            value="50000"
            name="가격"
            onChange={props.onChangeRadio}
          />
          <S.ChargePoint>50000원</S.ChargePoint>

          <S.ChargeButton onClick={props.onClickCharge}>
            <S.Charge onClick={props.onClickCharge} />
            충전하기
          </S.ChargeButton>
        </div>
        <S.Line>
          <S.BottomLine>
            <S.MyList>내 장바구니</S.MyList>
            <span>개수: {props.CountIPick?.fetchUseditemsCountIPicked} </span>
            <S.GoTo onClick={props.onClickMyPick}>
              내 장바구니 <ShoppingCartOutlined />
            </S.GoTo>
          </S.BottomLine>
          <S.BottomLine>
            <S.MyList>내 구매내역</S.MyList>
            <span>
              구매횟수 총 : {props.IBought?.fetchUseditemsCountIBought}{" "}
            </span>
            <S.GoTo onClick={props.onClickIBought}>
              구매내역 <ShoppingOutlined />
            </S.GoTo>
          </S.BottomLine>
          <S.BottomLine>
            <S.MyList>내 판매내역</S.MyList>
            <span>판매물품개수 : {props.ISold?.fetchUseditemsCountISold} </span>
            <S.GoTo onClick={props.onClickISold}>판매내역보기</S.GoTo>
          </S.BottomLine>
          <S.BottomLine>
            <S.MyList>내 포인트 내역</S.MyList>
            <span>
              내 포인트 충전 횟수:
              {props.MyPointList?.fetchPointTransactionsCountOfLoading}
            </span>
            <S.GoTo onClick={props.onClickMyPointList}> 포인트 사용내역</S.GoTo>
          </S.BottomLine>
        </S.Line>
        <S.MyPageLogOut onClick={props.onClickLogOut}>로그아웃</S.MyPageLogOut>
      </S.MyPage>
    </>
  );
}
