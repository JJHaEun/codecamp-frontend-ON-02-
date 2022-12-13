import { memo } from "react";
// import React from "react";

function MemoizationChildPage() {
  console.log("자식이 랜더링 됩니다.");

  return (
    <>
      <div>=======================</div>
      <h1>저는 자식컴포넌트 입니다</h1>
      <div>=======================</div>
    </>
  );
}

// React.memo() 같은것
export default memo(MemoizationChildPage);
// memo로 감싸면 기록됨. 즉, HOC임.
