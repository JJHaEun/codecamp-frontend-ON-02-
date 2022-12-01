import { ICreateUsersUIProps } from "./CreateUsers.types";

export default function CreateUsersUI(props: ICreateUsersUIProps) {
  return (
    <>
      이메일: <input type="text" onChange={props.onChangeEmailSubmit} />
      이름: <input type="text" onChange={props.onChangeNameSubmit} />
      비밀번호:{" "}
      <input type="password" onChange={props.onChangePasswordSubmit} />
      <button onClick={props.onClickCreateUsers}>회원가입하기</button>
    </>
  );
}
