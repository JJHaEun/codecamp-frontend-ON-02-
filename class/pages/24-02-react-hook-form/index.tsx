import { useForm } from "react-hook-form";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  boardAddress: {
    addressDetail: string;
  };
}

export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm<IFormData>();

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
      제목: <input type="text" {...register("title")} />
      내용: <input type="text" {...register("contents")} />
      주소 : <input type="text" {...register("boardAddress.addressDetail")} />
      <button>등록하기</button>
    </form>
  );
}
/* <button type="reset">지우기</button>
 <button type="submit">보내기</button> // 얘가 기본값
 <button type="button">나만의 버튼</button> */
