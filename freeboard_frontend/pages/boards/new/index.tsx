import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/libraries/store";
import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";

export default function freeboardWrite() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  console.log(isEdit);
  useEffect(() => {
    setIsEdit(false);
  }, []);
  return <BoardWrite />;
}
