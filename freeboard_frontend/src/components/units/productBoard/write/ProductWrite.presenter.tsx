import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import { useRecoilState } from "recoil";
import { isEditState, isOpenState } from "../../../../commons/libraries/store";
import Uploads02 from "../../../commons/uploads/02/UploadImg.container";
import { v4 as uuidv4 } from "uuid";
import { IProductWriteUIProps } from "./ProductWrite.types";
// import InputsPage from "../../../commons/inputs/Input";
// import TextareaPage from "../../../commons/inputs/textarea";
// import ProductButtonPage from "../../../commons/buttons/Productbutton/button";
// import PostSearchButton from "../../../commons/buttons/postSearch/button";
import * as S from "./ProductWrite.styles";
import "react-quill/dist/quill.snow.css";

export default function ProductWriteUI(props: IProductWriteUIProps) {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

  return (
    <>
      {isOpen && (
        <Modal open={true} onCancel={props.cancelModal}>
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
              // register={props.register("name")}

              placeholder="상품명을 적어주세요"
              // readOnly={props.isEdit ? :readOnly}
              onChange={props.onChangeName}
              defaultValue={props.data?.fetchUseditem.name ?? ""}
            />
            <div>{props.nameEmpty}</div>
          </div>
          <div>
            <div>상품요약</div>
            <input
              type="text"
              //  register={props.register("remarks")}
              placeholder="상품 요약정보를 작성해주세요."
              onChange={props.onChangeRemarks}
              defaultValue={props.data?.fetchUseditem.remarks}
            />
            <div>{props.remarksEmpty}</div>
          </div>{" "}
          <div>
            <div>상품 설명</div>
            <S.ReactQuillTextarea
              // register={props.register("contents")}
              modules={props.modules}
              formats={props.formats}
              placeholder="내용을 작성해주세요."
              onChange={props.onChangeContents}
              defaultValue={props.data?.fetchUseditem.contents}
            ></S.ReactQuillTextarea>
            <div>{props.contentsEmpty}</div>
          </div>
          <div>
            <div>판매가격</div>
            <input
              type="text"
              // register={props.register("price")}
              placeholder="가격을 입력해주세요"
              onChange={props.onChangePrice}
              defaultValue={props.data?.fetchUseditem.price ?? ""}
            />
            <div>{props.priceEmpty}</div>
          </div>
          {/* <div> */}
          {/* <div>태그</div>
            {/* <input type="text" {...props.register} placeholder="#태그 #태그" /> */}
          {/* {props.tags.map((el, index) => (
             <input */}
          {/* // type="text"
                // {...props.register}
                // placeholder="#태그 #태그"
                // key={uuidv4()}
                // index={index}
                // tag={el}
                //   onChangeTags={props.onChangeTags}
            //   />
            // ))} */}
          {/* </div> */}
          <div>
            <div>거래위치</div>
            {/* 위치 이미지? */}

            <div>
              <div>주소</div>
              <input
                // type="text"
                // register={props.register("useditemAddress.zipcode")}
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
                // type="text"
                // register={props.register("useditemAddress.address")}
                type="text"
                placeholder="주소"
                readOnly
                value={
                  props.address ||
                  (props.data?.fetchUseditem.useditemAddress?.address ?? "")
                }
              />
              <input
                // type="text"
                // register={props.register("useditemAddress.addressDetail")}
                type="text"
                placeholder="상세주소"
                onChange={props.onChangeAddressDetail}
                defaultValue={
                  props.data?.fetchUseditem.useditemAddress?.addressDetail ?? ""
                }
              />
            </div>
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

        <div>
          <S.Button
            isActive={isEdit ? true : props.bt}
            // handleSubmit={props.handleSubmit}
            // style={{ background: props.formState.isValid ? "yellow" : "" }}
            onClick={isEdit ? props.onClickUpdate : props.onClickSignIn}
          >
            {isEdit ? "수정하기" : "등록하기"}
          </S.Button>
        </div>
      </div>
    </>
  );
}
