import Head from "next/head";
import { ChangeEvent, useState } from "react";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  const [state, setState] = useState("");

  const onChangeRadio = (event: ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };
  console.log(state);
  const onClickCharge = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp40037636"); // Example: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card", // card,vbank 등 결제수단
        // merchant_uid: "ORD20180131-0000011",// 상품아이디. 이부분을 주석처리하거나 작성하지 않으면 nobody로 만들어짐.자동으로 단, 중복될 시 결제안됨.
        name: "노르웨이 회전 의자",
        amount: state, // 가격
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/28/payment/complete", // 모바일의 경우에 결제후 돌아올 페이지 . 이유:모바일에서는결제시 결제페이지로 사이트가 이동되기에 다시 어딘가로 돌아와야함.
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          // 벡엔드에 결제관련 데이터 넘겨주기.즉 , 뮤테이션실행하기
          // createPointTransactionOfLoading
        } else {
          alert("결제에 실패했습니다.다시 시도해주세요");
        }
      }
    );
  };

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
      <input type="radio" value="500" name="가격" onChange={onChangeRadio} />
      <span>500원</span>
      <input type="radio" value="1000" name="가격" onChange={onChangeRadio} />
      <span>1000원</span>
      <input type="radio" value="2000" name="가격" onChange={onChangeRadio} />
      <span>2000원</span>
      <input type="radio" value="5000" name="가격" onChange={onChangeRadio} />
      <span>5000원</span>
      <button onClick={onClickCharge}>충전하기</button>
    </>
  );
}
