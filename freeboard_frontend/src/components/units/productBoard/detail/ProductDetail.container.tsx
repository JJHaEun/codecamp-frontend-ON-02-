import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
// import { FETCH_USED_ITEMS } from "../../../../../pages/unUserBasket";
import { isOpenDeleteState } from "../../../../commons/libraries/store";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../commons/hooks/useMoToPage";
import { FETCH_USED_ITEMS } from "../list/ProductsList.queries";
import { FETCH_USED_ITEM } from "../write/ProductWrite.queries";
import ProductDetailUI from "./ProductDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
} from "./ProductDetail.queries";
declare const window: typeof globalThis & {
  IMP: any;
};
export default function ProductDetail() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const [isOpenDelete, setIsOpenDelete] = useRecoilState(isOpenDeleteState);
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query._id),
    },
  });
  // console.log(data?.fetchUserLoggedIn?.email ?? "");
  console.log(String(router.query._id));
  const onClickPick = async () => {
    // if (typeof router.query._id !== "string") return;

    await toggleUseditemPick({
      variables: {
        useditemId: router.query._id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId: router.query._id },
        },
      ],
    });
    console.log(data?.fetchUseditem.pickedCount);
  };
  const onClickDelete = async () => {
    if (typeof router.query._id !== "string") return;
    try {
      await deleteUseditem({
        variables: {
          useditemId: router.query._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS,
            variables: { useditemId: router.query._id },
          },
        ],
      });

      Modal.success({ content: "삭제가 완료되었습니다" });
      void router.push(`/market`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickcheckPermissionDeleteModal = () => {
    if (!localStorage.getItem("accessToken")) {
      Modal.info({ content: "권한이 없습니다" });
      void router.push("/market");
      return;
    }
    setIsOpenDelete(true);
  };

  const handleCancel = () => {
    if (typeof router.query._id !== "string") return;
    setIsOpenDelete(false);
    void router.push(`/market/${router.query._id}`);
  };
  const onClickBuy = () => {
    if (!localStorage.getItem("accessToken")) {
      Modal.info({ content: "로그인 후 이용 가능합니다" });
      void router.push("/login");
      return;
    }

    console.log(data?.fetchUseditem.buyer);

    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: data?.fetchUseditem.buyer?.userPoint?.amount,
        // merchant_uid: "ORD20180131-0000011",
        name: data?.fetchUseditem.name,
        amount: data?.fetchUseditem.price,
        buyer_email: data?.fetchUseditem.buyer?.email,
        buyer_name: data?.fetchUseditem.buyer?.name,
        buyer_tel: "010-4242-4242",
        // buyer_addr: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/mypage", // 모바일의 경우에 결제후 돌아올 페이지 . 이유:모바일에서는결제시 결제페이지로 사이트가 이동되기에 다시 어딘가로 돌아와야함.
      },
      async (rsp: any) => {
        // callback
        if (typeof router.query._id !== "string") return;

        if (rsp.success) {
          // 결제 성공 시 로직,
          try {
            const result = await createPointTransactionOfBuyingAndSelling({
              variables: {
                useritemId: router.query._id,
              },
              refetchQueries: [
                {
                  query: FETCH_USED_ITEMS,
                  variables: { isSoldOut: true },
                },
              ],
            });
            console.log(result);
          } catch (error) {
            Modal.error({ content: "알수 없는 에러입니다" });
          }
        } else {
          Modal.error({ content: "결제에 실패했습니다.다시 시도해주세요" });
        }
      }
    );
  };

  return (
    <>
      <ProductDetailUI
        data={data}
        onClickMoveToPage={onClickMoveToPage}
        onClickPick={onClickPick}
        onClickDelete={onClickDelete}
        onClickcheckPermissionDeleteModal={onClickcheckPermissionDeleteModal}
        handleCancel={handleCancel}
        isOpenDelete={isOpenDelete}
        onClickBuy={onClickBuy}
      />
    </>
  );
}
