import { useCount } from "../../src/components/hooks/useCount";

export default function QuizPage() {
  const { count, onClickCountUp } = useCount();
  return (
    <>
      <div>
        <p>지금의 카운트는 {count} 입니다!</p>
        <button onClick={onClickCountUp}>Count up!</button>
      </div>
    </>
  );
}
