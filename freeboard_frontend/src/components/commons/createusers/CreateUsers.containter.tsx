import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";
import CreateUsersUI from "./CreateUsers.presenter";
import { CREATE_USER } from "./CreateUsers.queries";
import * as yup from "yup";
import { IFormDatas } from "../buttons/createUserbutton/button.types";
import { useAuthPass } from "../hooks/useAuth.pass";

export const schema = yup.object({
  email: yup
    .string()
    .email("이메일형식에 맞지 않습니다")
    .required("필수 형식입니다"),
  name: yup.string().required("필수 형식입니다"),
  password: yup
    .string()
    .min(4, "최소 4자 이상을 입력해주세요")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내로 적어주세요"
    )
    .required("필수 형식입니다"),
});

export default function CreateUsers() {
  useAuthPass();
  const { register, handleSubmit, formState } = useForm<IFormDatas>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // const [emailSubmit, setEmailSubmit] = useState("");
  // const [nameSubmit, setNamesubmit] = useState("");
  // const [passwordSubmit, setPasswordSubmit] = useState("");
  const router = useRouter();
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  // const onChangeEmailSubmit = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEmailSubmit(event.target.value);
  // };
  // const onChangeNameSubmit = (event: ChangeEvent<HTMLInputElement>) => {
  //   setNamesubmit(event.target.value);
  // };
  // const onChangePasswordSubmit = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPasswordSubmit(event.target.value);
  // };
  const onClickCreateUsers = async (data: IFormDatas) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            name: data.name,
            password: data.password,
          },
        },
      });
      Modal.success({ content: "회원가입이 완료되었습니다" });
      void router.push(`/login`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <CreateUsersUI
      // onChangeEmailSubmit={onChangeEmailSubmit}
      // onChangeNameSubmit={onChangeNameSubmit}
      // onChangePasswordSubmit={onChangePasswordSubmit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickCreateUsers={onClickCreateUsers}
    />
  );
}
