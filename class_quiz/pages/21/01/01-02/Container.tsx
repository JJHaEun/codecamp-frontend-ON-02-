import Presenter from "./Presenter";

// container 부분
export default function Container() {
  return <>{Presenter({ child: "철수", age: 13 })}</>;
}
