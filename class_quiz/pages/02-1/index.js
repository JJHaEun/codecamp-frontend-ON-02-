import { useState } from "react";

export default function Quiz0201() {
  const [clickBt, setClickBt] = useState("안녕하세요");
  function onclickBt(event) {
    // document.getElementById("bt").innerText = "반갑습니다";
    setClickBt((event.target.value = "반갑습니다"));
  }
  return (
    // <>
    //   <button onClick={onclickBt} id="bt">
    //     안녕하세요
    //   </button>
    // </>
    <>
      <button onClick={onclickBt}>{clickBt}</button>
    </>
  );
}
