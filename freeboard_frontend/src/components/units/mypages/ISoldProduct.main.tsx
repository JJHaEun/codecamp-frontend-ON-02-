import { IISoldMainProps } from "./Mypage.types";
import * as S from "./Mypage.styles";
export default function ISoldMain(props: IISoldMainProps) {
  return (
    <>
      <S.BuyerAndProductName>
        구매자: {props.el.buyer?.name}
      </S.BuyerAndProductName>
      <S.BuyerAndProductName>{props.el.name}</S.BuyerAndProductName>
      <S.BottomLinePrice>{props.el.price} ₩</S.BottomLinePrice>
    </>
  );
}
