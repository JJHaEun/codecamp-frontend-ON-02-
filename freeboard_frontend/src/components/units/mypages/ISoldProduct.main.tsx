import { IISoldMainProps } from "./Mypage.types";

export default function ISoldMain(props: IISoldMainProps) {
  return (
    <div>
      <div>구매자: {props.el.buyer?.name}</div>
      <div>{props.el.name}</div>
      <div>{props.el.price}</div>
      <div>=================</div>
    </div>
  );
}
