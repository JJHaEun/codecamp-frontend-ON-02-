import { Button, Modal } from "antd";
import { useState } from "react";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        모달열기
      </Button>
      <Modal
        title="게시글 등록"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={400}
      >
        <p>게시글이 등록되었습니다</p>
      </Modal>
    </>
  );
};

export default App;
