import { useRouter } from "next/router";

export default function staticRoutingPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    router.push("/05-08-dynamic-routed-board-query/230");
  };
  const onClickMove2 = () => {
    router.push("/05-08-dynamic-routed-board-query/2");
  };
  const onClickMove3 = () => {
    router.push("/05-08-dynamic-routed-board-query/3");
  };
  const onClickMove100 = () => {
    router.push("/05-08-dynamic-routed-board-query/100");
  };
  return (
    <>
      <button onClick={onClickMove1}>230번 게시글로 이동하기!!!</button>
      <br />
      <button onClick={onClickMove2}>2번 게시글로 이동하기!!!</button>
      <br />
      <button onClick={onClickMove3}>3번 게시글로 이동하기!!!</button>
      <br />
      <button onClick={onClickMove100}>100번 게시글로 이동하기!!!</button>
      <br />
    </>
  );
}
