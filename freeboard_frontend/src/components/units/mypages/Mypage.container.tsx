import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IQuery,
} from "../../../commons/types/generated/types";
import { useAuth } from "../../commons/hooks/useAuth";
import { FETCH_USER_LOGGED_IN } from "../../commons/login-sucess/01/LoginSuccess.queries";
import MypageUI from "./Mypage.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING,
  FETCH_USED_ITEMS_COUNT_IBOUGHT,
  FETCH_USED_ITEMS_COUNT_IPICKED,
  FETCH_USED_ITEMS_COUNT_I_SOLD,
  LOG_OUT_USER,
  // LOG_OUT_USER,
} from "./Mypage.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function MyPage() {
  useAuth();

  const router = useRouter();
  const [point, setPoint] = useState("");
  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);
  const [logoutUser] = useMutation(LOG_OUT_USER);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const { data: CountIPick } = useQuery<
    Pick<IQuery, "fetchUseditemsCountIPicked">
  >(FETCH_USED_ITEMS_COUNT_IPICKED);

  const { data: IBought } = useQuery<
    Pick<IQuery, "fetchUseditemsCountIBought">
  >(FETCH_USED_ITEMS_COUNT_IBOUGHT);

  const { data: ISold } = useQuery<Pick<IQuery, "fetchUseditemsCountISold">>(
    FETCH_USED_ITEMS_COUNT_I_SOLD
  );
  const { data: MyPointList } = useQuery<
    Pick<IQuery, "fetchPointTransactionsCountOfLoading">
  >(FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING);

  const onChangeRadio = (event: ChangeEvent<HTMLInputElement>) => {
    setPoint(event.target.value);
  };
  console.log(data?.fetchUserLoggedIn);
  const onClickCharge = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000 imp49910675
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card", // card,vbank 등 결제수단
        // merchant_uid: "ORD20180131-0000011",// 상품아이디. 이부분을 주석처리하면 nobody로 만들어짐.자동으로. 직접작성해도됨 단, 중복될 시 결제안됨.
        name: "포인트 충전",
        amount: point, // 가격
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        // buyer_addr: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/mypage", // 모바일의 경우에 결제후 돌아올 페이지 . 이유:모바일에서는결제시 결제페이지로 사이트가 이동되기에 다시 어딘가로 돌아와야함.
      },
      async (rsp: any) => {
        // callback
        console.log(rsp);
        if (rsp.success) {
          // 결제 성공 시 로직,

          // 벡엔드에 결제관련 데이터 넘겨주기.즉 , 뮤테이션실행하기
          // createPointTransactionOfLoading
          try {
            const result = await createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
              update(cache) {
                cache.modify({
                  fields: () => {},
                });
              },
            });
            console.log(result);

            Modal.success({ content: "포인트가 충전되었습니다" });
          } catch (error) {
            Modal.error({ content: "알수 없는 에러입니다" });
          }
        } else {
          Modal.error({ content: "결제에 실패했습니다.다시 시도해주세요" });
        }
      }
    );
  };

  const onClickMyPick = () => {
    void router.push(`/market/IPicked`);
  };

  const onClickIBought = () => {
    void router.push(`/market/IBought`);
  };

  const onClickISold = () => {
    void router.push(`/market/ISold`);
  };
  const onClickMyPointList = () => {
    void router.push(`/market/MyPointList`);
  };

  const onClickLogOut = async () => {
    await logoutUser();
    localStorage.removeItem("accessToken");
    router.reload();
    Modal.success({ content: "성공적으로 로그아웃 되었습니다" });
  };

  //   const onClickLogOut = async()=>{
  //     try{
  // const result2 = await logoutUser({
  //   logoutUser:true
  // })
  // if(result2){
  //   localStorage.removeItem("accessToken")
  //  void router.push()
  // }
  //     }catch{

  //     }
  //   }
  return (
    <>
      <MypageUI
        onChangeRadio={onChangeRadio}
        onClickCharge={onClickCharge}
        data={data}
        onClickMyPick={onClickMyPick}
        CountIPick={CountIPick}
        IBought={IBought}
        onClickIBought={onClickIBought}
        ISold={ISold}
        onClickISold={onClickISold}
        onClickLogOut={onClickLogOut}
        MyPointList={MyPointList}
        onClickMyPointList={onClickMyPointList}
      />
    </>
  );
}
