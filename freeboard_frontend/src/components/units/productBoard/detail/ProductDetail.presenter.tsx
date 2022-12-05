import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { isOpenDeleteState } from "../../../../commons/libraries/store";
import { getDate } from "../../../commons/utils/utils";
import { IProductDetailUIProps } from "./ProductDetail.types";

export default function ProductDetailUI(props: IProductDetailUIProps) {
  const router = useRouter();
  const [isOpenDelete] = useRecoilState(isOpenDeleteState);

  return (
    <>
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
          <div>{props.data?.fetchUseditem.contents}</div>
          <button onClick={props.onClickPick}>pick!!</button>
        </div>{" "}
      </div>
      <div>
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
      </div>
    </>
  );
}
