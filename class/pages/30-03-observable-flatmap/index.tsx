// import { Observable } from "@apollo/client"
import { from } from "zen-observable";
export default function ObservarbleFlatMapPage() {
  const onClickButton = () => {
    // new Promise(()=>{})// 자바스크립트에서 제공되고있음
    // new Observable(()=>{ })// 아폴로 클라이언트가 사용하는 zen-observarble을 아폴로에서 import 하여 사용
    // prettier-ignore
    from(["1번 useQuery", "2번 useQuery", "3번 useQuery"]) // fromPromise와 같은말
    .flatMap((el:string) =>from([`${el} 결과에 qqq적용`,`${el} 결과에 zzz적용`]))
    .subscribe((el)=>console.log(el)) // 최종 실행해줘
  };

  return <button onClick={onClickButton}>클릭</button>;
}
