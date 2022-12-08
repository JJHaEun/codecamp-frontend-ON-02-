export function useMyState<S>(aaa: S): [S, () => void] {
  // 매개변수에 인자가 들어옴. 매개변수가 초기값이 됨
  const myState = aaa; // aaa를 사용하여 state의 초기값 설정
  const mySetState = (bbb) => {
    console.log(`${myState}  에서 ${bbb} 로 state를 변경하겠습니다`);
    // 1. bbb로 state변경(myState변경하기)
    console.log(`변경된 ${bbb}를 사용해서 컴포넌트를 리렌더링 하겠습니다`); //2. 해당컴포넌트를 리랜더링 시키기!!!!(클래스 컴포넌트에서 render함수가 실행되는것이 setState에도 있음.)
  };
  return [myState, mySetState];
}

// 사용자
const [count, setCount] = useMyState<number>(10);
