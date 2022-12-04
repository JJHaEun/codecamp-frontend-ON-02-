import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/libraries/store";
import ProductWite from "../../../src/components/units/productBoard/write/ProductWrite.container";

export default function freeboardWrite() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(false);
  }, []);
  return <ProductWite />;
}
