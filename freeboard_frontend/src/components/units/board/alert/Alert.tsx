import { Modal } from "antd";
export const success = () => {
  Modal.success({
    title: "완료!",
    content: "성공입니다",
  });
};

export const warning = () => {
  Modal.warning({
    title: "This is a warning message",
    content: "some messages...some messages...",
  });
};
