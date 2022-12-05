import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/libraries/store";
import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import ProductWite from "../../../src/components/units/productBoard/write/ProductWrite.container";

export default function freeboardWrite() {
  const result = useRecoilState(isEditState);
  useAuth();
  useEffect(() => {
    result[1](false);
  }, []);
  return <ProductWite />;
}
