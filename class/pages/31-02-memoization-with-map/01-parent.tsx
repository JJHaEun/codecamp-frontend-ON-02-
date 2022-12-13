import { useState } from "react";
import Word from "./02-child";
import { v4 as uuidv4 } from "uuid";
export default function MemoizationParentPage() {
  const [data, setData] = useState("철수는 오늘 점심을 맛있게 먹었습니다");

  const onClickChange = () => {
    setData("영희는 오늘 저녁을 맛없게 먹었습니다");
  };

  return (
    // 공백을 기준으로 split
    <>
      {/* {data.split(" ").map((el, index) => (
        <Word key={index} el={el} /> // 1. memo적용시 key 또는 el이 변경된 부분만 리랜더링됨. 즉, ("오늘", "먹었습니다" 는 제외)
      ))} */}
      {data.split(" ").map((el, index) => (
        <Word key={uuidv4()} el={el} /> // 2. 키가 매번바뀌어 props로 넘어가므로 모두 리랜더링됨(디펜더시어레이가 매번변경됨). 그래서 memo를 적용해도 소용없음.
      ))}
      <button onClick={onClickChange}>체인지</button>
      {/*  버튼클릭시 단어 체인지 */}
    </>
  );
}
