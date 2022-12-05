// import { useRouter } from "next/router";
import { useMoveToPage } from "../../src/components/commons/hooks/useMoToPage";

export default function CustomHooksUseMoveToPage() {
  //   const router = useRouter();
  //   const onClickMoveToPage = (path: string) => () => {
  //     void router.push(path);
  //   };
  const { onClickMoveToPage } = useMoveToPage(); // 결과로 해당함수의 리턴값이 들어옴 구조분해할당방식으로 가져옴.
  return (
    <>
      <button onClick={onClickMoveToPage("/board")}>게시판으로 이동</button>
      <button onClick={onClickMoveToPage("/market")}>마켓으로 이동</button>
      <button onClick={onClickMoveToPage("/myPage")}>마이페이지로 이동</button>
    </>
  );
}
