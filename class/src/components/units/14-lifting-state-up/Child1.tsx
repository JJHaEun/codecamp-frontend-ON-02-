export default function Child1(props: any) {
  // 부모의 스테이트 조작방법1
  return (
    <>
      <div>자식1의 카운트:{props.count}</div>
      <button onClick={props.onClickCountUp}>카운트 올리기!!</button>
    </>
  );
}
