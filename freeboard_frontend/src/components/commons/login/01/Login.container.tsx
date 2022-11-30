import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/libraries/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import LogInPageUI from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onClickLogIn = async () => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken; // 얘를 글로벌스테이트에 담음 얘는
      if (!accessToken) {
        Modal.error({ content: "비밀번호를 확인해주세요" });
        return;
      }
      setAccessToken(accessToken);
      void router.push(`/`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <LogInPageUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogIn={onClickLogIn}
    />
  );
}
