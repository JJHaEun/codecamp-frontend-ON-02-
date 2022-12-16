import { IMyPointListMainProps } from "./Mypage.types";
import { BottomLinePrice, StatusPoint } from "./Mypage.styles";
export default function MyPointListMain(props: IMyPointListMainProps) {
  return (
    <>
      <div>{props.el.createdAt}</div>
      <StatusPoint>{props.el.status}</StatusPoint>
      <div>{props.el.amount} p</div>
      <div>{props.el.useditem?.name}</div>
      <BottomLinePrice>잔액: {props.el.balance} p</BottomLinePrice>
    </>
  );
}
