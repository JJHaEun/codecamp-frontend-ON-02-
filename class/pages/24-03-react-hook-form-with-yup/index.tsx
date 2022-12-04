import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  boardAddress: {
    addressDetail: string;
  };
}

const schema = yup.object({
  // 검증하기
  writer: yup.string().required("작성자를 입력해주세요"),
  title: yup.string().required("제목을 입력해주세요"),
  contents: yup.string().required("내용을 입력해주세요"),

  // email:yup    // 회원가입에 적용
  // .string()
  // .email("이메일 형식에 적합하지 않습니다")
  // .required("이메일은 필수 입력입니다")

  // password:yup
  // .string()
  // .min(4,"비밀번호는 최소 4자리이상 입력")
  // .max(15,"최대 15자리까지만 입력 가능합니다")

  // phone: yup
  //   .string()
  //   .matches(/^\d{3}-\d{3,4}-\d{4}$/, "전화번호 형식에 맞지 않습니다.")
  //   .required("필수 형식입니다"),
});

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormData) => {
    console.log(
      //   data.writer,
      //   data.contents,
      //   data.title,
      data.boardAddress.addressDetail
    );
  };

  console.log("리랜더링되나요?");
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <div>{formState.errors.writer?.message}</div>
      {/* 에러가 있으면(?) 보여주기 */}
      제목: <input type="text" {...register("title")} />
      <div>{formState.errors.title?.message}</div>
      내용: <input type="text" {...register("contents")} />
      <div>{formState.errors.contents?.message}</div>
      주소 : <input type="text" {...register("boardAddress.addressDetail")} />
      <button style={{ background: formState.isValid ? "yellow" : "" }}>
        등록하기
      </button>
    </form>
  );
}
/* <button type="reset">지우기</button>
 <button type="submit">보내기</button> // 얘가 기본값
 <button type="button">나만의 버튼</button> */
