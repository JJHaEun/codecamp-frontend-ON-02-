import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  const onClickButton = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    void router.push("/");
  };
  // 1.useEffect 특징.겹치는것 하나로 합치기 가능. 위치 상관없음.  저 위에써도되고, 여기아래써도되고....

  useEffect(() => {
    console.log("컴포넌트가 마운트됐습니다~");

    return () => {
      alert("컴포넌트가 제거됩니다~");
    };
  }, []);

  useEffect(() => {
    console.log("컴포넌트가 변경됐습니다~");
  });

  console.log("마운트 시작");
  return (
    <>
      <div>카운트: {count}</div>
      <button onClick={onClickButton}>카운트(+1)</button>
      <button onClick={onClickMove}>이동하기</button>
    </>
  );
}
