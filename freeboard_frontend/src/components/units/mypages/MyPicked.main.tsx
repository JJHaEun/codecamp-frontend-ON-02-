import { IMyPickedMainProps } from "./Mypage.types";

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
        <div>{props.el.price}</div>
      </div>
    </>
  );
}
