export default function HOFPage() {
  const onClickButton = (click) => () => {
    console.log(click);
  };
  return <button onClick={onClickButton(123)}>클릭!!</button>;
}
