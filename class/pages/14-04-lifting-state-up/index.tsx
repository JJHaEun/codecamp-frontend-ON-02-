import { useState } from "react";
import Child1 from "../../src/components/units/14-lifting-state-up/Child1";
import Child2 from "../../src/components/units/14-lifting-state-up/Child2";

export default function liftingStateUpPage() {
  const [count, setCount] = useState(0);
  const onClickCountUp = () => {
    setCount((prev) => prev + 1);
  };
  // 부모의 스테이트 조작방법1
  return (
    <>
      <Child1 count={count} onClickCountUp={onClickCountUp} />
      <div>---------------</div>
      <Child2 count={count} setCount={setCount} />
      {/* 형제끼리 스테이트 나눠갖기 */}
    </>
  );
}
