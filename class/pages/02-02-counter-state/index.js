import { useState } from "react";

export default function CounterStatePage() {
  const [count, setCount] = useState(0); //let count =0
  function onClickCountUp() {
    // const count = Number(document.getElementById("count").innerText) + 1;
    // document.getElementById("count").innerText = count;
    setCount(count + 1); //count = count + 1
  }
  function onClickCountDown() {
    // const count = Number(document.getElementById("count").innerText) - 1;
    // document.getElementById("count").innerText = count;
    setCount(count - 1); //count = count - 1
  }
  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
      <button onClick={onClickCountDown}>카운트 내리기!!!</button>
    </>
  );
}
