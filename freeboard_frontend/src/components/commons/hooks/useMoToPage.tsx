import { useRouter } from "next/router";
// import { useRecoilState } from "recoil";
// import { visitedPageState } from "../../../commons/libraries/store";

export function useMoveToPage() {
  // const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);
  const router = useRouter();
  const onClickMoveToPage = (path: string) => () => {
    // setVisitedPage(path); // 방문한 페이지 저장
    void router.push(path);
  };
  return {
    // visitedPage,
    onClickMoveToPage,
  };
}
