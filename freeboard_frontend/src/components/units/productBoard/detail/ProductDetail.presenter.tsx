import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { isOpenDeleteState } from "../../../../commons/libraries/store";
import { getDate } from "../../../commons/utils/utils";
import { IProductDetailUIProps } from "./ProductDetail.types";
import Dompurify from "dompurify";
import * as S from "./ProductDetail.styles";
import Head from "next/head";
export default function ProductDetailUI(props: IProductDetailUIProps) {
  const router = useRouter();
  const [isOpenDelete] = useRecoilState(isOpenDeleteState);

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
      {isOpenDelete && (
        <Modal
          title="삭제"
          open={true}
          onOk={props.onClickDelete}
          onCancel={props.handleCancel}
          okText="확인"
          cancelText="취소"
        >
          <div>삭제(확인)</div>
          <div> 취소(취소)</div>
        </Modal>
      )}
      <div>
        <div>
          <div>{props.data?.fetchUseditem.seller?.name}</div>
          <div>Date:{getDate(props.data?.fetchUseditem.createdAt)}</div>
        </div>
        <div>
          <button onClick={props.onClickPick}>pick!!</button>
          <span>{props.data?.fetchUseditem.pickedCount}</span>
        </div>
        <div>
          <h2>{props.data?.fetchUseditem.name}</h2>
          <div>
            {props.data?.fetchUseditem.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <img key={el} src={`https://storage.googleapis.com/${el}`} />
              ))}
          </div>
          {typeof window !== "undefined" && (
            <div
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(
                  String(props.data?.fetchUseditem.contents)
                ),
              }}
            ></div>
          )}{" "}
          <div>{props.data?.fetchUseditem.useditemAddress?.address}</div>
        </div>{" "}
      </div>
      <S.Buttons>
        <button onClick={props.onClickMoveToPage(`/market`)}>목록으로</button>
        <button
          onClick={props.onClickMoveToPage(
            `/market/${String(router.query._id)}/edit`
          )}
        >
          수정하기
        </button>
        <button onClick={props.onClickcheckPermissionDeleteModal}>
          삭제하기
        </button>
        <button onClick={props.onClickBuy}>구매하기</button>
      </S.Buttons>
    </>
  );
}
