import InputsPage from "../../commons/inputs/Input";
import { ICreateUIProps } from "./create.types";
import "react-quill/dist/quill.snow.css";
import { Button, ReactQuillTextarea } from "./create.styles";

export default function CreatePageUI(props: ICreateUIProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
      작성자: <InputsPage type="text" register={props.register("writer")} />
      비밀번호:{" "}
      <InputsPage type="password" register={props.register("password")} />
      제목: <InputsPage type="text" register={props.register("title")} />
      <ReactQuillTextarea onChange={props.onChangeContents} />
      <Button>등록하기</Button>
    </form>
  );
}
