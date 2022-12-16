import { BottomLinePrice, SellerAndProductName } from "./Mypage.styles";
import { IIBoughtMainProps } from "./Mypage.types";

export default function IBoughtMain(props: IIBoughtMainProps) {
  return (
    <div>
      <SellerAndProductName>{props.el.seller?.name}</SellerAndProductName>
      <SellerAndProductName>{props.el.name}</SellerAndProductName>
      <BottomLinePrice>{props.el.price} ₩</BottomLinePrice>
    </div>
  );
}
