import { ILogInPageUIProps } from "./Login.types";
import * as S from "./Login.styles";

export default function LogInPageUI(props: ILogInPageUIProps) {
  return (
    <S.LogInPage>
      <S.LogIn>
        <S.LogInTitle>LOGIN PAGE</S.LogInTitle>
        이메일{" "}
        <S.LogInInput
          type="text"
          onChange={props.onChangeEmail}
          placeholder="이메일을 입력하세요"
        />
        비밀번호{" "}
        <S.LogInInput
          type="password"
          onChange={props.onChangePassword}
          placeholder="비밀번호를 입력하세요"
        />
        <S.LogInButton onClick={props.onClickLogIn}>로그인</S.LogInButton>
      </S.LogIn>
    </S.LogInPage>
  );
}
