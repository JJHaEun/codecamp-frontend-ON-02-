import { memo } from "react";

function MemoizationChildPage() {
  console.log("자식이 랜더링 됩니다.");

  return (
    <>
      <>
        <div>=======================</div>
        <h1>자식컴포넌트</h1>
        <div>=======================</div>
      </>
    </>
  );
}
export default memo(MemoizationChildPage);
