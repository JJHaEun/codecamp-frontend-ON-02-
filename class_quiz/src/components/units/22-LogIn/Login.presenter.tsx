import { ILogInPageUIProps } from "./Login.types";

export default function LogInPageUI(props: ILogInPageUIProps) {
  return (
    <>
      이메일: <input type="text" onChange={props.onChangeEmail} />
      비밀번호: <input type="password" onChange={props.onChangePassword} />
      <button onClick={props.onClickLogIn}>로그인</button>
    </>
  );
}
