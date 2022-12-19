import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../src/commons/libraries/store";
import WritePage from "../../../../src/components/units/example/write";

export default function EditPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  console.log(isEdit);
  useEffect(() => {
    setIsEdit((prev) => !prev);
  }, []);
  return <WritePage />;
}
