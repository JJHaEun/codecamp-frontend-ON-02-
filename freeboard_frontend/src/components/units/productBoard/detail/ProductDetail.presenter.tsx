import { Modal, Tooltip } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { isOpenDeleteState } from "../../../../commons/libraries/store";
import { getDate } from "../../../commons/utils/utils";
import { IProductDetailUIProps } from "./ProductDetail.types";
import Dompurify from "dompurify";
import * as S from "./ProductDetail.styles";
import Head from "next/head";
import { useEffect } from "react";
declare const window: typeof globalThis & {
  kakao: any;
};
export default function ProductDetailUI(props: IProductDetailUIProps) {
  const router = useRouter();
  const [isOpenDelete] = useRecoilState(isOpenDeleteState);
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=9ecf273b277c32cd53c83567d7c10bb2&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      // 스크립트가 로드가 다 되고
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          center: new window.kakao.maps.LatLng(37.511826, 127.058388), // 지도의 중심좌표.
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(
          props.data?.fetchUseditem.useditemAddress?.address,
          function (result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              const marker = new window.kakao.maps.Marker({
                map,
                position: coords,
              });

              const infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">거래위치</div>',
              });
              infowindow.open(map, marker);

              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, []);
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
      <S.DetailPage>
        <S.SellerAndDate>
          <S.Sales>
            <div>{props.data?.fetchUseditem.seller?.name}</div>
            <S.SellerEmail>
              {props.data?.fetchUseditem.seller?.email}
            </S.SellerEmail>
            <S.Date>Date:{getDate(props.data?.fetchUseditem.createdAt)}</S.Date>
          </S.Sales>
          <div>
            {props.data?.fetchUseditem.useditemAddress && (
              <Tooltip
                placement="topRight"
                color="geekblue"
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                title={`${props.data?.fetchUseditem.useditemAddress?.address}  ${props.data?.fetchUseditem.useditemAddress?.addressDetail}`}
              >
                <S.LocationToggleImg />
              </Tooltip>
            )}
          </div>
        </S.SellerAndDate>
        <div>
          <S.Heart onClick={props.onClickPick} />내 카트
          <span> {props.data?.fetchUseditem.pickedCount}</span>
        </div>
        <div>{props.data?.fetchUseditem.price} ₩</div>
        <div>
          <S.ProductName>{props.data?.fetchUseditem.name}</S.ProductName>
          <S.Contents>
            <div>
              {props.data?.fetchUseditem.images
                ?.filter((el: string) => el)
                .map((el: string) => (
                  <S.ProductImages
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))}
            </div>
            {typeof window !== "undefined" && (
              <S.ContentsText
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    String(props.data?.fetchUseditem.contents)
                  ),
                }}
              ></S.ContentsText>
            )}
          </S.Contents>
          <div id="map" style={{ width: 300, height: 300 }}></div>
          <div>{props.data?.fetchUseditem.useditemAddress?.address}</div>
        </div>
      </S.DetailPage>
      <S.AllButtons>
        <S.Buttons>
          <S.Button onClick={props.onClickMoveToPage(`/market`)}>
            목록으로
          </S.Button>
          <S.Button
            onClick={props.onClickMoveToPage(
              `/market/${String(router.query._id)}/edit`
            )}
          >
            수정하기
          </S.Button>
          <S.Button onClick={props.onClickcheckPermissionDeleteModal}>
            삭제하기
          </S.Button>
        </S.Buttons>
        <S.Button onClick={props.onClickBuy}>구매하기</S.Button>
      </S.AllButtons>
    </>
  );
}
