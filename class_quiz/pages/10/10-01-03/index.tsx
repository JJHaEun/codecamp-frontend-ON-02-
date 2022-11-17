import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [locate, setLocate] = useState("");

  const onToggleModal = () => {
    // 다 같은모양이므로 하나로 만들어 사용.
    setOpen((prev) => !prev); // 임시저장공간에서 isOpen찾음. 없으면 기존 state가져옴.여기서는 true를 가져오기위해 !  반대연산자 사용
  };
  const handleComplete = (address: Address) => {
    setLocate(address.address);
    onToggleModal();
  };
  return (
    <>
      <button onClick={onToggleModal}>모달열기</button>
      {open && (
        <Modal
          // centered
          open={open}
          onOk={onToggleModal}
          onCancel={onToggleModal}
          width={400}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
      <div>{locate}</div>
    </>
  );
};

export default App;
