import { useState } from "react";

export default function CounterStatePage() {
  const [count, setCount] = useState(0); //let count =0
  function onClickCountUp() {
    setCount((prev) => prev + 1); //count = count + 1
  }

  return (
    <>
      <div role="count">{count}</div>
      <button role="count-button" onClick={onClickCountUp}>
        카운트 올리기!!!
      </button>
    </>
  );
}
