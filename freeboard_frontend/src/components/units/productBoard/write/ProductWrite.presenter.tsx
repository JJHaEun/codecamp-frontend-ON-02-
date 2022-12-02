import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import { useRecoilState } from "recoil";
import { isEditState, isOpenState } from "../../../../commons/libraries/store";
import Uploads02 from "../../../commons/uploads/02/UploadImg.container";
import { v4 as uuidv4 } from "uuid";
import { IFormData, IProductWriteUIProps } from "./ProductWrite.types";
import InputsPage from "../../../commons/inputs/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./ProductWrite.container";
import TextareaPage from "../../../commons/inputs/textarea";

export default function ProductWriteUI(props: IProductWriteUIProps) {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  const { register, formState, handleSubmit } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  return (
    <>
      {isOpen && (
        <Modal visible={true} onCancel={props.cancelModal}>
          <DaumPostcode onComplete={props.onCompleteAddress} />
        </Modal>
      )}
      <div>
        <h1>상품{isEdit ? "수정" : "등록"}</h1>
        <div>
          <form>
            <div>상품명</div>
            <InputsPage type="text" register={register("name")} />
            <div>{formState.errors.name?.message}</div>
          </form>
          <form>
            <div>상품요약</div>
            <InputsPage type="text" register={register("remarks")} />
            <div>{formState.errors.remarks?.message}</div>
          </form>{" "}
          <form>
            <div>상품 설명</div>
            <TextareaPage register={register("contents")}></TextareaPage>
            <div>{formState.errors.contents?.message}</div>
          </form>
          <form>
            <div>판매가격</div>
            <InputsPage type="text" register={register("price")} />
            <div>{formState.errors.price?.message}</div>
          </form>
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
              onChange={props.onChangeAddressDetail}
              defaultValue={
                props.data?.fetchUseditem.useditemAddress?.addressDetail ?? ""
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
      <form
        onSubmit={
          isEdit
            ? handleSubmit(props.onClickUpdate)
            : handleSubmit(props.onClickSignIn)
        }
      >
        <button
          style={{ background: formState.isValid ? "yellow" : "" }}
          //   onClick={isEdit ? props.onClickUpdate : props.onClickSignIn}
        >
          {isEdit ? "수정하기" : "등록하기"}
        </button>
      </form>
    </>
  );
}
