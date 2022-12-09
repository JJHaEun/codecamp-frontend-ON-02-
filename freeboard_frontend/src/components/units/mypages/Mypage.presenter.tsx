import Head from "next/head";
import { IMypageUIProps } from "./Mypage.types";

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
      <div>
        보유포인트:{" "}
        <div>{props.data?.fetchUserLoggedIn.userPoint?.amount ?? 0}</div>
      </div>
      <input
        type="radio"
        value="1000"
        name="가격"
        onChange={props.onChangeRadio}
      />
      <span>1000원</span>
      <input
        type="radio"
        value="5000"
        name="가격"
        onChange={props.onChangeRadio}
      />
      <span>5000원</span>
      <input
        type="radio"
        value="10000"
        name="가격"
        onChange={props.onChangeRadio}
      />
      <span>10000원</span>
      <input
        type="radio"
        value="50000"
        name="가격"
        onChange={props.onChangeRadio}
      />
      <span>50000원</span>
      <button onClick={props.onClickCharge}>충전하기</button>
    </>
  );
}
