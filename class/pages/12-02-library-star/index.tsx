import styled from "@emotion/styled";
import { Rate } from "antd";
import { useState } from "react";

const MyStar = styled(Rate)`
  font-size: 50px;
`;

export default function LibraryIconPage() {
  const [value, setValue] = useState(3); // value 초기값 3

  // const qqq = (value: number) => setValue(value); // 여기서 선택한 value 여기의 value 는 매개변수(소괄호 안의것)
  // 만약 배개변수 이름이 다른데 value를 찾고있다면 중괄호 안 (스코프)에서 찾다가 못찾고 스코프체인으로 바깥에서 찾아 넣음

  // const qqq = (aaa: number) => {
  //   setValue(aaa); // 위와 동일
  // };
  return <MyStar onChange={(value: number) => setValue(value)} />;
  // 함수자체를 넣는법.
  // 받아온 값과 들어간 값(지금 둘다 value를 받고있음)이 같으면 생략가능
  // setValue 만 적게됨  onChange={setValue}
}
