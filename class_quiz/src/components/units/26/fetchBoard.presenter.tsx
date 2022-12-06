import { IFetchBoardPageUIProps } from "./fetchBoard.types";
import * as S from "./fetchBoard.styles";
import ButtonPage2 from "../../commons/buttons/02/button";
import InputsPage from "../../commons/inputs/Input";
import TextareaPage from "../../commons/textarea/textarea";

export default function FetchBoardPageUI(props: IFetchBoardPageUIProps) {
  return (
    <S.Board>
      <div>
        <S.Writer>작성자</S.Writer>
        <S.Title>제목</S.Title>
      </div>
      {props.data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <S.Writer>{el.writer}</S.Writer>
          <S.Title>{el.title}</S.Title>
          <div>
            <S.DeleteButton onClick={props.onClickDelete} id={el._id}>
              X
            </S.DeleteButton>
          </div>
        </div>
      ))}
      <S.WriteBoard>
        <form>
          <div>
            작성자:{" "}
            <InputsPage type="text" register={props.register("writer")} />
            비밀번호:{" "}
            <InputsPage type="password" register={props.register("password")} />
            제목: <InputsPage type="text" register={props.register("title")} />
            내용: <TextareaPage register={props.register("contents")} />
          </div>
          <ButtonPage2
            title={"등록하기"}
            handleSubmit={props.handleSubmit}
            onClickCreate={props.onClickCreate}
          ></ButtonPage2>
        </form>
      </S.WriteBoard>
    </S.Board>
  );
}
