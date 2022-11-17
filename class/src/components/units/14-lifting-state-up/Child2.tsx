export default function Child2(props: any) {
  const onClickCountUp = () => {
    props.setCount((prev: number) => prev + 1);
  };
  // 부모의 state조작하는 방법2
  return (
    <>
      <div>자식2의 카운트:{props.count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!</button>
    </>
  );
}
