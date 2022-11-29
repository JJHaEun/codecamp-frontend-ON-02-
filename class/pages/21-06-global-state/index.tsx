import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../src/commons/store";
import BoardWrite from "../../src/components/units/21-global-state/BoardWrite.containter";

export default function GlobalStatePage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  useEffect(() => {
    // 이 페이지가 렌더링되고 나서 isEdit가 true로 바뀜. isEditState의 default가 false니끼
    setIsEdit((prev) => !prev);
  }, []);
  return <BoardWrite />;
}
