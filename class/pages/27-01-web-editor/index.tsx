// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
export default function WebEditorPage() {
  //   const [value, setValue] = useState();
  //   const qqq = (값) => setValue(값);

  // ReactQuill 만든 개발자들이 만든 onChange이므로 event대신 value가 들어옴(이벤트 안들어옴)
  const onChangeContents = (value: string) => {
    console.log(value);
  };
  const ReactQuillTextarea = styled(ReactQuill)`
    width: 900px;
    height: 450px;
  `;

  const onClickSubmit = async () => {
    const { Modal } = await import("antd"); // 코드 스플릿팅!(code-splitting)
    Modal.success({ content: "성공" });
  };
  return (
    <div>
      작성자: <input type="text" />
      <br />
      비밀번호: <input type="password" />
      <br />
      제목: <input type="text" />
      <br />
      내용:
      <ReactQuillTextarea onChange={onChangeContents} />
      <br />
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
