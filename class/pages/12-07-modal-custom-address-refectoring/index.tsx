import { Modal } from "antd";

import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    // 다 같은모양이므로 하나로 만들어 사용.
    setIsOpen((prev) => !prev); // 임시저장공간에서 isOpen찾음. 없으면 기존 state가져옴.여기서는 true를 가져오기위해 !  반대연산자 사용
  };

  // const handleOk = () => {
  //   setIsOpen(prev => !prev); // false라는 것은 기존에 true였다는 의미이니 꺼줘야함.
  // };

  // const handleCancel = () => {// 스위치변수 . 기존값을 가져와 역으로 바꿔주기만 하면됨.
  //   setIsOpen(prev => !prev);// 다 모양이 같아짐. boolean의로 받는 값들을 다 스위치 변수 라고 함.
  // };

  const handleComplete = (address: Address) => {
    console.log(address);
    // setIsOpen(prev => !prev);
    onToggleModal();
  };
  return (
    <>
      <button onClick={onToggleModal}>모달창 열기!!</button>

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
          onOk={onToggleModal} // ok클릭시 실행할 함수
          onCancel={onToggleModal} // 취소클릭시 실행할 힘수
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
