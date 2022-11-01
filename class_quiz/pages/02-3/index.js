// import { useState } from "react";

export default function Quiz0203() {
  //   const [RnNumber, setRnNumber] = useState("000000");

  function randomN() {
    document.getElementById("rn").innerText = String(
      Math.floor(Math.random() * 1000000)
    ).padStart(6, "0");
    // setRnNumber(Rn);
  }
  return (
    // <>
    //   <div>{RnNumber}</div>
    //   <button onClick={randomN}>인증번호전송</button>
    // </>
    <>
      <div id="rn">000000</div>
      <button onClick={randomN}>인증번호전송</button>
    </>
  );
}
