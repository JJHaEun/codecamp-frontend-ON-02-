import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../src/commons/libraries/store";
import ProductWite from "../../../../src/components/units/productBoard/write/ProductWrite.container";

export default function EditPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  console.log(isEdit);
  useEffect(() => {
    setIsEdit(true);
  }, []);
  return <ProductWite />;
}
