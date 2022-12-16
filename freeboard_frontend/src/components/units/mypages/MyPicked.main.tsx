import { IMyPickedMainProps } from "./Mypage.types";
import { BottomLinePrice } from "./Mypage.styles";
export default function MyPickedMain(props: IMyPickedMainProps) {
  return (
    <>
      <div key={props.el._id}>
        <div onClick={props.onClickProductDetail} id={props.el._id}>
          {props.el.name}
        </div>
        <div onClick={props.onClickProductDetail} id={props.el._id}>
          {props.el.remarks}
        </div>
        <div>{props.el.seller?.name}</div>
        <BottomLinePrice>{props.el.price}</BottomLinePrice>
      </div>
    </>
  );
}
