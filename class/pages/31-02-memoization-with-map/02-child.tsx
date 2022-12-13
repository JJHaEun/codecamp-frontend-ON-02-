import { memo } from "react";
// import React from "react";

function Word(props: any) {
  console.log("자식이 랜더링 됩니다.", props.el);

  return (
    <>
      <span>{props.el}</span>
    </>
  );
}

// React.memo() 같은것
export default memo(Word);
// memo로 감싸면 기록됨.  HOC임.
