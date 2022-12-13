import { useCallback, useMemo, useState } from "react";
import MemoizationChildPage from "./02-child";

export default function MemoizationParentPage() {
  console.log("부모가 랜더링 됩니다");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // 1. useMemo로 변수 기억하기
  const aaa = useMemo(() => Math.random(), []); // Math.random() 를  만들어 기록. 다름 랜더링시 새롭게 안만들고 기록한것 가져다씀
  // 한번 저장해놓고 그것 계속 재사용
  //  const aaa = useMemo(() => Math.random(), [countState]) ==> countState가 바뀔때마다 저장된것 바뀜

  console.log(aaa);

  // 2. useCallBack으로 함수기억
  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1; // countLet = countLet + 1
  }, []);

  // 3. useCallback 사용시 주의 사항==> state사용 주의(prev를 사용할것)
  //   const onClickCountState = useCallback(() => {
  //     // 함수 전체는 useCallback으로 저장되어있음,
  //     // console.log(countState + 1);
  //     setCountState((prev) => prev + 1); // 실행결과 그때마다 바뀌어 적용됨
  //   }, []);

  // 4. useMemo로 함수 저장해보기. 함수를 가지는 변수를 저장(나만의 useCallback만들기)// 이렇게는 사용별로 안함. 함수는 useCallback사용
  const onClickCountState = useMemo(
    () => () => {
      setCountState((prev) => prev + 1);
    },
    []
  );

  return (
    <>
      <div>=======================</div>
      <h1>저는 부모컴포넌트 입니다</h1>

      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>

      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1 올리기</button>

      {/* <div>카운트(state): {countState}</div>
      <button
        onClick={useCallback(() => {
          console.log(countLet + 1);
          countLet += 1; // countLet = countLet + 1
        },[])}
      >
        카운트(state) +1 올리기
      </button> */}
      {/* 10번 퀴즈부분 */}
      <div>=======================</div>
      <MemoizationChildPage />
    </>
  );
}
