import { ILogInPageUIProps } from "./Login.types";
import * as S from "./Login.styles";
import LogInInputsPage from "../../inputs/loginInput/Input";
import LoginUserButtonPage from "../../buttons/loginUserbutton/button";

export default function LogInPageUI(props: ILogInPageUIProps) {
  return (
    <S.LogInPage>
      <form>
        <S.LogIn>
          <S.LogInTitle>LOGIN PAGE</S.LogInTitle>
          이메일
          <LogInInputsPage type="text" register={props.register("email")} />
          <div>{props.formState.errors.email?.message}</div>
          비밀번호
          <LogInInputsPage
            type="password"
            register={props.register("password")}
          />
          <div>{props.formState.errors.password?.message}</div>
          <LoginUserButtonPage
            title={"로그인"}
            handleSubmit={props.handleSubmit}
            onClickLogIn={props.onClickLogIn}
          ></LoginUserButtonPage>
        </S.LogIn>
      </form>
    </S.LogInPage>
  );
}
