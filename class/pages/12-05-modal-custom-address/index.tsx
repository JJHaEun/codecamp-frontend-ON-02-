import { Modal } from "antd";

import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true); // 모달 창 열림
  };

  const handleOk = () => {
    setIsOpen(false); // false이니 모달창 눈에 안보임
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (address: Address) => {
    console.log(address);
    setIsOpen(false);
  };
  return (
    <>
      <button onClick={showModal}>모달창 열기!!</button>

      {/* 모달 종료방식  -1. 모달 숨기는 방법 (ex, 이력서 작성시 등) */}
      {/* <Modal
        open={isOpen}
        onOk={handleOk} // ok클릭시 실행할 함수
        onCancel={handleCancel} // 취소클릭시 실행할 힘수
      >
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}

      {/* 모달 종료방식  -2. 모달 삭제하는 방법  (ex, 신용카드, 비밀번호 등) */}
      {isOpen && ( // isOpen이 true면 모달보이고 false면 모달 안보이게 (버튼을 누르면 state바뀌어 리렌더됨(다시그려짐)즉, 스테이트 바뀌면 모달을 다시그려주는 것이기에 지우고 삭제하는 원리가 됨.)
        <Modal
          open={true}
          onOk={handleOk} // ok클릭시 실행할 함수
          onCancel={handleCancel} // 취소클릭시 실행할 힘수
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
