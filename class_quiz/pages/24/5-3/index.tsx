import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputsPage from "../../../src/components/commons/inputs/Input";
import ButtonPage from "../../../src/components/commons/buttons/button";
import { IFormDatas } from "../../../src/components/commons/buttons/button.types";

const schema = yup.object({
  writer: yup
    .string()
    .required("작성자를 입력해주세요")
    .max(5, "5글자 이내로 적어주세요"),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내로 적어주세요"
    ),
  title: yup
    .string()
    .max(100, "100자 이내로 적어주세요")
    .required("제목을 입력해주세요"),
  contents: yup
    .string()
    .max(1000, "1000자 이내로 적어주세요")
    .required("내용을 입력해주세요"),
});

export default function ReactHookForm() {
  const { register, handleSubmit, formState } = useForm<IFormDatas>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormDatas) => {
    console.log(data.writer, data.title, data.contents);
  };

  return (
    <form>
      작성자: <InputsPage type="text" register={register("writer")} />
      <div>{formState.errors.writer?.message}</div>
      비밀번호: <InputsPage type="password" register={register("password")} />
      <div>{formState.errors.password?.message}</div>
      제목: <InputsPage type="text" register={register("title")} />
      <div>{formState.errors.title?.message}</div>
      내용: <InputsPage type="text" register={register("contents")} />
      <div>{formState.errors.contents?.message}</div>
      <ButtonPage
        title={"등록하기"}
        handleSubmit={handleSubmit}
        onClickSubmit={onClickSubmit}
      />
    </form>
  );
}
