import { IIBoughtMainProps } from "./Mypage.types";

export default function IBoughtMain(props: IIBoughtMainProps) {
  return (
    <div>
      <div>{props.el.seller?.name}</div>
      <div>{props.el.name}</div>
      <div>{props.el.price}</div>
    </div>
  );
}
