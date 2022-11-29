import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import FetchPolicyCExample from "../../src/components/units/21-fetch-policy";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function GlobalStatePage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [isOpen, setIsOpen] = useState(false);

  const onClickIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      <button onClick={onClickIsOpen}>
        버튼을 클릭시 새로운 컴포넌트가 나타납니다!!
      </button>
      {isOpen && <FetchPolicyCExample />}
      {/* 조건부랜더링 */}
    </div>
  );
}
