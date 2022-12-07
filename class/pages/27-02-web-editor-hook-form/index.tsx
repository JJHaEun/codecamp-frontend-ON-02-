// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
export default function WebEditorPage() {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange", // 변경시마다 검증.(비제어 컴포넌트 방식을 제어컴포넌트 방식으로. 즉 입력시마다 검증되게)
  });
  //   const [value, setValue] = useState();
  //   const qqq = (값) => setValue(값);

  // ReactQuill 만든 개발자들이 만든 onChange이므로 event대신 value가 들어옴(이벤트 안들어옴)
  const onChangeContents = (value: string) => {
    console.log(value);
    // 콘솔에 찍히는 것을 확인해보니 입력된내용들이 <p>태그로 감싸져 들어감. 그런데 내용을 다 지웠더라도 "<p><br/><p>"태그가 남아있는것을 콘솔창에서 확인. 이것도 지워주기위해 조건담
    setValue("contents", value === "<p><br/></p>" ? "" : value); // register로 등록하지 않고 강제로 값을 넣어주는 기능//onChange모드로 바꾸기 트리거 해주는 기능추가(검증위함)
    void trigger("contents"); // onChange됐다고 강제로 알려주는 기능(위에서 엄급한것처럼. 검증위함))
  };
  const ReactQuillTextarea = styled(ReactQuill)`
    width: 900px;
    height: 450px;
  `;
  return (
    <div>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용:
      <ReactQuillTextarea onChange={onChangeContents} />
      {/* onChange가 리엑트 훅폼의 register에도 있고, 리텍트 퀼에도 있어 겹침. 따라서 여기에는 register못 넣고 수동으로 넣어주기...? 
      setValue 라는 것이 제공됨.
      입력하면 onChangeContents가 작동,value가 들어가게됨. 그 value를 setValue에 넣어주기 다만 value에 키값을 적어주고...
      setValue("키",value)
      */}
      <br />
      <button>등록하기</button>
    </div>
  );
}
