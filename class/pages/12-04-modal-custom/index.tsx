import { Modal } from "antd";
import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [pw, setPw] = useState("");
  const showModal = () => {
    setIsOpen(true); // 모달 창 열림
  };

  const handleOk = () => {
    setIsOpen(false); // false이니 모달창 눈에 안보임
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>모달창 열기!!</button>
      <Modal
        title="모달제목"
        open={isOpen}
        onOk={handleOk} // ok클릭시 실행할 함수
        onCancel={handleCancel} // 취소클릭시 실행할 힘수
      >
        비밀번호 입력: <input type="password" onChange={setPw} />
      </Modal>
    </>
  );
}
