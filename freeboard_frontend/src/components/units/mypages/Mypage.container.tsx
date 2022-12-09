import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IQuery,
} from "../../../commons/types/generated/types";
import { useAuth } from "../../commons/hooks/useAuth";
import { FETCH_USER_LOGGED_IN } from "../../commons/login-sucess/01/LoginSuccess.queries";
import MypageUI from "./Mypage.presenter";
import { CREATE_POINT_TRANSACTION_OF_LOADING } from "./Mypage.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function MyPage() {
  useAuth();
  const [point, setPoint] = useState("");

  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const onChangeRadio = (event: ChangeEvent<HTMLInputElement>) => {
    setPoint(event.target.value);
  };
  console.log(point);
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
        name: "포인트 충전",
        amount: point, // 가격
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        // buyer_tel: "010-4242-4242",
        // buyer_addr: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/mypage", // 모바일의 경우에 결제후 돌아올 페이지 . 이유:모바일에서는결제시 결제페이지로 사이트가 이동되기에 다시 어딘가로 돌아와야함.
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          // 벡엔드에 결제관련 데이터 넘겨주기.즉 , 뮤테이션실행하기
          // createPointTransactionOfLoading
          const result = await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          console.log(result);
        } else {
          alert("결제에 실패했습니다.다시 시도해주세요");
        }
      }
    );
  };

  return (
    <>
      <MypageUI
        onChangeRadio={onChangeRadio}
        onClickCharge={onClickCharge}
        data={data}
      />
    </>
  );
}
