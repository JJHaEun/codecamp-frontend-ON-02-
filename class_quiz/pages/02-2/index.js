// import { useState } from "react";

export default function Quiz0202() {
  //   const [count, setCount] = useState(0);
  function onClickBtUp() {
    // setCount(count + 1);
    const count = Number(document.getElementById("countNumber").innerText) + 1;
    document.getElementById("countNumber").innerText = count;
  }

  return (
    // <>
    //   <div>{count}</div>
    //   <button onClick={onClickBtUp}>카운트 증가</button>
    // </>
    <>
      <div id="countNumber">0</div>
      <button onClick={onClickBtUp}>카운트 증가</button>
    </>
  );
}
