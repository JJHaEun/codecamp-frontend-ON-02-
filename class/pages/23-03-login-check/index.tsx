import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;
export default function LoginPage() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    // 결과로는 accessToken 받아오게됨
    // mutation날리기
    try {
      // 1. 로그인해서 accessToken받아오기
      const result = await loginUser({
        variables: {
          email, //  $변수. 임의의것 사용가능. 단 위에 쿼리문변수도 동일하게 적어줘야함 email:email스테이트,
          // password: password스테이트 ===> 키와 값 같으니 하나만 적어줌
          password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken; // 얘를 글로벌스테이트에 담음 얘는
      if (!accessToken) {
        Modal.error({ content: "로그인에 실패하였습니다. 다시 시도해주세요" });
        return;
      }
      // 2. accessToken을 글로벌 state에 저장하기(useRecoilState로 만들기)//|
      setAccessToken(accessToken); // 가장 가까운 accessToken을 스코프 체인으로 넣어줌.// 여기에
      // 로컬스토리지에 저장
      localStorage.setItem("accessToken", accessToken); // 임시 사용. (나중에 지울예정)
      // 3. 로그인 성공페이지로 이동하기
      void router.push(`/23-04-login-check-success`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogIn}>로그인하기</button>
    </>
  );
}
