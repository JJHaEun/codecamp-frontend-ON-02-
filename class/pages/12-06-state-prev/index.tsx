import { useState } from "react";

export default function CounterStatePage() {
  const [count, setCount] = useState(0); // let count =0
  function onClickCountUp() {
    // const count = Number(document.getElementById("count").innerText) + 1;
    // document.getElementById("count").innerText = count;
    setCount((prevState) => prevState + 1); // 임시저장공간에가서 prev 가지고옴. 없으면 실제 count 가져옴, 그다음 아래로.
    //  setCount((prev) => prev + 1);
    setCount((prev) => prev + 1); // 임시 저장공간에 prev에 현제 위의 1 들어왔으니 가지고와 계산.
    setCount((prevState) => prevState + 1); // prev에서 위의 값2가 들어있으니 가지고와 계산
    setCount((prevState) => prevState + 1); // prev에 3들어오고 최종적으로 4들어옴. 최종적으로 state가 4로 바뀌어 리렌더링 됨.
    // 따라서 총 4씩 올라감.
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
    </>
  );
}
