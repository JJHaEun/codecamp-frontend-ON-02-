import { ILoginSuccessUIProps } from "./LoginSuccess.types";

export default function LoginSuccessUI(props: ILoginSuccessUIProps) {
  return <>{props.data?.fetchUserLoggedIn.name} 유저님 환영합니다!</>;
}
