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
import { useEffect } from "react";
// import Head from "next/head";
declare const window: typeof globalThis & {
  kakao: any;
};
export default function ProductWriteUI(props: IProductWriteUIProps) {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=9ecf273b277c32cd53c83567d7c10bb2&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.511826, 127.058388), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        // map의 빨간줄 없애기위해 한번 사용함
        console.log(map);
        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();
        // 마커를 미리 생성
        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(37.511826, 127.058388),
          map,
        });
        console.log(marker.position);
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          props.data?.fetchUseditem.useditemAddress?.zipcode,
          props.data?.fetchUseditem.useditemAddress?.address,
          props.data?.fetchUseditem.useditemAddress?.addressDetail,
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            console.log(result);
            if (status === window.kakao.maps.services.Status.OK()) {
              console.log(status);
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );
              console.log(coords.getLat);
              // 지도를 보여준다.
              // container.style.display = "block";
              map.relayout();
              // 지도 중심을 변경한다.
              map.setCenter(coords);
              // 마커를 결과값으로 받은 위치로 옮긴다.
              marker.setPosition(coords);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
          // window.kakao.maps.services.AnalyzeType.ANALYZE_TYPE
        );
      });
    };
  }, []);
  return (
    <>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9ecf273b277c32cd53c83567d7c10bb2&libraries=services,clusterer,drawing"
        ></script>
      </Head> */}
      {isOpen && (
        <Modal open={true} onCancel={props.cancelModal}>
          <DaumPostcode onComplete={props.onCompleteAddress} />
        </Modal>
      )}
      <S.Main>
        <S.MainTitle>상품{isEdit ? "수정" : "등록"}</S.MainTitle>
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
            <div id="map" style={{ width: 300, height: 300 }}></div>
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
            <S.Photo>
              {props.imageUrls.map((el, index) => (
                <Uploads02
                  key={uuidv4()}
                  index={index}
                  imageUrl={el}
                  onChangeImgUrls={props.onChangeImgUrls}
                />
              ))}
            </S.Photo>
          </div>
        </div>

        <S.Buttons>
          <S.Button
            isActive={isEdit ? true : props.bt}
            // handleSubmit={props.handleSubmit}
            // style={{ background: props.formState.isValid ? "yellow" : "" }}
            onClick={isEdit ? props.onClickUpdate : props.onClickSignIn}
          >
            {isEdit ? "수정하기" : "등록하기"}
          </S.Button>
          <S.MoveList onClick={props.onClickMoveToPage(`/market`)}>
            목록으로
          </S.MoveList>
        </S.Buttons>
      </S.Main>
    </>
  );
}
