import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import { useRecoilState } from "recoil";
import { isEditState, isOpenState } from "../../../../commons/libraries/store";
import Uploads02 from "../../../commons/uploads/02/UploadImg.container";
import { v4 as uuidv4 } from "uuid";
import { IProductWriteUIProps } from "./ProductWrite.types";

export default function ProductWriteUI(props: IProductWriteUIProps) {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  return (
    <>
      {isOpen && (
        <Modal visible={true}>
          <DaumPostcode onComplete={props.onCompleteAddress} />
        </Modal>
      )}
      <div>
        <h1>상품{isEdit ? "수정" : "등록"}</h1>
        <div>
          <div>
            <div>상품명</div>
            <input
              type="text"
              {...props.register}
              placeholder="상품을 입력해주세요"
            />
          </div>
          <div>
            <div>상품요약</div>
            <input type="text" {...props.register} />
          </div>{" "}
          <div>
            <div>상품 설명</div>
            <textarea placeholder="내용을 작성해주세요"></textarea>
          </div>
          <div>
            <div>태그</div>
            <input type="text" {...props.register} placeholder="#태그 #태그" />
          </div>
          <div>
            <div>거래위치</div>
            {/* 위치 이미지? */}
            <div>주소</div>
            <input
              type="text"
              placeholder="우편번호"
              readOnly
              value={
                props.zipcode ||
                (props.data?.fetchUseditem.useditemAddress?.zipcode ?? "")
              }
            />
            <button onClick={props.onClickAddress}>우편번호검색</button>
            <input
              type="text"
              placeholder="주소"
              readOnly
              value={
                props.address ||
                (props.data?.fetchUseditem.useditemAddress?.address ?? "")
              }
            />
            <input
              type="text"
              placeholder="상세주소"
              {...props.register}
              value={
                props.address ||
                (props.data?.fetchUseditem.useditemAddress?.addressDetail ?? "")
              }
            />
          </div>
          <div>
            <div>사진첨부</div>
            <div>
              {props.imageUrls.map((el, index) => (
                <Uploads02
                  key={uuidv4()}
                  index={index}
                  imageUrl={el}
                  onChangeImgUrls={props.onChangeImgUrls}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <button
        style={{ background: props.formState.isValid ? "yellow" : "" }}
        onClick={isEdit ? props.onClickUpdate : props.onClickSignIn}
      >
        {isEdit ? "수정하기" : "등록하기"}
      </button>
    </>
  );
}
