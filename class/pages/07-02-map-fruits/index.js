//벡엔드에서 받아온 데이터라고 가정.(컴포넌트위에 만든 이유:컴포넌트 리렌더링되도 다시 안만들어짐
//(변하지 않는 값(상수)등.emotion,gql등을 function의 밖에서 즉, 컴포넌트 밖에서 만든이유임 )
const classmate = [
  { name: "철수", school: "떡잎유치원" },
  { name: "영희", school: "떡잎유치원" },
  { name: "훈이", school: "떡잎유치원" },
];

export default function MapFruitsPage() {
  const aaa = [
    <div>1 레드향</div>,
    <div>2 샤인머스켓</div>,
    <div>3 산청딸기</div>,
  ]; //가장 기본예제

  //   실무형 예제(aaa와 같은 결과.데이터만 지금 다르게 넣은것)
  const bbb = [
    { name: "철수", school: "떡잎유치원" },
    { name: "영희", school: "떡잎유치원" },
    { name: "훈이", school: "떡잎유치원" },
  ].map((el) => (
    <div>
      {el.name} {el.school}
    </div>
  ));

  //   또는
  //결과 같음.
  const ccc = classmate.map((el) => (
    <div>
      {el.name} {el.school}
    </div>
  ));
  return <>{bbb}</>;
}
