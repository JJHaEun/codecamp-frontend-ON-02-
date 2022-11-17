import { Modal } from "antd";

const success = () => {
  Modal.success({ content: "등록에 성공했습니다" });
};

const error = () => {
  Modal.error({ content: "비밀번호가 틀립니다." });
};

const App: React.FC = () => (
  <>
    <button onClick={success}>성공했을때</button>
    <button onClick={error}>실패했을때</button>
  </>
);

export default App;

// export default function App() {
//   return (
//     <>
//       <button onClick={success}>성공했을때</button>
//       <button onClick={error}>실패했을때</button>
//     </>
//   );
// }
// 원래의 모습. 위의  화살표 함수와 동일. : React.FC는 함수형 컴포넌트라는 타입표기임.
