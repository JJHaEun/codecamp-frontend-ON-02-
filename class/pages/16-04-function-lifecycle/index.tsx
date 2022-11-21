import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function FunctionCounterPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  // 클래스 라이프사이클
  // componentDidMount() {
  //   console.log("그려지고 나서 실행"); // 인풋창 커서 깜빡임
  //   // 페이지 권한확인
  // }
  // 함수형에서 라이프 사이클 대체
  useEffect(() => {
    console.log("그려지고 나서 실행");
  }, []); // 처음에 실행되고 그 다음 조건없음. 따라서 실행안됨(의존성배열 없음)

  // componentDidUpdate() {
  //   console.log("변경되고 나서 실행");
  // }

  // 함수형에서 라이프 사이클 대체
  useEffect(() => {
    console.log("변경되고 나서 실행");
  }); // 의존성배열 다 빼짐 ==> '모든' 의미. 의존성배열이 있든없든 useEffect는 무조건 한번는 실행

  // componentWillUnmount() {
  //   console.log("사라질때 실행");
  //   // 채팅방 나가기를 예시로 ==> 나가기버튼 클릭 ==> 채팅방 인원줄어들기,나간사람 출력.
  //   // 유저가 다른 메뉴등을 클릭해 나가는  경우도 생각해 그 컴포넌트
  //   // (체팅방 나가기)가 사라지기 전에 실행됨.
  // }
  useEffect(() => {
    return () => {
      console.log("사라질때 실행");
    };
  }, []); // 처음 한번만 실행

  // 1.useEffect 특징.겹치는것 하나로 합치기 가능. 위치 상관없음.  저 위에써도되고, 여기아래써도되고....

  // useEffect(() => {
  //   console.log("그려지고 나서 실행");

  //   return () => {
  //     console.log("사라질때 실행");
  //   };
  // }, []); // dependency array(의존성배열)없기에 한번만실행

  // useEffect(() => {
  //   console.log("변경되고 나서 실행");// 처음도 변경이라고 보기에 처음실행시에도 실행됨.
  // });

  // 2.useEffect의 잘못된 사용 예제(1. 추가 랜더링, 2. 무한루프 발생)
  // useEffect(() => {
  //   setCount((prev) => prev + 1); // setState하여 state바뀌면서 불필요하게 두번 랜더링됨. 가급적 사용 지양
  // }, []); // 유지보수성을 생각해 결정.
  // dependency array(의존성배열)를 완전히 안쓰거나,state를 넣을경우 무한루프 발생 . 현재 count를 옐 끊임없이 숫자가 계속 자동으로 올라감.
  console.log("나는 언제실행되게? 제일먼저!!");

  const onClickCountUp = () => {
    setCount(
      (prev) => prev + 1
      // prev사용방법
      // setCount(prevState => ( prevState + 1 // 위와 동일.
      // 카운트 증가
    );
  };

  const onClickMove = () => {
    void router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!</button>
      <button onClick={onClickMove}>나가기</button>
    </>
  );
}
