import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";

import LogInPageUI from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";
import * as yup from "yup";
import { ILogInFormData } from "./Login.types";
import { accessTokenState } from "../../../../../commons/libraries/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../../commons/types/generated/types";

export const schema = yup.object({
  email: yup
    .string()
    .email("이메일형식에 맞지 않습니다")
    .required("이메일을 입력해주세요"),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내입니다"
    )
    .required("비밀번호를 입력해주세요"),
});

export default function LogIn() {
  const { register, handleSubmit, formState } = useForm<ILogInFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const Token = useRecoilState(accessTokenState);
  const router = useRouter();

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onClickLogIn = async (data: ILogInFormData) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      if (!accessToken) {
        Modal.error({ content: "비밀번호를 확인해주세요" });
        return;
      }
      Token[1](accessToken);

      localStorage.setItem("accessToken", accessToken);

      void router.push(`/28/payment/loading`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <LogInPageUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickLogIn={onClickLogIn}
    />
  );
}
