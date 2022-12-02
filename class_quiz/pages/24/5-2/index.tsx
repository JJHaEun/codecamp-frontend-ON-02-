import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

interface IFormDatas {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

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
      작성자: <input type="text" {...register("writer")} />
      <div>{formState.errors.writer?.message}</div>
      비밀번호: <input type="password" {...register("password")} />
      <div>{formState.errors.password?.message}</div>
      제목: <input type="text" {...register("title")} />
      <div>{formState.errors.title?.message}</div>
      내용: <input type="text" {...register("contents")} />
      <div>{formState.errors.contents?.message}</div>
      <button type="button" onClick={handleSubmit(onClickSubmit)}>
        등록하기
      </button>
    </form>
  );
}
