import { getDate } from "../../../commons/utils/utils";
import { IProductListMainUIProps } from "./ProductsList.types";
import { v4 as uuidv4 } from "uuid";
import * as S from "./ProductsList.styles";

export default function ProductListMainUI(props: IProductListMainUIProps) {
  return (
    <>
      <S.AllLine key={props.el._id}>
        <S.ListSetting>
          <div>
            {props.el.images
              ?.filter((el: string) => el)
              .map((el: string, index: number) => (
                <S.ImgList
                  key={index}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </div>
          <div>
            <S.ClicksDetail
              onClick={props.onClickProductDetail}
              id={props.el._id}
            >
              {props.el?.name
                .replaceAll(props.keyword, `$%@#$%${props.keyword}$%@#$%`)
                .split("$%@#$%")
                .map((el: string) => (
                  <S.TextToken key={uuidv4()} isMatch={props.keyword === el}>
                    {el}
                  </S.TextToken>
                ))}
            </S.ClicksDetail>
            <S.ClicksDetail
              onClick={props.onClickProductDetail}
              id={props.el._id}
            >
              {props.el?.remarks}
            </S.ClicksDetail>
            <div>{props.el.price} ₩</div>
            <div onClick={props.onClickProductDetail} id={props.el._id}>
              {getDate(props.el?.createdAt)}
            </div>
          </div>
          <div>{props.el.buyer?.name ?? ""}</div>
          <S.SellerName>{props.el?.seller?.name}</S.SellerName>
        </S.ListSetting>
        <S.PickCount>
          <div>
            <S.PickIcon />
            {props.el?.pickedCount}
          </div>
        </S.PickCount>
      </S.AllLine>
    </>
  );
}
