import { useCallback, useMemo, useState } from "react";
import MemoizationChildPage from "./02-children";

export default function MemoizationPage() {
  let countUp = useMemo(() => 0, []);

  const [count, setCount] = useState(0);

  const onClickLet = useCallback(() => {
    console.log(countUp + 1);
    countUp++;
  }, []);
  // 8번:   const onClickState = useCallback(() => {
  //     console.log(count + 1);
  //     setCount((prev) => prev + 1);
  //   }, []);

  //   const onClickState = useMemo(
  //     () => () => {
  //       console.log(count + 1);
  //       setCount((prev) => prev + 1);
  //     },
  //     []
  //   );
  return (
    <>
      <div>====================</div>
      <h1>부모 컴포넌트</h1>
      <div>카운트(let): {countUp}</div>
      <button onClick={onClickLet}>카운트 업(let)</button>
      <div>카운트(state): {count}</div>
      <button
        onClick={useCallback(() => {
          console.log(count + 1);
          setCount((prev) => prev + 1);
        }, [])}
      >
        카운트 업(state)
      </button>
      <div>=====================</div>
      <MemoizationChildPage />
    </>
  );
}
